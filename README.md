TodoListAPI – Project Guide
------------------------------------------------------------
Overview
------------------------------------------------------------
TodoListAPI is a modern web application for efficient task management.
It features a secure user authentication system using JWT stored in HttpOnly cookies,
and a fully responsive frontend with a sleek dark theme.

Key Features:
  • Secure user registration and login  
  • Manage tasks – add, edit, delete, and mark as completed  
  • Sort tasks alphabetically (A–Z, Z–A)  
  • Smooth UI with animations and real-time interactions  

Built With:
  • ASP.NET Core  
  • Entity Framework Core  
  • SQL Server  
  • JWT (JSON Web Tokens)  
  • Swagger  
  • HTML, CSS, JavaScript, SweetAlert2, Particles.js  

------------------------------------------------------------
Project Structure
------------------------------------------------------------
Backend (ASP.NET Core API)
  - AuthController.cs      : Handles user registration, login, profile retrieval, and logout
  - TodoController.cs      : Provides CRUD operations for managing tasks
  - JwtService.cs          : Generates and validates JWT tokens
  - Program.cs             : Configures services, authentication (extracting JWT from cookies),
                             EF Core, and Swagger
  - appsettings.json       : Stores the database connection string and JWT settings

Frontend (HTML, CSS, JavaScript)
  - index.html             : Landing page with animations, GIF demonstration,
                             and sections (About, Features, Team, FAQ, Contacts)
  - login.html / register.html
                           : Pages for user authentication and registration
  - todo.html              : Personal task management interface (inline editing, sorting)
  - CSS Files              : index.css, login.css, register.css, todo.css for a unified dark theme
  - JavaScript Files       : index.js, login.js, register.js, todo.js for dynamic interactions
                             and API calls
  - Image Assets           : Located in the "img" folder (logo, demo GIFs, etc.)

------------------------------------------------------------
Technologies & Dependencies
------------------------------------------------------------
Backend (NuGet Packages):
  • Microsoft.AspNetCore.Authentication.JwtBearer
       - Provides JWT authentication
       - Install: dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 8.0.0
  • Microsoft.EntityFrameworkCore.SqlServer
       - EF Core for SQL Server
       - Install: dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 8.0.0
  • Microsoft.EntityFrameworkCore.Tools
       - EF Core tooling for migrations/updates
       - Install: dotnet add package Microsoft.EntityFrameworkCore.Tools --version 8.0.0
  • Swashbuckle.AspNetCore
       - Generates interactive Swagger API documentation
       - Install: dotnet add package Swashbuckle.AspNetCore --version 7.2.0

Frontend (CDN & Libraries):
  • SweetAlert2
       - Attractive popup notifications
       - Include via CDN: https://cdn.jsdelivr.net/npm/sweetalert2@11
  • particles.js
       - Animated background effects
       - Include via local file or CDN

Additional Tools:
  • .NET 8 SDK – For building and running the application
  • SQL Server (or SQL Express) – As the database server
  • Visual Studio or VS Code – For development

------------------------------------------------------------
API Documentation (Swagger)
------------------------------------------------------------
• Swagger UI is available at: https://localhost:7202/swagger  
• Use Swagger UI to interactively test the API endpoints

------------------------------------------------------------
Setup & Installation
------------------------------------------------------------
1. Prerequisites
   - .NET 8 SDK
   - SQL Server (or SQL Express)
   - Visual Studio or VS Code

2. Configure the Application
   - Open appsettings.json and set:
     • Database connection string
     • JWT secret key and token expiration (under the "Jwt" section)

3. Database Migration
   - Run the following command:
       dotnet ef database update
   - This creates or updates the database schema

4. Running the Project
   - Start the project using:
       dotnet run
     or open the solution in Visual Studio and click "Run"
   - The application will be available at https://localhost:7202

5. Accessing the Application
   - Main Site: https://localhost:7202
   - Swagger UI: https://localhost:7202/swagger
   - Use the site links to navigate to Login, Registration, and Todo pages

------------------------------------------------------------
Authentication & Security
------------------------------------------------------------
• Passwords are hashed using HMACSHA512  
• JWT is stored in HttpOnly, Secure, SameSite=Strict cookies to protect against XSS/CSRF  
• API requests use "credentials: 'include'" to send cookies automatically  
• Client-side input sanitization helps prevent basic XSS injections

Cookies & Sessions
------------------------------------------------------------
• On successful login, the server sets the JWT in an HttpOnly, Secure, SameSite=Strict cookie  
• The JwtBearer config in Program.cs uses OnMessageReceived to extract the token from cookies if
  the Authorization header is missing  
• This secures user sessions and simplifies API calls

------------------------------------------------------------
Technologies Used
------------------------------------------------------------
• ASP.NET Core – For building the web application and REST API  
• Entity Framework Core 8.0 – For data access with SQL Server  
• JWT (JSON Web Tokens) – For secure authentication  
• Swagger – For API documentation and testing  
• HTML, CSS, JavaScript – For creating a modern, responsive frontend  
• particles.js – For animated background effects  
• SweetAlert2 – For attractive popup notifications

------------------------------------------------------------
Folder & File Structure
------------------------------------------------------------
TodoListAPI/
├── Controllers/
│      AuthController.cs      - Handles user registration, login, profile, logout
│      TodoController.cs      - Manages CRUD operations for tasks
├── Services/
│      JwtService.cs          - JWT generation and validation
├── Models/
│      User.cs                - User entity with hashed password fields
│      TodoItem.cs            - Task entity linked to a user
├── Migrations/               - EF Core migration files
├── wwwroot/
│      ├── css/             - index.css, login.css, register.css, todo.css
│      ├── js/              - index.js, login.js, register.js, todo.js
│      ├── img/             - Image files (logo, demo GIFs, etc.)
│      ├── index.html       - Main landing page
│      ├── login.html       - Login page
│      ├── register.html    - Registration page
│      └── todo.html        - Todo list interface
├── appsettings.json          - Configuration (DB connection, JWT settings)
├── Program.cs                - App startup & service configuration
└── Startup.cs                - (if used) additional configuration

------------------------------------------------------------
Future Improvements
------------------------------------------------------------
• Adding task deadlines and priority levels  
• Implementing a dark/light mode toggle  
• Enhancing the UI with more advanced animations  
• Further security enhancements and performance optimizations

------------------------------------------------------------
End of Guide
------------------------------------------------------------
