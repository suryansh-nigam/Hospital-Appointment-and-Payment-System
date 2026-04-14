using HospitalManagementSystem.Common;
using HospitalManagementSystem.DTOs;

namespace HospitalManagementSystem.Services.Interfaces
{
    public interface IPaymentService
    {
        Task<ApiResponse<object>> CreateOrder(int appointmentId, int userId);
        Task<ApiResponse<object>> VerifyPayment(int userId, VerifyPaymentDto model);
    }
}