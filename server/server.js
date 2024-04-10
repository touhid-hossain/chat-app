import express from "express";
import path from "path";
import env from "dotenv";
import authRoutes from "./routers/auth.route.js";
import messageRoutes from "./routers/message.route.js";
import userRoutes from "./routers/user.route.js";
import cookieParser from "cookie-parser";
import connectDB from "./connection/connectionDB.js";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();

env.config();
const PORT = process.env.PORT || 6000;

/* Set Middle wares  */
app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser()); // parse the incoming cookie from req.cookies
// database connect
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

// this function is running the frontend and backend in the same port
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
