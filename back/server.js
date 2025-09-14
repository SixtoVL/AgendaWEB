import app from "./src/app.js";
import pool from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    // 👇 probar conexión
    const conn = await pool.getConnection();
    await conn.ping(); // chequea si responde
    conn.release();

    console.log("✅ Conectado a la base de datos correctamente");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error al conectar con la base de datos:", err.message);
    process.exit(1); // detener el servidor si no conecta
  }
}

iniciarServidor();
