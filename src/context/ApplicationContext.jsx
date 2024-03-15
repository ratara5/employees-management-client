import { createContext, useContext, useState } from "react";

import {
  getApplicationsRequest,
  getApplicationRequest,
  deleteApplicationRequest,
  createApplicationRequest,
  updateApplicationRequest,
} from "../api/applications.api";

export const ApplicationContext = createContext();

export const useApplications = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error(
      "useApplications must be used within a ApplicationContextProvider"
    );
  }
  return context;
};

export const ApplicationContextProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  async function loadApplications() {
    const response = await getApplicationsRequest();
    setApplications(response.data);
  }

  const loadApplication = async (id) => {
    try {
      const response = await getApplicationRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteApplication = async (id) => {
    try {
      const response = await deleteApplicationRequest(id);
      setApplications(applications.filter((application) => application.id_solicitud !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createApplication = async (application) => {
    try {
      const response = await createApplicationRequest(application);
    } catch (error) {
      console.log(error);
    }
  };

  const updateApplication = async (id_solicitud, newFields) => {
    try {
      const response = await updateApplicationRequest(id_solicitud, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        loadApplications,
        loadApplication,
        getApplicationRequest,
        deleteApplication,
        createApplication,
        updateApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
