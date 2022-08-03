import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {

  const [showInfo, setShowInfo] = useState(false);

  return <article className='question'>
    <header>
      {title}
      {
        showInfo === false ? <button className='btn' onClick={() => setShowInfo(!showInfo)}><AiOutlinePlus /></button> :
          <button className='btn' onClick={() => setShowInfo(!showInfo)}><AiOutlineMinus /></button>
      }

    </header>
    {showInfo && <p>{info}</p>}
  </article>;
};

export default Question;
