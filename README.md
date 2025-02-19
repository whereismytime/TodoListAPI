TodoListAPI – Quick Start Guide

-----------
1. **Overview**

TodoListAPI is a modern web application for task management.
It features a secure authentication system using JWT stored in HttpOnly cookies,
and a responsive frontend with a sleek dark theme.

Key Features:
- Secure user registration and login.
- Manage tasks: add, edit, delete, mark as completed.
- Sort tasks alphabetically (A–Z, Z–A).
- Inline editing with real-time updates.
- JWT stored in HttpOnly, Secure, SameSite=Strict cookies.

--------------------
2. **Technologies Used**

- **Backend:** ASP.NET Core, Entity Framework Core, SQL Server.
- **Authentication:** JWT (JSON Web Tokens).
- **API Documentation:** Swagger.
- **Frontend:** HTML, CSS, JavaScript.
- **Enhancements:** SweetAlert2 (pop-up alerts), particles.js (animated backgrounds).

-----------------------
3. **Installation & Setup**

**Prerequisites:**  
- .NET 8 SDK  
- SQL Server (or SQL Express)  
- Visual Studio or VS Code  

**Setup Steps:**  
1. Clone the repository and open the solution.  
2. Configure `appsettings.json`:  
- Set the database connection string (`DefaultConnection`).  
- Set the JWT secret key & expiration (`Jwt` section).  
3. Run database migrations:  
```sh
dotnet ef database update
```
4. Start the application:  
```sh
dotnet run
```  
*(or press "Run" in Visual Studio)*  
5. Access the application:  
- **Main Site:** https://localhost:7202  
- **Swagger UI:** https://localhost:7202/swagger  

-----------------------
4. **Project Structure**

**Backend (ASP.NET Core):**  
- `AuthController.cs` – Registration, login, profile, logout.  
- `TodoController.cs` – CRUD operations for tasks.  
- `JwtService.cs` – JWT generation & validation.  
- `Program.cs` – Configures services, EF Core, JWT, Swagger.  
- `appsettings.json` – Database connection & JWT settings.  

**Frontend (wwwroot/):**  
- `index.html` – Landing page (dark theme, short demo).  
- `login.html / register.html` – Authentication pages.  
- `todo.html` – Task management (inline editing, sorting).  
- `css/` – Stylesheets (`index.css`, etc.).  
- `js/` – JavaScript files (`index.js`, etc.).  
- `img/` – Images (logo, demo GIFs, etc.).  

--------------------
5. **Security Notes**

- Passwords are hashed using HMACSHA512.  
- JWT is stored in **HttpOnly, Secure, SameSite=Strict** cookies.  
- API calls use `"credentials: 'include'"` to send cookies automatically.  
- Basic client-side sanitization prevents simple XSS attacks.  

--------------------

6. **Future Enhancements**

- Task deadlines & priority levels.  
- Dark/light mode toggle.  
- Improved UI animations.  
- Additional security optimizations.  

----------------------

End of Guide