import React from 'react';

const Categories = ({ filterMenusByCatgeory, categories }) => {
  console.log({ categories })
  return <div className='btn-container'>
    {
      categories.map((category,index) => {
        return (
          <button key={index} className="filter-btn" onClick={() => filterMenusByCatgeory(category)}>
            {category}
          </button>
        )
      })
    }
  </div>;
};

export default Categories;
