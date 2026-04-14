using HospitalManagementSystem.Data;
using HospitalManagementSystem.DTOs;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Services;
using HospitalManagementSystem.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

public class AppointmentService : IAppointmentService
{
    private readonly ApplicationDbContext _context;
    private readonly IEmailService _emailService;

    public AppointmentService(
        ApplicationDbContext context,
        IEmailService emailService)
    {
        _context = context;
        _emailService = emailService;
    }

    public async Task<string> BookAppointment(int userId, BookAppointmentDto model)
    {
        var appointment = new Appointment
        {
            UserId = userId,
            DoctorId = model.DoctorId,
            AppointmentDate = model.AppointmentDate,
            ProblemDescription = model.ProblemDescription,
            AppointmentStatus = "Pending",
            PaymentStatus = "Pending",
            CreatedAt = DateTime.Now
        };

        _context.Appointments.Add(appointment);
        await _context.SaveChangesAsync();

        return "Appointment booked successfully.";
    }

    public async Task<IEnumerable<AppointmentResponseDto>> GetPendingAppointments()
    {
        // Fetch pending appointments with user and doctor details
        var appointments = await _context.Appointments
            .Include(a => a.User)
            .Include(a => a.Doctor)
            .Where(a => a.AppointmentStatus == "Pending")
            .ToListAsync();

        return appointments.Select(a => new AppointmentResponseDto
        {
            Id = a.Id,
            UserName = a.User.Name,
            UserEmail = a.User.Email,
            DoctorName = a.Doctor.Name,
            Specialization = a.Doctor.Specialization,
            AppointmentDate = a.AppointmentDate,
            ProblemDescription = a.ProblemDescription,
            AppointmentStatus = a.AppointmentStatus,
            PaymentStatus = a.PaymentStatus
        });
    }

    public async Task<string> ApproveAppointment(int id)
    {
        var appointment = await _context.Appointments
            .Include(a => a.User)
            .FirstOrDefaultAsync(a => a.Id == id);

        if (appointment == null)
            return "Appointment not found.";

        appointment.AppointmentStatus = "Approved";
        await _context.SaveChangesAsync();

        await _emailService.SendEmailAsync(
            appointment.User.Email,
            "Appointment Approved",
                $@"Subject: Appointment Approval Confirmation

                Dear {appointment.User.Name},

                We are pleased to inform you that your appointment request has been successfully approved.
                Your appointment is confirmed as per the selected date and time.
                Kindly ensure that you arrive a few minutes early for a smooth check-in process.
                If you need to reschedule or have any questions, please feel free to contact us.
                We look forward to serving you.

                Thank you");

        return "Appointment Approved and Email Sent.";
    }

    public async Task<string> RejectAppointment(int id)
    {
        var appointment = await _context.Appointments
            .Include(a => a.User)
            .FirstOrDefaultAsync(a => a.Id == id);

        if (appointment == null)
            return "Appointment not found.";

        appointment.AppointmentStatus = "Rejected";
        await _context.SaveChangesAsync();

        await _emailService.SendEmailAsync(
            appointment.User.Email,
            "Appointment Rejected",
            $@"Subject: Appointment Request Update

            Dear {appointment.User.Name},

            Thank you for your appointment request.
            We regret to inform you that your appointment has not been approved at this time.
            This may be due to scheduling conflicts or limited availability.
            We kindly encourage you to select an alternative date or time at your convenience.
            If you have any questions or need assistance, please feel free to contact us.

            Thank You");

        return "Appointment Rejected and Email Sent.";
    }
}
