import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-700">
      <h1 className='text-white font-bold'>Employees Management - Applications</h1>
      <ul className='flex gap-x-1'>
        <li className='text-slate-200 px-2 py-1'>
          <Link to="/">Employees</Link>
        </li>
        <li className='text-green-500 px-2 py-1'>
          <Link to="/new">Create Employee</Link>
        </li>
        <li className='text-slate-200 px-2 py-1'>
          <Link to="/applications">Applications</Link>
        </li>
        <li className='text-green-500 px-2 py-1'>
          <Link to="/new-application">Create Application</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
