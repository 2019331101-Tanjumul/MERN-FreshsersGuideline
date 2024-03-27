import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
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
      <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
          </div>

<div>
</div>

{/*Right side */}
<div>
<form className='flex flex-col gap-4'> 
    <div className="">
        <Label value='Your username'/>
        <TextInput 
        type='text'
        placeholder='Usename with digits ex: robin22'
        id='Username'
        />
    </div>
    <div className="">
        <Label value='Your email'/>
        <TextInput 
        type='text'
        placeholder='email@example.com'
        id='email'
        />
    </div>
    <div className="">
        <Label value='Your Password'/>
        <TextInput 
        type='text'
        placeholder='16 alpha numeric charecters'
        id='password'
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
