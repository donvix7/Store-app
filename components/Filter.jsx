"use client";
import React, { useEffect, useState } from 'react'

const Filter = () => {
  
  const [filter, setfilter] = useState(null);

  const [category, setCategory] = useState();
  
  useEffect(() => {
    store();
    

  })

  const store = () => {
    fetch("https://fakestoreapi.com/products/categories")
    .then(res=>res.json())
    .then(json=>  {
      setCategory(json)  
  
    })
    .catch(error => console.log("failed to fetch suggestions"))
  
  }
  
  return (
    <div className='flex-col  gap-4 p-4'>
        <h1 className="head_text blue_gradient">Filters</h1>
        {category && (
          <ul className='p-4 flex flex-col gap-4'>
            {category.map((list) => (
              <li onClick={() => {setfilter(list)}}>{list}</li>

            ))}
            
        </ul>
        )}
        
    </div>
  )
}

export default Filter