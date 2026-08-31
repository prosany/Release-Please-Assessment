const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Hey, Hello from Express Release Please Demo!",
        version: "0.1.0"
    });
});

app.get("/health", (req, res) => {
    res.json({
        success: true,
        status: "healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});