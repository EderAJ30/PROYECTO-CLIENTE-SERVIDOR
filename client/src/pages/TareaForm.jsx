import { Form, Formik } from "formik";
import { useTareas } from "../context/TareaProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TareaForm() {
  const { createTarea, getTarea, updateTarea } = useTareas();
  const [tarea, setTarea] = useState({
    titulo: "",
    descripcion: "",
  });
  const params = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    const cargaTarea = async () => {
      if (params.id) {
        const tarea = await getTarea(params.id);
        console.log(tarea);
        setTarea({
          titulo: tarea.titulo,
          descripcion: tarea.descripcion,
        });
      }
    };
    cargaTarea();
  }, []);

  return (
    <div>
      <Formik
        initialValues={tarea}
        enableReinitialize={true}
        onSubmit={async (valores, acciones) => {
          console.log(valores);
          if (params.id) {
            await updateTarea(params.id, valores);
          } else {
            await createTarea(valores);
          }
          navigator("/");
          setTarea({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Titulo</label>
            <input
              type="text"
              name="titulo"
              placeholder="Escribe una descripción"
              onChange={handleChange}
              value={values.titulo}
            />
            <label>Descripcion</label>
            <textarea
              name="descripcion"
              row="3"
              placeholder="Escribe una descripción"
              onChange={handleChange}
              value={values.descripcion}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving ..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TareaForm;
