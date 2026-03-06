const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                message: "RunxBuild Node.js service running",
            })
        );
        return;
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown (important for Kubernetes rolling updates)
process.on("SIGTERM", () => {
    console.log("SIGTERM received, shutting down...");
    server.close(() => {
        process.exit(0);
    });
});
