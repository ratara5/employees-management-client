import React from "react";
import { useEffect, useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import { useApplications } from "../context/ApplicationContext";

function ApplicationsPage() {
  const { applications, loadApplications } = useApplications();

  useEffect(() => {
    loadApplications();
  }, []);
  
  
  const [q, setQ] = useState("");
  const [searchParam] = useState(["codigo"]); // keys for search in

  function renderMain() {
    if (applications.length === 0) return <h1>No Applications yet</h1>;
    return search(applications).map((application) => (
      <ApplicationCard application={application} key={application.id_solicitud} />
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
      <h1 className='text-2xl text-white font-bold text-center'>Applications</h1>
      <div className="search-wrapper m-auto gap-x-4 text-center my-2">
          <label htmlFor="search-form">
              <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input mx-auto px-2  py-1 rounded-sm"
                  placeholder="Search for código"
                  value={q}
                  //set our param useState each time user write in input
                  onChange={(e) => setQ(e.target.value)} 
              />
          </label>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-2">
          {renderMain()}
        </div>
      </div>
    </div>
  );
}

export default ApplicationsPage;
