import React from "react";
import { useApplications } from "../context/ApplicationContext";
import { useNavigate } from "react-router-dom";

function ApplicationCard({ application }) {
  const { deleteApplication } = useApplications();
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 rounded-md p-4">
      <h2 className="text-sm font-bold">{application.codigo}</h2>
      <p className="text-xs">{application.descripcion}</p>
      <p className="text-xs">{application.resumen}</p>
      <p className="text-xs">{application.nombre_empleado}</p>
      <div className="flex gap-x-1">
        <button className="bg-red-500 px-2 py-1 text-white" onClick={() => deleteApplication(application.id_solicitud)}>
          Delete
        </button>
        <button className="bg-slate-800 px-2 py-1 text-white" onClick={() => navigate(`/edit-application/${application.id_solicitud}`)}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default ApplicationCard;
