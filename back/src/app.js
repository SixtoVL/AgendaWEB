import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/usuarios", usuariosRoutes);

app.use("/api", authRoutes); //POST /api/login 

export default app;
