import React from 'react';
import{useEffect , useState} from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";


function Delete(id){
axios.delete(`http://localhost:5000/posts/${id}`)
.then((res=> {console.log('deleted',res)}))
}



const Posts = () => {
  const [user,setUser]=useState([])
  useEffect(()=>{
  axios.get('http://localhost:5000/posts').then(res=>{
    setUser(res.data)
    console.log(res.data);
  })}
  ,[])
  return (
    <div>
      <table className='table table-bordered' >
        <thead >
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>password</th>
          <th>confirmPassword</th>
          <th>delete</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
          {
            user?.map((user,index)=>(
              <tr > 
                <td>{user.FirstName} </td>
                <td>{user.LastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.confirmPassword}</td>
                <td>
                   <button className='btn btn-danger mt-3 ml-3' type ="reset" onClick={()=>Delete(user._id)}>delete</button>
                   </td>
                   <td>
                   <Link to={`/edit/user/${user._id}`} className='btn btn-primary mt-3 ml-3' type ="reset"   >Edit</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      
  

    </div>
  )
}

export default Posts