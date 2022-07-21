import React from 'react'
import { useParams } from 'react-router-dom'
 import Signup from './Signup'
 //import Connect from './Connect';
const Profile = () => {
 const params= useParams()
 console.log(params);


  return (
    <div className='container mt-3'>
  
      <h1 style ={{color:'red', textAlignLast:'center'}}> Profil</h1>
     <div className='row'>
     
      <Signup/>
     
     </div>
     <div className='col-md-7'>
      
           </div>
    </div>
  )
}

export default Profile