using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TestController : ControllerBase
    {
        [HttpGet("public")]
        public IActionResult Public()
        {
            return Ok("Public endpoint working");
        }

        
        [Authorize]
        [HttpGet("private")]
        public IActionResult Private()
        {
            return Ok("You are authenticated.");
        }
        [Authorize(Roles ="Admin")]
        [HttpGet("admin-only")]

        public IActionResult AdminOnly()
        { 
            return Ok("You are an admin.");
        }
    }
}
