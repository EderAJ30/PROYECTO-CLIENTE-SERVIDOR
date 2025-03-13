import axios from "axios";

export const getTareasRequest = async () =>
  await axios.get("http://localhost:4000/tareas");

export const createTareaRequest = async (tarea) =>
  await axios.post("http://localhost:4000/tareas", tarea);

export const deleteTareaRequest = async (id_tarea) =>
  await axios.delete(`http://localhost:4000/tareas/${id_tarea}`);

export const getTareaRequest = async (id_tarea) =>
  await axios.get(`http://localhost:4000/tareas/${id_tarea}`);

export const updateTareaRequest = async (id_tarea, newFields) =>
  await axios.put(`http://localhost:4000/tareas/${id_tarea}`, newFields);

export const cambiarTareaEstadoRequest = async (id_tarea, estado) =>
  await axios.put(`http://localhost:4000/tareas/${id_tarea}`, {
    estado,
  });
