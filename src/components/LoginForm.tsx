"use client"

import { signIn } from 'next-auth/react';
import React, { useState, ChangeEvent, FormEvent } from 'react' 
import { useRouter } from 'next/navigation';   
// import Credentials from 'next-auth/providers/credentials';

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
    const [ inputText, setInputText ] = useState('');
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');

    const router = useRouter();
  

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {          
      setFormData({ ...formData, [e.target.name]: e.target.value }) 
      setInputText(e.target.value);
  }

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
       
      try {
        // await signIn("credentials", {      
          
        // })
        const result = await signIn("credentials", {                         
          username: formData.email,
          password: formData.password,
          redirect: false,      
        });   

        console.log(result); 

      if(result?.error){
        setError("Invalid Credentials!")        
        return;                                                
      } else{      
           setSuccess("Login Seccessful...Wait👋")      
           router.replace("/dashboard")                     
      }         

      } catch (error) {
        setError("An unexpected error occured");                     
      }

   }

   const togglePasswordVisibility = () => {
     setIsPasswordVisible((prevVisibility) => !prevVisibility)                                                      
   }

  return (
    <form onSubmit={handleSubmit} className="w-[887px] flex flex-col gap-7 items-center mt-[50px]">

      <div className="flex flex-col w-[50%]">
      <label htmlFor="email">Email</label>
      <input type="text" 
      name='email'
      id='email'
      placeholder='email'   
      value={formData.email}
      onChange={handleChange}
      className={ inputText.length > 0 ? 'text-white' : 'text-default'}   
      />
      </div>

      <div className="relative flex flex-col w-[50%]">
        <label htmlFor="password">Password</label>
         <input type={ isPasswordVisible ? 'text' : 'password' } 
         name="password"
         id="password" 
         placeholder="Input your Password"
         value={formData.password}
         onChange={handleChange} 
         className={inputText.length > 0 ? 'text-white' : 'text-default'}                                         
        />
        <button
         onClick={togglePasswordVisibility}   
         className="absolute top-[50%] right-[10px]"   
        >
         { isPasswordVisible ? '🔐' : '🔓'}    
        </button>
       </div>

       { success && <span className='text-green-600'>{success}</span>}       
       { error && <span className='text-red-700'>{error}</span>}    
      <button type="submit" className="btn w-[50%] font-[700] text-[20px] mb-4">Next</button>           
     

    </form>
  )
}

export default LoginForm