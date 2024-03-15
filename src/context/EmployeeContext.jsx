import { createContext, useContext, useState } from "react";

import {
  getEmployeesRequest,
  getEmployeeRequest,
  deleteEmployeeRequest,
  createEmployeeRequest,
  updateEmployeeRequest,
} from "../api/employees.api";

export const EmployeeContext = createContext();

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error(
      "useEmployees must be used within a EmployeeContextProvider"
    );
  }
  return context;
};

export const EmployeeContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  async function loadEmployees() {
    const response = await getEmployeesRequest();
    setEmployees(response.data);
  }

  const loadEmployee = async (id) => {
    try {
      const response = await getEmployeeRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await deleteEmployeeRequest(id);
      setEmployees(employees.filter((employee) => employee.id_empleado !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createEmployee = async (employee) => {
    try {
      const response = await createEmployeeRequest(employee);
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmployee = async (id_empleado, newFields) => {
    try {
      const response = await updateEmployeeRequest(id_empleado, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        loadEmployees,
        loadEmployee,
        getEmployeeRequest,
        deleteEmployee,
        createEmployee,
        updateEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
