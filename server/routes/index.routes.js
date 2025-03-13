import { Router } from "express";
import { pool } from "../db.js";

const router_index = Router();

router_index.get("/ping", async (req, res) => {
  const [filas] = await pool.query("SELECT 1 + 1 AS RESULT");
  console.log(filas[0]);
  res.json(filas[0]);
});

export default router_index;
