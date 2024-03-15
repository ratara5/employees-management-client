import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Field, Formik, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEmployees } from "../context/EmployeeContext";

const EmployeesForm = () => {
  const { createEmployee, loadEmployee, updateEmployee } = useEmployees();

  const [employee, setEmployee] = useState([
    {
      id_empleado: "",
      fecha_ingreso: "",
      nombre: "",
      salario: 0,
    },
  ]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployeeUseEffect = async () => {
      if (params.id_empleado) {
        const employee = await loadEmployee(params.id_empleado);
        setEmployee({
          id_empleado: employee[0].id_empleado,
          fecha_ingreso: employee[0].fecha_ingreso,
          nombre: employee[0].nombre,
          salario: employee[0].salario,
        });
        console.log(employee[0]);
      }
    };
    loadEmployeeUseEffect();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-white font-bold text-center">
        {params.id ? "Editar Empleado" : "Crear Empleado"}
      </h1>
      <Formik
        initialValues={
          params.id_empleado
            ? employee
            : {
                fecha_ingreso: "",
                nombre: "",
                salario: 0,
              }
        }
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id_empleado) {
            await updateEmployee(params.id_empleado, values);
            navigate("/");
          } else {
            console.log(values);
            createEmployee(values);
          }
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto"
          >
            <>
              {/*<label className='block'>Tipo de id</label>
                              <input type="text" 
                              name="typeId" 
                              placeholder="Escriba tipo de Id"
                              onChange={handleChange}
                              value={values.typeId}
                              className='px-2  py-1 rounded-sm w-full'/>*/}

              {/*<label className='block'>ID de empleado</label>
                              <input type="text" 
                              name="id_empleado" 
                              placeholder="Escriba número de Id"
                              onChange={handleChange}
                              value={values.id_empleado}
                              className='px-2  py-1 rounded-sm w-full'/>*/}
            </>
            {/*}
                      }*/}

            <label className="block">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Escriba nombre"
              onChange={handleChange}
              value={values.nombre}
              className="px-2  py-1 rounded-sm w-full"
            />

            {/*<label>Fecha de Nacimiento</label>
                      <input type="text" 
                      name="birthDate" 
                      placeholder="Escriba fecha de nacimiento"
                      onChange={handleChange}/>*/}

            <div>
              <label htmlFor="fecha_ingreso" className="block">
                Fecha de ingreso:
              </label>
              <Field name="fecha_ingreso">
                {({ field, form }) => (
                  <DatePicker
                    id="fecha_ingreso"
                    {...field}
                    selected={field.value}
                    onChange={(date) => form.setFieldValue(field.name, date)}
                    value={values.fecha_ingreso}
                  />
                )}
              </Field>
              <ErrorMessage name="fecha_ingreso" component="div" />
            </div>

            <label className="block">Salario</label>
            <input
              type="number"
              name="salario"
              placeholder="Escriba salario"
              onChange={handleChange}
              value={values.salario}
              className="px-2  py-1 rounded-sm w-full"
            />

            {/*<label className='block'>Peso(kg)</label>
                      <input type="number" 
                      name="weight" 
                      placeholder="Escriba peso(kg)"
                      onChange={handleChange}
                      value={values.weight}
                              className='px-2  py-1 rounded-sm w-full'/>*/}

            {/*<label className='block'>Talla(cm)</label>
                      <input type="number" 
                      name="height" 
                      placeholder="Escriba talla(cm)"
                      onChange={handleChange}
                      value={values.height}
                          className='px-2  py-1 rounded-sm w-full'/>*/}

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

export default EmployeesForm;
