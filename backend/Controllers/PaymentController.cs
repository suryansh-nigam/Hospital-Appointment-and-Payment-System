using HospitalManagementSystem.DTOs;
using HospitalManagementSystem.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentService _paymentService;

        public PaymentController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [Authorize(Roles = "User")]
        [HttpPost("create-order/{appointmentId}")]
        public async Task<IActionResult> CreateOrder(int appointmentId)
        {
            var userId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier)?.Value
            );

            var result = await _paymentService.CreateOrder(appointmentId, userId);

            return Ok(result);
        }

        [Authorize(Roles = "User")]
        [HttpPost("verify-payment")]
        public async Task<IActionResult> VerifyPayment([FromBody] VerifyPaymentDto model)
        {
            var userId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier)?.Value
            );

            var result = await _paymentService.VerifyPayment(userId, model);

            return Ok(result);
        }
    }
}
