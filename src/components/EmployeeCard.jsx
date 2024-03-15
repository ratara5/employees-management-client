import React from "react";
import { useEmployees } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";

function EmployeeCard({ employee }) {
  const { deleteEmployee } = useEmployees();
  const navigate = useNavigate();

  return (
    <div>
      <h2>{employee.nombre}</h2>
      <p>{employee.fecha_ingreso}</p>
      <p>{employee.salario}</p>
      <button onClick={() => deleteEmployee(employee.id_empleado)}>
        Delete
      </button>
      <button onClick={() => navigate(`/edit/${employee.id_empleado}`)}>
        Edit
      </button>
    </div>
  );
}

export default EmployeeCard;
