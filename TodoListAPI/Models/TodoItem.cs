using System.ComponentModel.DataAnnotations;

namespace TodoListAPI.Models
{
    public class TodoItem
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }
        public bool IsCompleted { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        
        public int UserId { get; set; }

        [Required]
        public User User { get; set; } = null!;
    }
}
