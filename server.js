import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import { registerSocketHandlers } from "./sockets/socket.js";
import http from "http";
import Server from "socket.io";

const PORT = process.env.PORT || 5000;

connectDB();
connectCloudinary();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true
  }
});

registerSocketHandlers(io);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});