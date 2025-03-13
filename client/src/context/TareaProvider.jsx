import { useContext, useState } from "react";
import {
  getTareasRequest,
  createTareaRequest,
  getTareaRequest,
  updateTareaRequest,
  deleteTareaRequest,
  cambiarTareaEstadoRequest,
} from "../api/tareas.api";
import { TareaContext } from "./TareaContext";

export const useTareas = () => {
  const context = useContext(TareaContext);
  if (context === undefined) {
    throw new Error("useTareas must be used within a TareaContextProvider");
  }
  return context;
};

export const TareaContextProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);

  async function cargaTareas() {
    const response = await getTareasRequest();
    setTareas(response.data);
  }

  const deleteTarea = async (id_tarea) => {
    try {
      const response = await deleteTareaRequest(id_tarea);
      setTareas(tareas.filter((tarea) => tarea.id_tarea !== id_tarea));
    } catch (error) {
      console.error(error);
    }
  };

  const createTarea = async (tarea) => { //funcionas pa
    try {
      await createTareaRequest(tarea);
      // setTareas([...tareas, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getTarea = async (id_tarea) => {
    try {
      const response = await getTareaRequest(id_tarea);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTarea = async (id_tarea, newFields) => {
    try {
      const response = await updateTareaRequest(id_tarea, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const cambiarTareaEstado = async (id_tarea) => {
    try {
      const tareaEncontrada = tareas.find((tarea) => tarea.id_tarea === id_tarea);
      await cambiarTareaEstadoRequest(
        id_tarea,
        tareaEncontrada.estado === 0 ? true : false
      );
      setTareas(
        tareas.map((tarea) =>
          tarea.id_tarea === id_tarea ? { ...tarea, estado: !tarea.estado } : tarea
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TareaContext.Provider
      value={{
        tareas,
        cargaTareas,
        deleteTarea,
        createTarea: createTarea,
        getTarea,
        updateTarea,
        cambiarTareaEstado,
      }}
    >
      {children}
    </TareaContext.Provider>
  );
};
