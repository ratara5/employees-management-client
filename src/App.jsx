import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeForm from "./pages/EmployeeForm";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import { EmployeeContextProvider } from "./context/EmployeeContext";

function App() {
  return (
    <EmployeeContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
        <Route path="/new" element={<EmployeeForm />} />
        <Route path="/edit/:id_empleado" element={<EmployeeForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </EmployeeContextProvider>
  );
}

export default App;
