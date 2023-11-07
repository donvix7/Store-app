"use client";
import About from '@app/about/page'
import React, { useEffect, useState } from 'react'


const Categories = () => {
  
  const [inValue, setInValue] = useState("Search preferences");

  const [category, setCategory] = useState(null);
  const [cate, setCate] = useState("men's clothing");
  const [filter, setFilter] = useState();

  

  useEffect(() => {

    store();
    cateList();
    
  },[category, inValue])

  const store = () => {

    
    fetch("https://fakestoreapi.com/products/category/" + cate)
    .then(res=>res.json())
    .then(json=>  {

      setCategory(json) 
      setInValue(cate);



    })
    .catch(error => console.log("failed to fetch "))

  }
  const cateList = () => {
    fetch("https://fakestoreapi.com/products/categories")
    .then(res=>res.json())
    .then(json=>  {
      setFilter(json)  
    })
    .catch(error => console.log("failed to fetch"))

  } 
  

  const show = () => {

    document.querySelector(".dropList").classList.remove("hidden");

    }



  const sort = () => {
    

    const input = document.querySelector(".search_bar");

    var list = document.querySelectorAll(".dropItem");

    list.forEach( title => {
      if(title.textContent.includes(input.value)) {
        title.classList.toggle("block");
      }
      else {
        title.classList.add("hidden");


      }
    })

  }


  
  return (
    <div className=''>
      <div className=" p-4 w-full flex-center">
        <input 
        type="search" 
        className='p-2 search_bar br-4' 
        placeholder={inValue} 
        onClick={ () => show()}
        onKeyUp={() => sort()}
        />

        <button className='black_btn'
        onClick={() => {}}>Search</button>
      </div>
      
      <div className="list md-flex flex-center">
      {filter && (
          <ul className='dropList p-4 flex flex-col gap-4 w-full shadow hidden'>
            {filter.map((list) => (
              <li 
              onClick={() => setCate(list)}
              className='dropItem'>{list}</li>

            ))}
            
        </ul>
      )}
      </div>
      {category && (
        <About 
        category = {category.filter((item) => item.category === cate)}
         />

      )}

    </div>
  )
}

export default Categories