import React from 'react'

const Footer = () => {
  return (
    <footer className=' flex-between w-full'>
        <div className="sm:flex hidden gap-10 p-10 w-full">
            <div className="handles">
                <p className="">Visit us at our varios social media handles.</p>
                <ul>
                    <li className="">Twitter @ ...</li>
                    <li className="">Facebook @ ...</li>
                    <li className="">Instagram @ ...</li>
                </ul>
            </div>
            <div className="contacts">
                <p className="">Contact us via.</p>
                <ul>
                    <li className="">Email @ ...@gmail.com</li>
                    <li className="">Phone : +234...</li>

                </ul>
                
            </div>
            
            <div className='flex flex-col gap-4 cust-serv'>
                    <input type="email" className='p-2' placeholder=' e.g abc@gmail.com'/>
                    <textarea className='p-2' placeholder=' suggestion, feedbacks, reviews and complains' >
                        
                    </textarea>
                    <button>Submit</button>
                </div>
        </div>
        <div className="sm:hidden  flex-col p-14 flex gap-10 w-full">
            <div className="handles">
                <p className="">Visit us at our varios social media handles.</p>
                <ul>
                    <li className="">Twitter @ ...</li>
                    <li className="">Facebook @ ...</li>
                    <li className="">Instagram @ ...</li>
                </ul>
            </div>
            <div className="contacts ">
                <a name = "Contact">
                <p className="">Contact us via.</p>
                <ul>
                    <li className="">Email @ ...@gmail.com</li>
                    <li className="">Phone : +234...</li>

                </ul>

                </a>
                
            </div>
            
            <div className='flex flex-col gap-4 cust-serv w-full'>
                <input type="email" className='p-2' placeholder=' e.g abc@gmail.com'/>
                <textarea className='p-2' placeholder=' suggestion, feedbacks, reviews and complains' >
                    
                </textarea>
                <button>Submit</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer