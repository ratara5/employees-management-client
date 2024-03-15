import React from "react";
import { useEmployees } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";

function EmployeeCard({ employee }) {
  const { deleteEmployee } = useEmployees();
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 rounded-md p-4">
      <h2 className="text-sm font-bold">{employee.nombre}</h2>
      <p className="text-xs">{employee.fecha_ingreso}</p>
      <p className="text-xs">${employee.salario}</p>
      <div className="flex gap-x-1">
        <button className="bg-red-500 px-2 py-1 text-white" onClick={() => deleteEmployee(employee.id_empleado)}>
          Delete
        </button>
        <button className="bg-slate-800 px-2 py-1 text-white" onClick={() => navigate(`/edit/${employee.id_empleado}`)}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
