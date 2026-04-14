using HospitalManagementSystem.Common;
using HospitalManagementSystem.Data;
using HospitalManagementSystem.DTOs;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Razorpay.Api;

namespace HospitalManagementSystem.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly ApplicationDbContext _context;
        private readonly RazorpaySettings _razorpaySettings;

        public PaymentService(
            ApplicationDbContext context,
            IOptions<RazorpaySettings> razorpaySettings)
        {
            _context = context;
            _razorpaySettings = razorpaySettings.Value;
        }

        public async Task<ApiResponse<object>> CreateOrder(int appointmentId, int userId)
        {
            var appointment = await _context.Appointments
                .Include(a => a.Doctor)
                .FirstOrDefaultAsync(a => a.Id == appointmentId && a.UserId == userId);

            if (appointment == null)
                return new ApiResponse<object>(
                    false,
                    "Appointment not found.",
                    null);

            if (appointment.AppointmentStatus != "Approved")
                return new ApiResponse<object>(
                    false,
                    "Appointment not approved yet.",
                    null);

            var amount = appointment.Doctor.Fees * 100;

            var options = new Dictionary<string, object>
            {
                { "amount", amount },
                { "currency", "INR" },
                { "receipt", Guid.NewGuid().ToString() }
            };

            RazorpayClient client = new RazorpayClient(
                _razorpaySettings.Key,
                _razorpaySettings.Secret
            );

            Order order = client.Order.Create(options);

            appointment.RazorpayOrderId = order["id"].ToString();
            await _context.SaveChangesAsync();

            var responseData = new
            {
                orderId = order["id"].ToString(),
                amount = Convert.ToInt32(order["amount"]),
                currency = order["currency"].ToString(),
                status = order["status"].ToString()
            };

            return new ApiResponse<object>(
                true,
                "Order created successfully.",
                responseData);
        }

        public async Task<ApiResponse<object>> VerifyPayment(int userId, VerifyPaymentDto model)
        {
            var appointment = await _context.Appointments
                .FirstOrDefaultAsync(a => a.Id == model.AppointmentId && a.UserId == userId);

            if (appointment == null)
                return new ApiResponse<object>(
                    false,
                    "Appointment not found.",
                    null);

            if (appointment.AppointmentStatus != "Approved")
                return new ApiResponse<object>(
                    false,
                    "Appointment not approved yet.",
                    null);

            if (appointment.PaymentStatus == "Completed")
                return new ApiResponse<object>(
                    false,
                    "Payment already completed.",
                    null);

            if (appointment.RazorpayOrderId != model.RazorpayOrderId)
                return new ApiResponse<object>(
                    false,
                    "Order ID mismatch.",
                    null);

            appointment.PaymentStatus = "Completed";
            appointment.PaymentTransactionId = model.RazorpayPaymentId;

            await _context.SaveChangesAsync();

            return new ApiResponse<object>(
                true,
                "Payment verified and appointment updated.",
                null);
        }
    }
}
