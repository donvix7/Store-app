"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const About = ({category}) => {

  const [objects, setObject] = useState(null);
  

  useEffect(()=> {
    
    
    store();
  
  },[])
  
  const store = async() => {
    const response = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>  {
      setObject(json) 

      })
    .catch(error => console.log("failed to fetch suggestions"))

  }


  const addToCart = (e) => {
    const list = e;
    fetch("http://localhost:8000/cart", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(list)
    })
    .then(() => {console.log("New item added")

  })
    .catch(error => console.log("Failed to post"))


  }
  
  return (
    <div className=' p-10'>
 
      
      { objects && (
        <div className="sm:hidden flex gap-10 flex-col flex-center  ">
          {category.map((item) => (
            <div className="item p-4 gap-5 flex-col  flex-between p-12">
              

              <img

              width={200}
              height={200}
              alt='item picture'
              src={item.image}/>

            <div className="">
              

              <p>Category : {item.category}</p>
              <p>Price : ${item.price}</p>
              <p>Amount available : </p>
              <p>{item.title}</p>
            </div>
            <div className="buttons flex gap-2  flex-col w-full flex-center">
                <button className='outline_btn w-full'
                onClick={(e) => addToCart(item)}>Add to cart</button>
                  <button className='black_btn w-full'>
                  <a href={"/categories/" + item.id} >Customize </a>
                </button>

              </div>
              
            </div>
          ))}
        </div>
      )}
      { objects && (
        <div className="sm:flex hidden gap-10 flex-wrap ">
          {category.map((item) => (
            <div className="item p-4 gap-5 flex-col  flex-between">
              
              <img

                width={200}
                height={200}
                alt='item picture'
                src={item.image}/>

              <div className="">
              <p>Category :{item.category}</p>
                <p>Price : ${item.price}</p>
                <p>Amount available</p>
                <p>{item.title}</p>
              </div>
              <div className="buttons flex gap-2">
                <button className='outline_btn'>Add to cart</button>
                <a href={"/categories/" + item.id}>
                <button className='black_btn'> Customize 
                </button>

                </a>
              </div>
              
              
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default About