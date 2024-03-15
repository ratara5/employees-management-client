import React from "react";
import { Routes, Route } from "react-router-dom";

import EmployeesPage from "./pages/EmployeesPage";
import EmployeeForm from "./pages/EmployeeForm";
import ApplicationsPage from "./pages/ApplicationsPage";
import ApplicationForm from "./pages/ApplicationForm";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import { EmployeeContextProvider } from "./context/EmployeeContext";
import { ApplicationContextProvider } from "./context/ApplicationContext";

function App() {
  return (
    <div className="bg-zinc-800 h-screen">
    <EmployeeContextProvider>
      <ApplicationContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/new" element={<EmployeeForm />} />
          <Route path="/edit/:id_empleado" element={<EmployeeForm />} />

          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/new-application" element={<ApplicationForm />} />
          <Route path="/edit-application/:id_solicitud" element={<ApplicationForm />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ApplicationContextProvider>
    </EmployeeContextProvider>
    </div>
  );
}

export default App;
