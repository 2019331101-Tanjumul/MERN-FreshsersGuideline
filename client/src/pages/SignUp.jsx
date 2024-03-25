import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
        <div className='flex p-4 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-4'></div>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Freshers
            </span>
            Guideline
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google and You can create your Account here easily !! 
          </p>
        </div>
        {/* right side here */}

        <div className='flex-1'>
          <form className='flex  flex-col gap-4' >
            <div className=''>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='username'
         
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
              
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'> SignUp
                  {/* <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </> */}
              
            </Button>
            
          </form>
          <div className='flex gap-3 text-sm mt-7'>
            <span>Have an account ?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
         </div>
    </div>
    ); 
    }

export default SignUp
