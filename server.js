import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();

app.use(
  cors({
    origin: true, // reflects request origin (fine for dev)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use((req, res, next) => {
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use(express.json());

app.post("/guardar-texto", async (req, res) => {
  try {
    const { texto } = req.body;
    if (!texto) return res.status(400).json({ error: "Texto vacío" });

    const [result] = await pool.execute(
      "INSERT INTO tabla_prueba (texto) VALUES (?)",
      [texto],
    );

    res.json({ success: true, id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
