import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Field, Formik, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useApplications } from "../context/ApplicationContext";

const ApplicationsForm = () => {
  const { createApplication, loadApplication, updateApplication } = useApplications();

  const [application, setApplication] = useState([
    {
      codigo: "",
      resumen: "",
      descripcion: "",
      id_empleado: 0,
      nombre_empleado: "",
    },
  ]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadApplicationUseEffect = async () => {
      if (params.id_solicitud) {
        const application = await loadApplication(params.id_solicitud);
        setApplication({
          id_solicitud: application[0].id_solicitud,
          codigo: application[0].codigo,
          descripcion: application[0].descripcion,
          resumen: application[0].resumen,
          id_empleado: application[0].id_empleado,
          nombre_empleado: application[0].nombre_empleado,
        });
        console.log(application[0]);
      }
    };
    loadApplicationUseEffect();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-white font-bold text-center">
        {params.id_solicitud ? "Edit Application" : "Create Application"}
      </h1>
      <Formik
        initialValues={
          params.id_solicitud
            ? application
            : {
                codigo: "",
                descripcion: "",
                resumen: "",
                id_empleado: 0,
                nombre_empleado: "",
              }
        }
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id_solicitud) {
            await updateApplication(params.id_solicitud, values);
            navigate("/applications");
          } else {
            console.log(values);
            createApplication(values);
          }
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto"
          >
            
            <label className="block">Codigo</label>
            <input
              type="text"
              name="codigo"
              placeholder="Write codigo"
              onChange={handleChange}
              value={values.codigo}
              className="px-2  py-1 rounded-sm w-full"
            />

            <label className="block">Descripción</label>
            <input
              type="text"
              name="descripcion"
              placeholder="Write descripción"
              onChange={handleChange}
              value={values.descripcion}
              className="px-2  py-1 rounded-sm w-full"
            />

            <label className="block">Resumen</label>
            <textarea
              type="text"
              name="resumen"
              placeholder="Write resumen"
              onChange={handleChange}
              value={values.resumen}
              className="px-2  py-1 rounded-sm w-full"
            />

            {params.id_solicitud ? 
              <>
                <label className="block">Nombre Empleado</label>
                <input
                  type="text"
                  name="nombre_empleado"
                  placeholder="Write Nombre Empleado"
                  onChange={handleChange}
                  value={values.nombre_empleado}
                  className="px-2  py-1 rounded-sm w-full"
                  readOnly/>
              </> : 
              <>
                <label className="block">ID Empleado</label>
                <input
                  type="number"
                  name="id_empleado"
                  placeholder="Write ID Empleado"
                  onChange={handleChange}
                  value={values.id_empleado}
                  className="px-2  py-1 rounded-sm w-full"
                  />
              </>
            }

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-green-500 px-2 py-1 text-white w-full rounded-md my-2"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplicationsForm;
