"use client";
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    
  setInterval(() => {
      
  const date = new Date();

  let i = 60 - date.getSeconds() - 1 ;
  let a = 60 - date.getMinutes() ;
  let b = 24 - date.getHours() ;
  let d = 40 - date.getDate() ;

  document.querySelector(".seconds").innerHTML = i + " <p>seconds</p>";
  document.querySelector(".minute").innerHTML = a + " <p>minute</p>";
  document.querySelector(".hour").innerHTML = b + " <p>hours</p>";
  document.querySelector(".day").innerHTML = d + " <p>days</p>";


  },1000)
  },[])



  return (
    <section className='flex flex-col flex-center w-full h-full p-4'>
      <div className="mt-16  ">

      <div class="container">
        <p>Site under maintenance</p>
        <h1>We're <l>launching </l>soon</h1>

        <div class="timer">
            <div class="day"></div>
            <div class="hour"></div>
            <div class="minute"></div>
            <div class="seconds"></div>
        </div>
        
        <button>read more</button>
    </div>
      </div>
    </section>
  )
}
