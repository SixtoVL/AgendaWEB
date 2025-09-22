import pool from "../config/db.js";
import bcrypt from "bcryptjs";

export const loginUsuario = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar usuario en la BD
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const user = rows[0];

    // Comparar contraseña
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    // Si quieres, aquí puedes generar un token JWT
    res.json({ message: "Login exitoso", username: user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en el login" });
  }
};
