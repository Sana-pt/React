import React from 'react'
import Homepage from './homepage'
import Aboutpage from './Aboutpage'
import Contactpage from './Contactpage'
import { Link } from "react-router-dom";


const Multi = () => {
    return (
        <div>
            
            <Homepage></Homepage>
            <Aboutpage></Aboutpage>
            <Contactpage></Contactpage>
        </div>
    )
}

export default Multi