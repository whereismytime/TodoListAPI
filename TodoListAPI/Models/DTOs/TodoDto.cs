using System.ComponentModel.DataAnnotations;

namespace TodoListAPI.Models.DTOs
{
    public class TodoDto
    {
        [Required]
        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
