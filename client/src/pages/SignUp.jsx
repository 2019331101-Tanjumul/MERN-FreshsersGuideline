import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function SignUp() {
    const [formData, setFormData]= useState({}); 

    const handleChange= (e) => {
    setFormData({...formData,[e.target.id]:e.target.value});
    }; 
 const handleSubmit = async (e)=>{ 
    e.preventDefault(); 
 }
  return (
    <div className='min-h-screen mt-20'>

<div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row '>
{/* left side */}
<div className='flex-1'> 
<Link to="/" className='self-center whitespace-nowrap text-sm sm:text-5xl font-semibold dark:text-white'> 
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Freshers</span>
      Guideline
      </Link>
<div className=''> {/*flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center*/}
      <p className='flex gap-2 text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
          </div>
          <div>
</div>

{/*Right side */}
<div>
<form className='flex flex-col gap-4' onSubmit={handleSubmit}> 
    <div className="">
        <Label value='Your username'/>
        <TextInput 
        type='text'
        placeholder='Usename with digits ex: robin22'
        id='Username'
        onChange={handleChange}
        />
    </div>
    <div className="">
        <Label value='Your email'/>
        <TextInput 
        type='email'
        placeholder='email@example.com'
        id='email'
        required
        onChange={handleChange}/>
    </div>
    <div className="">
        <Label value='Your Password'/>
        <TextInput 
        type='password'
        placeholder='16 alpha numeric charecters'
        id='password'
        onChange={handleChange}
         />
    </div>
    <Button gradientDuoTone= 'purpleToPink' type='submit'>

   Sign Up

    </Button>
</form>
<div className='flex gap-2 text-sm mt-5'>
    <span>Have a Account ? </span> 
    <Link to='/SignIn' className='text-blue-500'> 
    SIGN IN
    </Link>
</div>
</div>

</div>

</div>
</div>
  )
}
