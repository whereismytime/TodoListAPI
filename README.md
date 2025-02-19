# TodoListAPI – Task Management with ASP.NET Core

Welcome to the **TodoListAPI**, a modern and secure web application for task management.  
This project demonstrates how to build a **JWT-authenticated** API with **ASP.NET Core**, featuring a **responsive frontend**.

## 📖 What is this?
This project allows users to **register, log in**, and manage their tasks efficiently.  
It leverages **JWT-based authentication**, **Entity Framework Core**, and a sleek **frontend** with real-time updates.

### 🚀 Key Features:
- ✅ Secure **JWT-based authentication** with HttpOnly cookies.
- 📝 Manage tasks (**add, edit, delete, mark as done**).
- 📑 Sort tasks **alphabetically** (A–Z, Z–A).
- 🎨 Clean and **responsive UI** with animations.
- 🔐 Strong **security features** (password hashing, CSRF protection).

## 🔑 Technologies Used
- **Backend**: ASP.NET Core, Entity Framework Core, SQL Server.
- **Authentication**: JWT (JSON Web Tokens) with HttpOnly cookies.
- **Frontend**: HTML, CSS, JavaScript.
- **Enhancements**: SweetAlert2 (pop-up alerts), particles.js (animated backgrounds).

## ⚙️ Installation & Setup
### Prerequisites:
- .NET 8 SDK
- SQL Server (or SQL Express)
- Visual Studio or VS Code

### Steps:
1️⃣ **Clone the repository** and open the solution.  
2️⃣ **Configure** `appsettings.json`:  
   - Set database connection string (`DefaultConnection`).  
   - Set JWT secret key & expiration (`Jwt` section).  
3️⃣ **Run database migrations**:  
   ```sh
   dotnet ef database update
   ```  
4️⃣ **Start the application**:  
   ```sh
   dotnet run
   ```  
5️⃣ **Access the application**:  
   - 🌍 **Main Site:** [https://localhost:7202](https://localhost:7202)  
   - 📜 **Swagger UI:** [https://localhost:7202/swagger](https://localhost:7202/swagger)  

## 📂 Project Structure
### **Backend (ASP.NET Core)**
📌 `AuthController.cs` → Registration, login, profile, logout  
📌 `TodoController.cs` → CRUD operations for tasks  
📌 `JwtService.cs` → Generates & validates JWT  
📌 `Program.cs` → Configures services, EF Core, JWT, Swagger  
📌 `appsettings.json` → Database connection & JWT settings  

### **Frontend (wwwroot/)**
📌 `index.html` → Landing page (dark theme, animations, demo)  
📌 `login.html / register.html` → Authentication pages  
📌 `todo.html` → Task management (inline editing, sorting)  
📌 `css/` → Stylesheets (`index.css`, etc.)  
📌 `js/` → JavaScript files (`index.js`, etc.)  
📌 `img/` → Images (logo, demo GIFs, etc.)  

## 🔒 Security Measures
- 🔑 **Passwords** hashed via HMACSHA512.  
- 🔒 **JWT stored in HttpOnly, Secure, SameSite=Strict cookies**.  
- 📡 **API requests** use `"credentials: 'include'"` for cookie authentication.  
- 🛡️ **Client-side sanitization** prevents basic XSS attacks.  

## ✨ Future Enhancements
🔹 **Task deadlines & priority levels**  
🔹 **Dark/light mode toggle**  
🔹 **Improved UI animations**  
🔹 **Additional security & performance optimizations**  

---  
🔗 *Built with ❤️ using ASP.NET Core & modern web technologies.*  
