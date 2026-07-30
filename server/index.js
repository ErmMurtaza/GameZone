const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const roomRoutes = require("./routes/roomRoutes");
const initializeSocket = require("./socket/socket");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/rooms", roomRoutes);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});

// Start all socket listeners
initializeSocket(io);

server.listen(5000, () => {
    console.log("Server running on 5000");
});