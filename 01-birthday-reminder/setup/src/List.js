import React from 'react';

const List = ({ persons }) => {
  return (
    <>
      {
        persons.map(person => {
          let { id, name, age, image } = person;
          return <article className='person' key={id}>
            <img src={image} alt={`${name} profile`} />
            <div>
              <h4>{name}</h4>
              <p>{age} Years</p>
            </div>
          </article>
        })
      }
    </>
  );
};

export default List;
