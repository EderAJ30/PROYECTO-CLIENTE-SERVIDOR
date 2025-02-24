import React from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";

function TasksForm() {
  
  const {createTask} = useTasks()

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          createTask(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting   }) => (
          <Form onSubmit={handleSubmit}>
            <label>Titulo</label>
            <input
              type="text"
              name="title"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.title}
            />
            <label>Descripcion</label>
            <textarea
              name="description"
              row="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving ...": "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>  
  );
}

export default TasksForm;
