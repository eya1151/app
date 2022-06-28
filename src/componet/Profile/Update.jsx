import React from 'react'
import { Formik,Form } from 'formik';
import TextField from './TextField';


const Update = () => {
  
  return (
    <Formik
    initialValues={{
      FirstName:'',
      LastName:'',
      email:'',
      password:'',
      confirmPassword:''
    }}
   
    >
   {formik =>(
<div>
<h1 className='my-4 front-weight-bold-display-4'>
  Update
</h1>

<Form>
<TextField label="First Name" name="FirstName" type ="text"/><br/>
<TextField label="Last Name" name="LastName" type ="text"/><br/>
<TextField label="Email " name="email" type ="email"/><br/>
<TextField label="Password" name="password" type ="password"/><br/>
<TextField label="ConfirmPassword" name="confirmPassword" type ="password"/><br/>
<button className='btn btn-primary mt-3' type ="submit" >Update</button>

</Form>
</div>
   )}
  
        </Formik>
  )
}

export default Update