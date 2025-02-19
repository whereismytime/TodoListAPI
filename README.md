====================================
       TODOLISTAPI – QUICK START GUIDE
====================================

1. OVERVIEW
-----------
TodoListAPI is a modern web application for managing tasks.
It uses ASP.NET Core (with EF Core) on the backend, and stores JWT in HttpOnly
cookies for secure authentication. The frontend (HTML/CSS/JS) features a sleek
dark theme with minimal animations and a responsive layout.

Key Features:
  - Secure user registration and login.
  - Manage tasks: add, edit, delete, mark as done.
  - Sort tasks alphabetically (A–Z, Z–A).
  - JWT stored in HttpOnly, Secure, SameSite=Strict cookies for security.
  - Inline task editing with simple fade-in transitions.

====================================

2. MAIN TECHNOLOGIES
--------------------
- ASP.NET Core, Entity Framework Core, SQL Server
- JWT (JSON Web Tokens) for authentication
- Swagger for API documentation
- HTML, CSS, JavaScript for the frontend
- SweetAlert2 for pop-up alerts
- particles.js for animated backgrounds

====================================

3. INSTALLATION & SETUP
-----------------------
**Prerequisites:**
- .NET 8 SDK
- SQL Server (or SQL Express)
- Visual Studio or VS Code

**Steps:**
1) Clone the repository and open the solution.
2) In `appsettings.json`, set:
   - Database connection string (`DefaultConnection`)
   - JWT secret key & expiration (`Jwt` section)
3) Run migrations:
   ```
   dotnet ef database update
   ```
   *(Creates/updates the database schema)*
4) Launch the app:
   ```
   dotnet run
   ```
   *(or press "Run" in Visual Studio)*
5) Access:
   - **Main Site:** https://localhost:7202
   - **Swagger UI:** https://localhost:7202/swagger

====================================

4. PROJECT STRUCTURE
--------------------
**Backend (ASP.NET Core):**
- `AuthController.cs`     → Registration, login, profile, logout
- `TodoController.cs`     → CRUD for tasks
- `JwtService.cs`         → JWT generation & validation
- `Program.cs`            → Configures services, EF Core, JWT, Swagger
- `appsettings.json`      → Database connection & JWT settings

**Frontend (wwwroot/):**
- `index.html`            → Landing page (dark theme, short demo)
- `login.html / register.html` → Authentication pages
- `todo.html`             → Task management (inline editing, sorting)
- `css/`                  → Stylesheets (index.css, etc.)
- `js/`                   → JavaScript files (index.js, etc.)
- `img/`                  → Images (logo, demo GIFs, etc.)

====================================

5. SECURITY NOTES
-----------------
- Passwords hashed via HMACSHA512.
- JWT stored in **HttpOnly, Secure, SameSite=Strict** cookies.
- `"credentials: 'include'"` used for API calls to send cookies automatically.
- Basic client-side sanitization helps prevent XSS.

====================================

6. FUTURE ENHANCEMENTS
----------------------
- Task deadlines & priority levels.
- Dark/light mode toggle.
- Advanced UI animations.
- Additional security improvements.

====================================
              END OF GUIDE
====================================
