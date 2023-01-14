import React from 'react';

const CompanyList = ({jobs, currentIndex, setcurrentIndex}) => {
    return (
        <div className="btn-container">
            {
                jobs.map((job, index) => {
                    return <button
                        className={`job-btn ${index === currentIndex && 'active-btn'}`}
                        key={job.id}
                        onClick={() => setcurrentIndex(index)}>
                        {job.company}</button>
                })
            }
        </div>
    )
}

export default CompanyList;