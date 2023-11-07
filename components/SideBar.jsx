"use client";
import React, { useState } from 'react'
import WishList from './WishList';
import Filter from './Filter';

const SideBar = () => {

  const [wishLsits, setWishLists] = useState(false);
  const [filter, setFilter] = useState(false);
  return (
    <div className='w-full'>
        <ul className='sidebar_items mt-20 p-4 flex flex-col gap-4 w-full'>
            <li><a href="/">Home</a></li>
            <li ><a href="/categories">Categories</a></li>
            <li onClick={()=> setWishLists((prev) => !prev)}>Cart</li>
            <li>About Us</li>
            <li><a href='#Contact'>Customer Service</a></li>
            <li><a href='/payment'>Payment</a></li>
        </ul>
        {wishLsits && (
          <div className="sm:hidden flex small_wish">
            <WishList/>
          </div>
        )}
        
    </div>
  )
}

export default SideBar