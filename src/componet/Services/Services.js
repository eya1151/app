import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Services = () => {
  return (
    <div>
         <h1 style={{color:'blue', textAlignLast:'center'}}>Nos Services</h1>
         <nav style={{textAlignLast:'center'}}>
        <Link style={{marginRight:"15px"}} to ="/services/Developpement"> services developpement </Link>
      
         <Link to ="/services/marketing"> Services marketing </Link>
    </nav>
    <Outlet/>
    </div>
  )
}

export default Services