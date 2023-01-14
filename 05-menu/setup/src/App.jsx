import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import items from './data';
import Categories  from './Categories';

function App() {
  const [menus, setMenus] = useState(items);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    getCatgories();
  }, [])

  const filterMenusByCatgeory = (category)=> {
    if(category === 'all'){
      setMenus(items);
      return;
    }
    const newItems = items.filter(item => category === item.category);
    return setMenus(newItems);
  }

  const getCatgories = ()=>{
    const categories = items.map(item => item.category);
    const uniqueCategories = new Set([...categories]);
    setCategories(['all', ...uniqueCategories]);
  }

  return <main>
    <section className="section menu">
      <div className="title">
        <h2>Our Menus</h2>
        <div className="underline"></div>
      </div>
      <Categories filterMenusByCatgeory={filterMenusByCatgeory} categories={categories}/>
      <Menu menus ={menus}/>
    </section>

  </main>;
}

export default App;
