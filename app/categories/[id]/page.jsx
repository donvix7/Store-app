"use client";

import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {

      const {id} = useParams();

      const [item, setItem] = useState();

      const [ amount, setAmount] = useState();


      useEffect(() => {
        store();
      },[])

      const store = () => {
        fetch("https://fakestoreapi.com/products/" + id)

        .then(res=>res.json())

        .then(json=>  {

          setItem(json) 

        })

        .catch(error => console.log("failed to fetch"))
    
      }
      console.log(amount);
      

  const [ color, setColor] = useState();
      
  const addToCart = (e) => {
    //e.push(amount);

    Object.assign(e,{amount : amount}, {color : color})

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






    //const id = router.query.id
  return (
    <div className='p-4 flex-center'>
      {item && (
        <div className="card p-4 flex-col gap-4 ">
            <img src={item.image}
            width={200}
            height={200}
             alt="item photo" />
             <div className='mt-5'>
              <p><span>Title :</span> {item.title}</p>
              <p> <span className="">Category : </span>{item.category}</p>
              <p><span>Description :</span>  {item.description} </p>
              <p> <span>Price :</span> {item.price}</p>
              <div className="setup flex flex-col gap-2 mt-4">
                <div className=" flex gap-4  ">
                  Color:
                  <label htmlFor="black" className='flex gap-2'>
                  <input type="radio" value="black" onChange={(e) => setColor(e.target.value)} name="color" id="black" className='hidden'/>
                  <div className="black"></div>
                  </label>
                  <label htmlFor="white" className='flex gap-2'>
                  <input type="radio" value="white" onChange={(e) => setColor(e.target.value)} name="color" id="white" className='hidden'/>
                  <div className="white"></div>
                  </label>
                  <label htmlFor="red" className='flex gap-2'>
                   <input type="radio" value="red" onChange={(e) => setColor(e.target.value)} name="color" id="red" className='hidden'/>
                   <div className="red"></div>
                  </label>
                </div>
                
                <div className="">
                
                  set amount :<input type="number" onChange={(e) => setAmount(e.target.value)} className='pl-4' name="" id="" min={0} max={5} />
                </div>
              </div>
              
              <a href="/categories">
              <button className="outline_btn w-full mt-2"
              onClick={(e) => addToCart(item)}
              >
                Add to cart

              </button>
                </a>


             </div>
        </div>

      )
      }
      </div>
  )
}

export default ProductDetail