import Link from 'next/link'
import SignupForm from '@/components/SignupForm' 
import styles from './page.module.css'  
// import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/dist/server/api-utils';

export const metadata = {
  title: "Lyrix - Signup",
  description: "This the the sign up page",   
}; 

const signup = async () => {
  // const session = await getSession(authOptions);
   
  // if(session) {    
  //   redirect("/")  
  // }  
    
  return (
    <div className='w-[887px] h-[690px] flex flex-col justify-center items-center'>                     
        <h1 className='mr-[-20px]'>Sign up to start listening</h1>      
        <SignupForm/>
        <h2 className='text-[gray]'>Already have an account?
        <Link href="/login" className='underline text-[white]'> Log in here</Link>        
        </h2>     
    </div>   
  )   
}

export default signup 