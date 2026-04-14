namespace HospitalManagementSystem.DTOs
{
    public class AppointmentResponseDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string DoctorName { get; set; }
        public string Specialization { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string ProblemDescription { get; set; }
        public string AppointmentStatus { get; set; }
        public string PaymentStatus { get; set; }
    }
}
