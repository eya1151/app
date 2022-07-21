import React from 'react'
import{useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom'
const Connect = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  console.log({email,password})

  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }


  const handlePassword=(e)=>{
    setPassword(e.target.value)
   }


   const handleApi=()=>{
    console.log({email,password})
    axios.post('http://localhost:5000/posts/login',{email:email,
   password:password}).then(result=>{
    console.log(result)
   })
   .catch(error=>{
    console.log(error)
   })
   }
   const handleSubmit = event => {
    event.preventDefault();

    console.log('form submitted ');
  };

  return (
    <div>
        <form form onSubmit={handleSubmit}>
                        <p className="mb-4"><h1>Please login to your account</h1></p>
                        <div className="mb-4">
                          <input
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email-address"
                            placeholder="email"
                         value={email}
                         onChange={handleEmail}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                            placeholder="Password"
                           value={password}
                           onChange={handlePassword}
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <Link to={"/userPage"}
                            type="submit"
                            className='btn btn-primary mt-3 ml-3'
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={handleApi}
                          >
                            Log in
                          </Link>
                         
                        </div>
                       
                      </form>
    </div>
  )
}

export default Connect