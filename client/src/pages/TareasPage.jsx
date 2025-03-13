import React from "react";
import { useEffect, useState } from "react";
import TareaCard from "../components/TareaCard";
import { useTareas } from "../context/TareaProvider";

function TareasPage() {
  const {tareas, cargaTareas} = useTareas();

  useEffect(() => {
    cargaTareas();
  }, []);

  function renderMain() {
    if (tareas.length === 0) return <h1>Aún no hay tareas</h1>
    return tareas.map((tarea) => <TareaCard tarea={tarea} key={tarea.id_tarea} />);
  }

  return (
    <div>
      <h1>Tareasss</h1>
      {renderMain()}
    </div>
  );
}

export default TareasPage;
