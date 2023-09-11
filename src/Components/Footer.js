import React from 'react'
import {AiFillLinkedin , AiOutlineInstagram ,AiFillTwitterCircle} from "react-icons/ai"
 
const Footer = () => {
  return (
    <div className='w-full bg-black sticky'>  
     <p className='text-white text-xl flex justify-center  py-6 '> Design and Build by  <span className='text-red-500 font-bold pl-2'>Srinath</span></p>
     <div className='flex justify-center py-3'>
       <p className='text-white'>Follow me on social media :</p> 
       <div className='flex ' >
        <button className='text-white text-2xl px-2'><AiFillLinkedin/></button>
        <button className='text-white text-2xl px-2'><AiOutlineInstagram/></button>
        <button className='text-white text-2xl px-2'><AiFillTwitterCircle/></button>
       </div>
     </div>
    </div>
  )
}

export default Footer