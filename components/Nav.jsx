"use client";

import React, { useState } from 'react'
import NavBtn from './NavBtn'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { signOut, signIn } from 'next-auth/react';
import SideBar from './SideBar';
import WishList from './WishList';
import Filter from './Filter';

const Nav = () => {

  const [filter, setFilter] = useState(false);
  const [wishList, setWishList] = useState(false); 
  const [toggleDrop, setToggleDrop] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const show = () => {
    document.querySelector(".sidebar").classList.toggle("active")
    document.querySelector(".side_btn").classList.toggle("active")
  }
  const {data: session} = useSession();

  return (
    <nav className='flex flex-between w-full p-4 shadow'>

      <a href="/" className='flex flex-center gap-2'>
        <p className="logo_text">My Store.</p>
        
      </a> 
      <div className="sm:hidden flex relative sidebar">

        {sideBar && (
          <SideBar/>
        )}
       
      </div>
      <button className='side_btn sm:hidden'
        onClick={() => (setSideBar((prev) => !prev),show())}
        ></button>


        <ul className='sm:flex hidden gap-4'>
          <li ><a href='/categories'>Filter</a></li>
          <li >Wish List</li>
          <li>About</li>
        </ul>

      <div className="sm:flex hidden">
        
        <NavBtn/>
        
      </div>   
      
      <div className="sm:hidden flex relative">

        {toggleDrop && (
          <div className="dropdown">
            <p className="dropdown_link">
              {session?.user.name}
            </p>
            <button className="black_btn"
            onClick={() => signOut()}>Sign Out</button>
          </div>
        )}

        {session?.user ? (
        <a className="flex">

            <Image
                src ={session?.user.image}

                width={35}
                height={35}
                alt= "profile"
                onClick={() => setToggleDrop((prev) => !prev)}
            />      
            

        </a>
                

        ):(
        <>

        <NavBtn/>

        </>

        )}
      </div>
      
        
    </nav>
  )
}

export default Nav