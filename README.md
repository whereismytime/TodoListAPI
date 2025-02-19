------------------------------------------------------------
TodoListAPI – Project Guide
------------------------------------------------------------

Overview:
---------
TodoListAPI is a modern web application for task management built with ASP.NET Core and Entity Framework Core. It provides secure user registration and authentication using JWT stored in HttpOnly cookies. The frontend is developed using HTML, CSS, and JavaScript with animations (particles.js, fade-in effects) and a responsive design.

Project Components:
---------------------
1. Swagger (API Documentation):
   • Swagger UI is available at: https://localhost:7202/swagger
   • It provides interactive documentation and testing for all API endpoints.

2. Main Site (index.html):
   • A modern landing page with an animated background (particles.js).
   • Features a Hero section with a static image and a GIF demonstration.
   • Includes sections like About, Features, Team, FAQ, and Contacts for a comprehensive presentation.

3. Registration and Authentication:
   • Registration (register.html) and Login (login.html) pages with a unified dark theme.
   • User passwords are hashed (using HMACSHA512) and stored securely in the database.
   • On login, the server generates a JWT token and sets it in HttpOnly, Secure, and SameSite cookies.
   • SweetAlert2 is used to display attractive notifications.
   • API requests include credentials (using "credentials: 'include'") to automatically send cookies.

4. Todo List (todo.html):
   • The personal task management interface.
   • Allows adding, inline editing (with in-place text editing and icon buttons ✓ and ×), deleting, marking tasks as completed, and sorting (A–Z and Z–A).
   • Interacts with the backend via REST API.

5. Database:
   • Built using EF Core 8.0 and SQL Server.
   • Contains Users and TodoItems tables. Users store hashed passwords (PasswordHash and PasswordSalt), and TodoItems are linked to users via UserId.

6. Cookies & Sessions:
   • JWT is stored in HttpOnly cookies to protect against XSS.
   • The server sets the JWT cookie with Secure and SameSite=Strict attributes after successful login.
   • The JwtBearer configuration in Program.cs uses the OnMessageReceived event to extract the token from cookies.
   • All API requests are sent with "credentials: 'include'" to ensure cookies are transmitted automatically.

Technologies and Packages:
----------------------------
Backend Packages (NuGet):
  • Microsoft.AspNetCore.Authentication.JwtBearer
      - Provides JWT authentication. 
      - Install: dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 8.0.0

  • Microsoft.EntityFrameworkCore.SqlServer
      - Enables EF Core to connect to SQL Server.
      - Install: dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 8.0.0

  • Microsoft.EntityFrameworkCore.Tools
      - Provides EF Core tooling for migrations and database updates.
      - Install: dotnet add package Microsoft.EntityFrameworkCore.Tools --version 8.0.0

  • Swashbuckle.AspNetCore
      - Generates Swagger API documentation.
      - Install: dotnet add package Swashbuckle.AspNetCore --version 7.2.0

  • Microsoft.Extensions.Configuration.Json
      - Supports JSON configuration (usually included with ASP.NET Core).

Frontend Libraries:
  • SweetAlert2
      - A JavaScript library for attractive popup notifications.
      - Include via CDN: https://cdn.jsdelivr.net/npm/sweetalert2@11

  • particles.js
      - A JavaScript library for creating animated backgrounds.
      - Include via local file or CDN.

Additional Tools:
  • .NET 8 SDK – For building and running the application.
  • SQL Server (or SQL Express) – As the database server.

Project Structure:
--------------------
Backend:
  • AuthController.cs – Manages registration, login, profile retrieval, and logout.
  • TodoController.cs – Provides CRUD operations for managing tasks.
  • JwtService.cs – Generates JWT tokens.
  • Program.cs – Configures services, authentication (including token extraction from cookies), EF Core, and Swagger.

Frontend:
  • index.html – The landing page with animations, GIF demonstration, and multiple informational sections.
  • login.html / register.html – Pages for user authentication and registration.
  • todo.html – The personal task management interface.
  • CSS files (index.css, login.css, register.css, todo.css) – Provide a unified dark theme.
  • JavaScript files (index.js, login.js, register.js, todo.js) – Handle dynamic interactions, inline editing, sorting, etc.

Setup and Running:
--------------------
1. Prerequisites:
   • .NET 8 SDK
   • SQL Server (or SQL Express)
   • Visual Studio or VS Code

2. Configuration:
   • Configure the connection string and JWT settings (key, expiration) in appsettings.json.

3. Database Migration:
   • Run: dotnet ef database update
      (This command creates/updates the database schema.)

4. Running the Project:
   • Start the project using: dotnet run or via Visual Studio.
   • The application will be available at: https://localhost:7202

5. Accessing the Application:
   • Swagger UI: https://localhost:7202/swagger
   • Main Site: https://localhost:7202
   • Use the links on the site to navigate to the Login, Registration, and Todo pages.

Security Considerations:
--------------------------
• JWT is stored in HttpOnly cookies to protect against XSS.
• Passwords are hashed using HMACSHA512.
• Cookies are configured with Secure and SameSite=Strict to mitigate CSRF.
• Client-side input sanitization is used to prevent simple XSS injections (additional server-side validation is recommended).

Cookies & Sessions:
--------------------
• Upon successful login, the server sets the JWT in an HttpOnly, Secure, SameSite=Strict cookie.
• API requests are sent with "credentials: 'include'" to automatically transmit the cookie.
• JwtBearer in Program.cs uses the OnMessageReceived event to read the token from cookies if the Authorization header is absent.

Technologies:
-------------
• ASP.NET Core – For building the web application and REST API.
• Entity Framework Core 8.0 – For data access with SQL Server.
• JWT (JSON Web Tokens) – For secure authentication.
• Swagger – For API documentation and testing.
• HTML, CSS, JavaScript – For creating a modern, responsive frontend.
• particles.js – For animated background effects.
• SweetAlert2 – For attractive popup notifications.

Architecture:
-------------
Backend:
  - Controllers (AuthController, TodoController) handle request processing.
  - JwtService generates JWT tokens.
  - Program.cs configures services, authentication (extracting JWT from cookies), EF Core, and Swagger.

Frontend:
  - index.html – Main landing page showcasing the application’s capabilities.
  - login.html / register.html – Pages for user authentication and registration.
  - todo.html – The personal task management interface.
  - CSS files provide a unified dark theme.
  - JavaScript files manage dynamic interactions with the API, inline editing, sorting, etc.

------------------------------------------------------------
End of Guide
------------------------------------------------------------
