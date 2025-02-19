============================================================
🚀 TodoListAPI – Project Guide
============================================================

Overview:
---------
TodoListAPI is a modern web application designed for efficient task management.
It provides a secure user authentication system with JWT-based cookies and a fully
responsive frontend with a sleek dark theme.

With this project, users can:
✅ Register and log in securely  
✅ Manage their tasks (Add, Edit, Delete, Mark as completed)  
✅ Sort tasks alphabetically (A–Z, Z–A)  
✅ Enjoy a smooth UI with animations & real-time interactions  

🛠 Built with:  
ASP.NET Core | Entity Framework Core | SQL Server | JWT | Swagger |  
HTML | CSS | JavaScript | SweetAlert2 | Particles.js  

============================================================
📂 Project Structure
============================================================

Backend (ASP.NET Core API):
--------------------------------
• AuthController.cs – Manages user registration, login, profile retrieval, and logout.
• TodoController.cs – Provides CRUD operations for managing tasks.
• JwtService.cs – Generates and validates JWT tokens.
• Program.cs – Configures services, authentication (extracting JWT from cookies), EF Core connection, and Swagger.
• appsettings.json – Stores the database connection string and JWT settings.

Frontend (HTML, CSS, JavaScript):
------------------------------------
• index.html – The landing page with animations, a GIF demonstration, and sections such as About, Features, Team, FAQ, and Contacts.
• login.html / register.html – Pages for user authentication and registration.
• todo.html – Personal task management interface with inline editing.
• CSS files (index.css, login.css, register.css, todo.css) – Provide a unified dark theme.
• JavaScript files (index.js, login.js, register.js, todo.js) – Handle dynamic interactions, inline editing, sorting, etc.

============================================================
⚙️ Technologies & Dependencies
============================================================

Backend (NuGet Packages):
--------------------------------
✔ Microsoft.AspNetCore.Authentication.JwtBearer – Provides JWT authentication.
   Install: dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 8.0.0
✔ Microsoft.EntityFrameworkCore.SqlServer – Enables EF Core to connect to SQL Server.
   Install: dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 8.0.0
✔ Microsoft.EntityFrameworkCore.Tools – Provides EF Core tooling for migrations and updates.
   Install: dotnet add package Microsoft.EntityFrameworkCore.Tools --version 8.0.0
✔ Swashbuckle.AspNetCore – Generates interactive Swagger API documentation.
   Install: dotnet add package Swashbuckle.AspNetCore --version 7.2.0

Frontend (CDN & Libraries):
--------------------------------
✔ SweetAlert2 – Attractive popup notifications.
   Include via CDN: https://cdn.jsdelivr.net/npm/sweetalert2@11
✔ particles.js – Beautiful animated background.
   Include via local file or CDN.

Additional Tools:
--------------------------------
• .NET 8 SDK – For building and running the application.
• SQL Server (or SQL Express) – As the database server.

============================================================
📖 API Documentation (Swagger)
============================================================
• API documentation is available at: https://localhost:7202/swagger
• Use Swagger UI to test the API endpoints interactively.

============================================================
🚀 Setup & Installation
============================================================
1. Prerequisites:
   • .NET 8 SDK
   • SQL Server (or SQL Express)
   • Visual Studio or VS Code

2. Configuration:
   • Open appsettings.json and set:
     - The ConnectionString for the database.
     - JWT secret key and token expiration settings under the Jwt section.

3. Database Migration:
   • Run the following command in the terminal:
       dotnet ef database update
   This creates or updates the database schema.

4. Running the Project:
   • Start the project using:
       dotnet run
   or open the solution in Visual Studio and click Run.
   • The application will be available at https://localhost:7202

5. Accessing the Application:
   • Swagger UI: https://localhost:7202/swagger
   • Main Site: https://localhost:7202
   • Use the links on the site to navigate to the Login, Registration, and Todo pages.

============================================================
🔑 Security Considerations
============================================================
• JWT is stored in HttpOnly cookies to protect against XSS.
• Passwords are hashed using HMACSHA512.
• Cookies are configured with Secure and SameSite=Strict attributes to mitigate CSRF risks.
• Additional client-side validation prevents simple XSS injections (additional server-side validation is recommended).

============================================================
🛡 Cookies & Sessions
============================================================
• Upon successful login, the server sets the JWT in an HttpOnly, Secure, and SameSite=Strict cookie.
• API requests are sent with "credentials: 'include'" to automatically transmit the cookie.
• The JwtBearer configuration in Program.cs uses the OnMessageReceived event to extract the token from cookies when the Authorization header is absent.

============================================================
🛠 Technologies Used
============================================================
• ASP.NET Core – For building the web application and REST API.
• Entity Framework Core 8.0 – For data access with SQL Server.
• JWT (JSON Web Tokens) – For secure authentication.
• Swagger – For API documentation and testing.
• HTML, CSS, JavaScript – For creating a modern, responsive frontend.
• particles.js – For animated background effects.
• SweetAlert2 – For attractive popup notifications.

============================================================
📂 Folder & File Structure
============================================================
TodoListAPI/
├── Controllers/
│   ├── AuthController.cs         - Handles registration, login, profile, and logout.
│   └── TodoController.cs         - Manages CRUD operations for tasks.
├── Services/
│   └── JwtService.cs             - Generates JWT tokens.
├── Models/
│   ├── User.cs                   - User entity with hashed password properties.
│   └── TodoItem.cs               - Task entity linked to a user.
├── Migrations/                   - EF Core migration files.
├── wwwroot/                      - Frontend assets.
│   ├── css/
│   │   ├── index.css             - Styles for the main page.
│   │   ├── login.css             - Styles for the login page.
│   │   ├── register.css          - Styles for the registration page.
│   │   └── todo.css              - Styles for the Todo interface.
│   ├── js/
│   │   ├── index.js              - Scripts for the main page.
│   │   ├── login.js              - Scripts for the login page.
│   │   ├── register.js           - Scripts for the registration page.
│   │   └── todo.js               - Scripts for task management.
│   ├── img/                      - Image files (logo, demo GIFs, etc.).
│   ├── index.html                - Main landing page.
│   ├── login.html                - Login page.
│   ├── register.html             - Registration page.
│   └── todo.html                 - Todo list interface.
├── appsettings.json              - Configuration settings (DB connection, JWT settings).
├── Program.cs                    - Application startup and service configuration.
└── Startup.cs                    - (if used) additional configuration.

============================================================
🎯 Future Improvements
============================================================
• Adding task deadlines & priority levels.
• Implementing a dark/light mode toggle.
• Enhancing the UI with more advanced animations.
• Additional security enhancements and performance optimizations.

============================================================
End of Guide
============================================================
