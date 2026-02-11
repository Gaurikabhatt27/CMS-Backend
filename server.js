import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";

const PORT = process.env.PORT || 5000;

connectDB();
connectCloudinary();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});