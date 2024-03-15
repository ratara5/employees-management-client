import axios from "axios";

export const getEmployeesRequest = async () =>
  axios.get("http://localhost:5002/api/employees");

export const getEmployeeRequest = async (id) =>
  axios.get(`http://localhost:5002/api/employee/${id}`);

export const createEmployeeRequest = async (employee) =>
  axios.post("http://localhost:5002/api/employee/new", employee);

export const deleteEmployeeRequest = async (id) =>
  axios.delete(`http://localhost:5002/api/employee/delete/${id}`);

export const updateEmployeeRequest = async (id, newFields) =>
  axios.put(`http://localhost:5002/api/employee/update/${id}`, newFields);
