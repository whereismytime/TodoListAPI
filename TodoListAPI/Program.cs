using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using TodoListAPI.Data;
using TodoListAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// 1. ��������� �����������
builder.Services.AddControllers();

// 2. ����������� Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "������� JWT-����� � ��������� Bearer, ��������: \"Bearer eyJhbGciOiJI...\"",
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                },
                Scheme = "Bearer",
                Name = "Bearer",
                In = ParameterLocation.Header
            },
            new string[] {}
        }
    });
});

// 3. ���������� �������� ��
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 4. ������������ ������ ��� JWT
builder.Services.AddScoped<IJwtService, JwtService>();

// 5. ����������� JWT-�������������� � ������� ������ �� ����
var jwtKey = builder.Configuration["Jwt:Key"] ?? "FallbackKeyIfNull";
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;

        options.Events = new JwtBearerEvents
        {
            OnMessageReceived = context =>
            {
                // ���� ��� ���������, �� ���� ���� "jwt"
                if (string.IsNullOrEmpty(context.Token) && context.Request.Cookies.ContainsKey("jwt"))
                {
                    context.Token = context.Request.Cookies["jwt"];
                }
                return Task.CompletedTask;
            }
        };

        options.MapInboundClaims = false; // ����� sub ��������� sub

        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)),
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero
        };
    });

var app = builder.Build();

// �������� ����� � ����� pages (��� �������)
var pagesPath = Path.Combine(builder.Environment.ContentRootPath, "wwwroot", "pages");
Console.WriteLine("Files in pages folder:");
foreach (var file in Directory.GetFiles(pagesPath))
{
    Console.WriteLine(file);
}

// 6. ����������� DefaultFiles -> index.html
var defaultFilesOptions = new DefaultFilesOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(builder.Environment.ContentRootPath, "wwwroot", "pages")
    )
};
defaultFilesOptions.DefaultFileNames.Clear();
defaultFilesOptions.DefaultFileNames.Add("index.html");

app.UseDefaultFiles(defaultFilesOptions);

// 7. ������ ����������� ����� (CSS, JS)
app.UseStaticFiles();

// 8. ���������� Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseDefaultFiles();
app.UseStaticFiles();


// ��������������/�����������
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
