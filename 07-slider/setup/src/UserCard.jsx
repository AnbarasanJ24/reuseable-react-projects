
import { useState, useEffect } from 'react';
import data from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const UserCard = ()=>{
    const [people, setPeople] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = people.length-1;
        if(currentIndex < 0){
            setCurrentIndex(lastIndex)
        }
        if(currentIndex > lastIndex){
            setCurrentIndex(0);
        }
    }, [currentIndex, people])

    useEffect(()=>{
        let timer= setInterval(()=>{
            setCurrentIndex(currentIndex+1);
        }, 3000)
        return ()=>{
            clearInterval(timer);
        }
    }, [currentIndex])

    return (
        <section className='section'>
            <div className="title">
                <h2>Review</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center">
                {
                    people.map((person,index)=>{
                        const {id, image, name, title, quote} = person;
                        let position = 'nextSlide';
                        if(currentIndex === index) position = 'activeSlide';
                        if(index === currentIndex-1 || (currentIndex === 0 && index === people.length-1)) {
                            position = 'prevSlide'
                        };
                        return (
                            <article key={id} className={position}>
                                <img src={image} alt={name} className='person-img' />
                                <h4>{name}</h4>
                                <div className="title">{title}</div>
                                <div className="text">{quote}</div>
                                <FaQuoteRight className='icon' />
                            </article>
                        )
                    })
                }
                <button className="prev" onClick={()=> setCurrentIndex(currentIndex -1)}><FiChevronLeft /></button>
                <button className="next" onClick={()=> setCurrentIndex(currentIndex +1)}><FiChevronRight /></button>
            </div>
        </section>
    )
}

export default UserCard;