import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Filter from './components/Filter';
import { apiUrl, filterData } from './Data';
import Spinner from './components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {

    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Filter filterData={filterData} />
      <div>
        {loading ? <Spinner/> : <Cards courses={courses} />} 
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
