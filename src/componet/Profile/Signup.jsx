import React from 'react'
import { Formik,Form,Field } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup'
import axios from "axios"
const Signup = () => {
  const validate =Yup.object(
    {
      firstName: Yup.string().max(16,'just 16 characters').required('Required'),
      lastName: Yup.string().max(14,'just 14 characters').required('Required'),
      email: Yup.string().email('email is invalide').required(' Email is Required'),
        password: Yup.string().min(8,'password must be at least 8 characters').required(' Password is Required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),

    }

  )
  return (
    <Formik
    initialValues={{
      FirstName:'',
      LastName:'',
      email:'',
      password:'',
      confirmPassword:''
    }}
    // validationSchema={validate}
      onSubmit={values => {
        console.log(values);
        try {
          axios.post('http://localhost:5000/posts', values).then(r => console.log(r)).catch(e => console.log(e))
        } catch (error) {
          console.log(error);
        }
      }}
    >
   {formik =>(
<div>
<h1 className='my-4 front-weight-bold-display-4'>
  Sign up
</h1>

<Form>
<TextField label="First Name" name="FirstName" type ="text"/><br/>
<TextField label="Last Name" name="LastName" type ="text"/><br/>
<TextField label="Email " name="email" type ="email"/><br/>
<TextField label="Password" name="password" type ="password"/><br/>
<TextField label="ConfirmPassword" name="confirmPassword" type ="password"/><br/>
<button className='btn btn-dark mt-3' type ="submit" style={{marginRight:"15px"}}>Register</button>
<button className='btn btn-danger mt-3 ml-3' type ="reset">Reset</button>
</Form>
</div>
   )}
    

        </Formik>
  )
}

export default Signup