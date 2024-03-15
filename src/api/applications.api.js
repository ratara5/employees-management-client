import axios from "axios";

export const getApplicationsRequest = async () =>
  axios.get("http://localhost:5002/api/applications");

export const getApplicationRequest = async (id) =>
  axios.get(`http://localhost:5002/api/application/${id}`);

export const createApplicationRequest = async (application) =>
  axios.post("http://localhost:5002/api/application/new", application);

export const deleteApplicationRequest = async (id) =>
  axios.delete(`http://localhost:5002/api/application/delete/${id}`);

export const updateApplicationRequest = async (id, newFields) =>
  axios.put(`http://localhost:5002/api/application/update/${id}`, newFields);
