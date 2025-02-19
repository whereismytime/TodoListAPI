TodoListAPI – Project Guide
------------------------------------------------------------

Overview:
---------
TodoListAPI is a modern web application for efficient task management.
It features a secure user authentication system using JWT stored in HttpOnly cookies,
and a fully responsive frontend with a sleek dark theme.

Key Features:
  • Secure user registration and login
  • Manage tasks: Add, Edit, Delete, and Mark as Completed
  • Sort tasks alphabetically (A–Z and Z–A)
  • Smooth UI with animations and real-time interactions

Built With:
  • ASP.NET Core
  • Entity Framework Core
  • SQL Server
  • JWT
  • Swagger
  • HTML, CSS, JavaScript, SweetAlert2, Particles.js

------------------------------------------------------------
Project Structure:
------------------------------------------------------------

Backend (ASP.NET Core API)
  • AuthController.cs       – Handles user registration, login, profile retrieval, and logout.
  • TodoController.cs       – Provides CRUD operations for task management.
  • JwtService.cs           – Generates and validates JWT tokens.
  • Program.cs              – Configures services, authentication (extracting JWT from cookies), EF Core, and Swagger.
  • appsettings.json        – Stores the database connection string and JWT settings.

Frontend (HTML, CSS, JavaScript)
  • index.html              – Landing page with animations, a GIF demonstration, and sections (About, Features, Team, FAQ, Contacts).
  • login.html / register.html – Pages for user authentication.
  • todo.html               – Personal task management interface with inline editing.
  • CSS Files               – index.css, login.css, register.css, todo.css for a unified dark theme.
  • JavaScript Files        – index.js, login.js, register.js, todo.js for dynamic interactions and API calls.
  • Image assets            – Located in the img/ folder (logo, demo GIFs, etc.).

------------------------------------------------------------
Technologies & Dependencies:
------------------------------------------------------------

Backend (NuGet Packages)
  • Microsoft.AspNetCore.Authentication.JwtBearer
       (Install: dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 8.0.0)
  • Microsoft.EntityFrameworkCore.SqlServer
       (Install: dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 8.0.0)
  • Microsoft.EntityFrameworkCore.Tools
       (Install: dotnet add package Microsoft.EntityFrameworkCore.Tools --version 8.0.0)
  • Swashbuckle.AspNetCore
       (Install: dotnet add package Swashbuckle.AspNetCore --version 7.2.0)

Frontend (Libraries)
  • SweetAlert2       – For attractive popup notifications (CDN: https://cdn.jsdelivr.net/npm/sweetalert2@11)
  • particles.js      – For animated background effects

Additional Tools:
  • .NET 8 SDK
  • SQL Server (or SQL Express)
  • Visual Studio or VS Code

------------------------------------------------------------
API Documentation (Swagger):
------------------------------------------------------------
• Access Swagger UI at: https://localhost:7202/swagger
  Use Swagger UI to interactively test the API endpoints.

------------------------------------------------------------
Setup & Installation:
------------------------------------------------------------
1. Prerequisites:
   - .NET 8 SDK
   - SQL Server (or SQL Express)
   - Visual Studio or VS Code

2. Configuration:
   - Open appsettings.json and set:
       • The database connection string.
       • JWT secret key and token expiration under the "Jwt" section.

3. Database Migration:
   - Run the command:
       dotnet ef database update
     This will create or update the database schema.

4. Running the Project:
   - Start the project using:
       dotnet run
     or open the solution in Visual Studio and click "Run".
   - The application will be available at https://localhost:7202

5. Accessing the Application:
   - Main Site: https://localhost:7202
   - Swagger UI: https://localhost:7202/swagger
   - Navigate to Login, Registration, and Todo pages via the site links.

------------------------------------------------------------
Security Considerations:
------------------------------------------------------------
• JWT is stored in HttpOnly cookies to protect against XSS.
• Passwords are hashed using HMACSHA512.
• Cookies are set with Secure and SameSite=Strict to mitigate CSRF risks.
• Additional client-side validation helps prevent simple XSS injections.

Cookies & Sessions:
------------------------------------------------------------
• On successful login, the server sets the JWT in an HttpOnly, Secure, and SameSite=Strict cookie.
• API requests include "credentials: 'include'" to automatically send the cookie.
• The JwtBearer configuration in Program.cs uses the OnMessageReceived event to extract the token from cookies if the Authorization header is missing.

------------------------------------------------------------
Technologies Used:
------------------------------------------------------------
• ASP.NET Core – For building the web application and REST API.
• Entity Framework Core 8.0 – For data access with SQL Server.
• JWT (JSON Web Tokens) – For secure authentication.
• Swagger – For API documentation and testing.
• HTML, CSS, JavaScript – For creating a modern, responsive frontend.
• particles.js – For animated background effects.
• SweetAlert2 – For attractive popup notifications.

------------------------------------------------------------
Folder & File Structure:
------------------------------------------------------------
TodoListAPI/
├── Controllers/
│     ├── AuthController.cs    - User registration, login, profile, logout.
│     └── TodoController.cs    - CRUD operations for tasks.
├── Services/
│     └── JwtService.cs        - JWT generation and validation.
├── Models/
│     ├── User.cs              - User entity with hashed password fields.
│     └── TodoItem.cs          - Task entity linked to a user.
├── Migrations/                - EF Core migration files.
├── wwwroot/                   - Frontend assets.
│     ├── css/               - index.css, login.css, register.css, todo.css.
│     ├── js/                - index.js, login.js, register.js, todo.js.
│     ├── img/               - Image files (logo, demo GIFs, etc.).
│     ├── index.html         - Main landing page.
│     ├── login.html         - Login page.
│     ├── register.html      - Registration page.
│     └── todo.html          - Todo list interface.
├── appsettings.json           - Configuration settings (DB connection, JWT).
├── Program.cs                 - Application startup and service configuration.
└── Startup.cs                 - (if used) additional configuration.

------------------------------------------------------------
Future Improvements:
------------------------------------------------------------
• Adding task deadlines and priority levels.
• Implementing a dark/light mode toggle.
• Enhancing the UI with advanced animations.
• Further security enhancements and performance optimizations.

------------------------------------------------------------
End of Guide
------------------------------------------------------------
