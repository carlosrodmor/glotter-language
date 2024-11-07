const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const languageRoutes = require("./routes/language.routes");

const app = express();

// Middleware de seguridad y utilidades
app.use(helmet());
app.use(morgan("dev"));
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "¡Algo salió mal!" });
});

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/languages", languageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
