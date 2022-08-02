import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [persons, setPersons] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{persons.length} birthday today</h3>
        <List persons={persons} />
        <button onClick={() => setPersons([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
