import React from "react";
import { useEffect } from "react";
import EmployeeCard from "../components/EmployeeCard";
import { useEmployees } from "../context/EmployeeContext";

function EmployeesPage() {
  const { employees, loadEmployees } = useEmployees();

  useEffect(() => {
    loadEmployees();
  }, []);

  function renderMain() {
    if (employees.length === 0) return <h1>No Employees yet</h1>;
    return employees.map((employee) => (
      <EmployeeCard employee={employee} key={employee.id_empleado} />
    ));
  }

  return (
    <div>
      <h1>Employees</h1>
      {renderMain()}
    </div>
  );
}

export default EmployeesPage;
