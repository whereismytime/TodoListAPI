using System.ComponentModel.DataAnnotations;

namespace TodoListAPI.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        public string Email { get; set; } = string.Empty;

        [Required]
        public byte[] PasswordHash { get; set; } = null!;

        [Required]
        public byte[] PasswordSalt { get; set; } = null!;

        public DateTime DateCreated { get; set; } = DateTime.UtcNow;

        
        public ICollection<TodoItem> Todos { get; set; } = new List<TodoItem>();
    }
}
