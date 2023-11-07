"use client";
import React, { useEffect, useState } from 'react'

const WishList = () => {

  
  const handleDelete = (e) => {
    const obj = e;

    
  fetch("http://localhost:8000/cart/" + obj.id, {
    method : "DELETE"
  })
  .catch(error => console.log("failed to delete"))
  
  }


  const [ cart, setCart] = useState();
  useEffect(() => {
    object();

  },[handleDelete])

  const object = () => {
    
  fetch("http://localhost:8000/cart")
  .then(res => res.json())
  .then(data => {
    setCart(data);

  })
  .catch(error => console.log("Error with db.json fetch"))

  }
  return (
    <div className='flex-col  gap-4 p-4 ' >
      <h1 className="head_text text-sky-600">
        Cart
      </h1>
        {cart && (
          <ul className=' flex flex-col gap-4'>
            {cart.map((item) => (
              <li>{item.title} : [{item.amount}] 
              <div className="del"
              onClick={(e) => handleDelete(item)}>Del</div>
              </li>
            ))}
          </ul>
          
  )}

      

    </div>
  )
}

export default WishList