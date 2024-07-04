import React from 'react'
import LoginForm from '@/components/LoginForm'  
import Link from 'next/link'

export const metadata = {
  title: "Lyrix - Login",
  description: "This the the log in page",     
};

const login = () => {
  return (
    <div className='w-[887px] h-[690px] flex flex-col justify-center items-center'>
      <h1>login into your account</h1>
      <LoginForm/> 
     <h2 className='text-[gray]'>
      Don't have an account? <Link href="/signup" className='underline text-[white]'>SignUp</Link>
     </h2>
    </div>
  )
}

export default login