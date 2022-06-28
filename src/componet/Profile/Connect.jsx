import React from 'react'
import { Formik,Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup'
const Connect = () => {
  const validate =Yup.object(
    {
      
      email: Yup.string().email('email is invalide').required(' Email is Required'),
        password: Yup.string().min(8,'password must be at least 8 characters').required(' Password is Required'),
     

    }

  )
  return (
    <Formik
    initialValues={{
    
      email:'',
      password:'',
     
    }}
    validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
   {formik =>(
<div>
<h1 className='my-4 front-weight-bold-display-4'>
  connect
</h1>

<form>

<TextField label="Email " name="email" type ="email"/>
<TextField label="Password" name="password" type ="password"/>
<button className='btn btn-dark mt-3' type ="submit" style={{marginRight:"15px"}}>Connecter</button>
<button className='btn btn-danger mt-3 ml-3' type ="reset">Reset</button>
</form>
</div>
   )}
    

        </Formik>
  )
}

export default Connect