import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (

    <nav style={{textAlignLast:'center'}}>
        <Link  style={{marginRight:"15px"}} to ="/"> Accueil </Link>
        <Link  style={{marginRight:"15px"}}to ="/services"> Services </Link>
        <Link style={{marginRight:"15px"}} to ="/profil">Signup </Link>
        <Link to ="/connect">connecter </Link>
    </nav>
  )
}

export default Navbar ;