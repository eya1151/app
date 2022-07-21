import React from 'react'
import{useEffect , useState} from 'react';
import axios from "axios";
const UesrPage = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
    axios.get('http://localhost:5000/posts/62b9b5650ce2925f53da09ef').then(res=>{
      setUser(res.data)
      console.log(res.data);})},[])
  return ( <div>
    <table className='table table-bordered' >
        <thead ><tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>password</th>
          <th>confirmPassword</th>
        </tr> </thead>
        <tbody>{
            user?.map((user,index)=>(
              <tr > 
                <td>{user.FirstName} </td>
                <td>{user.LastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.confirmPassword}</td>
                </tr>))} </tbody></table>
      <button className='btn btn-danger mt-3 ml-3' type ="submit" >logout</button>
    </div>)}
export default UesrPage