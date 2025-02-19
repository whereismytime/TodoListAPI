TodoListAPI – Quick Start Guide
----------------------------------------------------------------

1. OVERVIEW
------------
TodoListAPI is a concise, modern web application for task management.
It uses ASP.NET Core (with EF Core) on the backend and stores JWT in HttpOnly cookies
for secure authentication. The frontend is built with HTML, CSS, and JavaScript,
featuring a sleek dark theme with smooth animations and responsive design.

Key Features:
  • Secure user registration and login.
  • Manage tasks: add, edit, delete, and mark as completed.
  • Sort tasks alphabetically (A–Z and Z–A).
  • Inline editing with real-time updates.
  • JWT stored in HttpOnly, Secure, SameSite=Strict cookies for enhanced security.

----------------------------------------------------------------

2. MAIN TECHNOLOGIES
---------------------
• ASP.NET Core, Entity Framework Core, SQL Server
• JWT (JSON Web Tokens) for authentication
• Swagger for API documentation
• HTML, CSS, JavaScript for the frontend
• SweetAlert2 for attractive popup notifications
• particles.js for animated background effects

----------------------------------------------------------------

3. INSTALLATION & SETUP
------------------------
Prerequisites:
  • .NET 8 SDK
  • SQL Server (or SQL Express)
  • Visual Studio or VS Code

Steps:
  1. Clone the repository and open the solution.
  2. Configure appsettings.json:
       - Set the database connection string ("DefaultConnection").
       - Set the JWT secret key and token expiration in the "Jwt" section.
  3. Run database migrations:
       dotnet ef database update
     (This creates or updates the database schema.)
  4. Start the project:
       dotnet run
     or open the solution in Visual Studio and click "Run".
  5. Access the application at:
       Main Site: https://localhost:7202
       Swagger UI: https://localhost:7202/swagger

----------------------------------------------------------------

4. PROJECT STRUCTURE
---------------------
Backend (ASP.NET Core API):
  - AuthController.cs      : Handles registration, login, profile retrieval, and logout.
  - TodoController.cs      : Provides CRUD operations for managing tasks.
  - JwtService.cs          : Generates and validates JWT tokens.
  - Program.cs             : Configures services, authentication (extracting JWT from cookies),
                             EF Core, and Swagger.
  - appsettings.json       : Stores database connection string and JWT settings.

Frontend (located in wwwroot/):
  - index.html             : Landing page with animations, a GIF demonstration, and sections (About, Features, Team, FAQ, Contacts).
  - login.html / register.html
                           : Pages for user authentication.
  - todo.html              : Personal task management interface with inline editing and sorting.
  - CSS Files              : index.css, login.css, register.css, todo.css (unified dark theme).
  - JavaScript Files       : index.js, login.js, register.js, todo.js (dynamic interactions and API calls).
  - Image Assets           : Located in the "img" folder (logo, demo GIFs, etc.).

----------------------------------------------------------------

5. SECURITY NOTES
------------------
• Passwords are hashed using HMACSHA512.
• JWT is stored in HttpOnly, Secure, SameSite=Strict cookies to protect against XSS and CSRF.
• API requests are sent with "credentials: 'include'" to automatically include cookies.
• Basic client-side input sanitization helps prevent simple XSS injections (additional server-side validation is recommended).

----------------------------------------------------------------

6. FUTURE ENHANCEMENTS
-----------------------
• Adding task deadlines and priority levels.
• Implementing a dark/light mode toggle.
• Enhancing the UI with more advanced animations.
• Further security and performance optimizations.

----------------------------------------------------------------
End of Guide
----------------------------------------------------------------
