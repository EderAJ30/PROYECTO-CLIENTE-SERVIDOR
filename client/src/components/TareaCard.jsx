import React from "react";
import { useTareas } from "../context/TareaProvider";
import { useNavigate } from "react-router-dom";

function TareaCard({ tarea }) {
  const { deleteTarea, cambiarTareaEstado } = useTareas();
  const navigate = useNavigate();

  const manejarEstado = async () => {
    await cambiarTareaEstado(tarea.id_tarea);
  };

  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>{tarea.descripcion}</p>
      <span>{tarea.estado == 1 ? "✅" : "❌"}</span>
      <span>{tarea.creadoAT}</span>
      <button onClick={() => deleteTarea(tarea.id_tarea)}>Eliminar</button>
      <button onClick={() => navigate(`/edit/${tarea.id_tarea}`)}>
        Editar
      </button>
      <button onClick={() => manejarEstado(tarea.estado)}>Acabe</button>
    </div>
  );
}

export default TareaCard;
