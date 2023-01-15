import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event)=>{
    event.preventDefault();
    let amount = parseInt(count);
    if(amount <= 0) {amount= 1};
    if(amount >= data.length) {amount = data.length-1};
    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>Paragraph Generator</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input type="number" id='amount' name='amount' value={count} onChange={(event)=> setCount(event.target.value)} />
        <button type="submit" className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {
          text.map((item, index)=>{
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;
