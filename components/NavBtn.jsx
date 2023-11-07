"use client";

import React, { useState } from 'react'
import Image from 'next/image';

import { signIn, signOut, useSession} from 'next-auth/react'


const NavBtn = () => {

    const {data: session} = useSession();


    //const {toggleDrop, setToggleDrop} = useState(false);

    if(session && session.user) {
        return (
            <div className="flex gap-3 md:gap-5 flex-center ">
        
                <p className="dropdown_link">
                    {session.user.name}
                </p>

                <a href="/create-profile" className="black_btn">Create Profile</a>

                <button
                onClick={()=> signOut()} className="outline_btn">
                    Sign Out
                </button>

                <Image
                    src ={session?.user.image}

                    width={35}
                    height={35}
                    alt= "profile"
                />
                    
                

                <div className="sm:hidden flex relative">
                    <div className="flex">
                        <Image
                            src ={session?.user.image}

                            width={35}
                            height={35}
                            alt= "profile"
                        />
                    

                    </div>

                </div>
                

            </div>


        )
        
    }

  return (

    <button
    onClick={()=> signIn()} className="outline_btn">
        Sign In
    </button>
       )
}

export default NavBtn
