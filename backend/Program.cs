using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Read PORT from environment (RunxBuild requirement)
var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";

app.MapGet("/", () =>
{
    return Results.Json(new
    {
        message = "RunxBuild .NET service running"
    });
});

// Important for Kubernetes
app.Urls.Add($"http://0.0.0.0:{port}");

app.Run();
