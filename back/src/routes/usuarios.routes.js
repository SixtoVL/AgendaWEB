import { Router } from "express";
import { registrarUsuario } from "../controllers/usuarios.controller.js";

const router = Router();

// POST /api/usuarios → registra un nuevo usuario
router.post("/", registrarUsuario);

export default router;
