using TodoListAPI.Models;

namespace TodoListAPI.Services
{
    public interface IJwtService
    {
        string GenerateToken(User user);
    }
}
