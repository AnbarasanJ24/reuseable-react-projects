import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return checkIndexBoundary(newIndex)
    })
  }
  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkIndexBoundary(newIndex)
    })
  }

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) randomIndex += 1;
    setIndex(checkIndexBoundary(randomIndex));
  }

  const checkIndexBoundary = (index) => {
    if (index < 0) return people.length - 1;
    if (index > people.length - 1) return 0;
    return index;
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'><FaQuoteRight /></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container" >
        <button className="prev-btn" onClick={prevPerson} >
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>Suprise Me!</button>
    </article>);
};

export default Review;
