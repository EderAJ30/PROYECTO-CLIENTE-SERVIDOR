import { pool } from "../db.js";

export const getTareas = async (req, res) => {
  try {
    const [resultado] = await pool.query(
      "SELECT * FROM tareas ORDER BY creadoAT ASC"
    );
    res.json(resultado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTarea = async (req, res) => {
  try {
    const [resultado] = await pool.query("SELECT * FROM tareas WHERE id_tarea = ?", [
      req.params.id_tarea,
    ]);

    if (resultado.length === 0)
      return res.status(404).json({ message: "Tarea not found" });

    res.json(resultado[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTarea = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const [resultado] = await pool.query(
      "INSERT INTO tareas(titulo, descripcion) VALUES (?, ?)",
      [titulo, descripcion]
    );
    res.json({
      id_tarea: resultado.insertId,
      titulo,
      descripcion,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTarea = async (req, res) => {
  try {
    const resultado = await pool.query("UPDATE tareas SET ? WHERE id_tarea = ?", [
      req.body,
      req.params.id_tarea,
    ]);
    res.json(resultado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTarea = async (req, res) => {
  try {
    const [resultado] = await pool.query("DELETE FROM tareas WHERE id_tarea = ?", [
      req.params.id_tarea,
    ]);

    if (resultado.affectedRows === 0)
      return res.status(404).json({ message: "Tarea not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
