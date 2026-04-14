using System.Collections.Generic;
using System.Threading.Tasks;
using HospitalManagementSystem.DTOs;

namespace HospitalManagementSystem.Services.Interfaces
{
    public interface IAppointmentService
    {
        Task<string> BookAppointment(int userId, BookAppointmentDto model);
        Task<IEnumerable<AppointmentResponseDto>> GetPendingAppointments();
        Task<string> ApproveAppointment(int id);
        Task<string> RejectAppointment(int id);
    }
}
