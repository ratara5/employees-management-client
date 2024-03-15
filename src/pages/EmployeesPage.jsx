import React from "react";
import { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import { useEmployees } from "../context/EmployeeContext";

function EmployeesPage() {
  const { employees, loadEmployees } = useEmployees();

  useEffect(() => {
    loadEmployees();
  }, []);
  
  
  const [q, setQ] = useState("");
  const [searchParam] = useState(["nombre", "fecha_ingreso", "salario"]); // keys for search in

  function renderMain() {
    if (employees.length === 0) return <h1>No Employees yet</h1>;
    return search(employees).map((employee) => (
      <EmployeeCard employee={employee} key={employee.id_empleado} />
    ));
  }

  function search(items) {
    return items.filter((item) => {
        return searchParam.some((newItem) => { 
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    });
  }
  
  return (
    <div className="wrapper">
      <h1 className='text-4xl text-white font-bold text-center'>Employees</h1>
      <div className="search-wrapper m-auto gap-x-4 text-center my-2">
          <label htmlFor="search-form">
              <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input mx-auto px-2  py-1 rounded-sm"
                  placeholder="Buscar por..."
                  value={q}
                  //set our param useState each time user write in input
                  onChange={(e) => setQ(e.target.value)} 
              />
          </label>
          <p className="text-white">...nombre, salario, fecha ingreso</p> 
      </div>
      <div>
        <div>
          {renderMain()}
        </div>
      </div>
    </div>
  );
}

export default EmployeesPage;
