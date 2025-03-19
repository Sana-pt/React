import React from 'react'
import './demostyle.css'
import img from './bg.png'
import { FaStar } from "react-icons/fa";

const Demo = () => {
  return (
    <div className='bg-yellow-500'>
        <img src={img} alt="" />
        <FaStar />
    </div>
  )
}

export default Demo