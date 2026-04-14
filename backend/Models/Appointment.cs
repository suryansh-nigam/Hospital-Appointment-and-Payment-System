using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using Microsoft.Identity.Client;

namespace HospitalManagementSystem.Models
{
    public class Appointment
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }

        public DateTime AppointmentDate { get; set; } 

        public string? ProblemDescription { get; set; }
        public string AppointmentStatus { get; set; } = "Pending";

        public string PaymentStatus { get; set; } = "Pending";

        public string? PaymentTransactionId { get; set; }

        public string? RazorpayOrderId { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
