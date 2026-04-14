using HospitalManagementSystem.DTOs;
using HospitalManagementSystem.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;

        public AppointmentController(IAppointmentService appointmentService)
        {
            _appointmentService = appointmentService;
        }

        // USER BOOK APPOINTMENT
        [Authorize(Roles = "User")]
        [HttpPost("book")]
        public async Task<IActionResult> BookAppointment(BookAppointmentDto model)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var result = await _appointmentService.BookAppointment(userId, model);
            return Ok(result);
        }

        // ADMIN VIEW PENDING
        [Authorize(Roles = "Admin")]
        [HttpGet("pending")]
        public async Task<IActionResult> GetPendingAppointments()
        {
            var result = await _appointmentService.GetPendingAppointments();
            return Ok(result);
        }

        // ADMIN APPROVE
        [Authorize(Roles = "Admin")]
        [HttpPost("approve/{id}")]
        public async Task<IActionResult> Approve(int id)
        {
            var result = await _appointmentService.ApproveAppointment(id);
            return Ok(result);
        }

        // ADMIN REJECT
        [Authorize(Roles = "Admin")]
        [HttpPost("reject/{id}")]
        public async Task<IActionResult> Reject(int id)
        {
            var result = await _appointmentService.RejectAppointment(id);
            return Ok(result);
        }
    }
}
