import pool from "../config/db.js";
import bcrypt from "bcryptjs";

export const registrarUsuario = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // Guardar en la base de datos
    const [result] = await pool.query(
      "INSERT INTO usuarios (username, correo, password_hash) VALUES (?, ?, ?)",
      [username, email, password_hash]
    );

    res.status(201).json({
      id_usuario: result.insertId,
      username,
      email
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};
