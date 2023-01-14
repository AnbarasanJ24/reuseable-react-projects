import React, { useState, useEffect } from 'react'
import CompanyList from './CompanyList';
import Company from './Company';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if (isLoading) {
    return <section className='section'>
      <h1>Loading...</h1>
    </section>
  }

  return <section className='section'>
    <div className="title">
      <h2>Expirence</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <CompanyList jobs={jobs} currentIndex={currentIndex} setcurrentIndex={setcurrentIndex} />
      <Company {...jobs[currentIndex]}/>
    </div>
  </section>
}

export default App
