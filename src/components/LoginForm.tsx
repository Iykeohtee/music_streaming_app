"use client"

import { signIn } from 'next-auth/react';
import React, { useState, ChangeEvent, FormEvent } from 'react' 

const LoginForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
    const [ inputText, setInputText ] = useState('');

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {          
      setFormData({ ...formData, [e.target.name]: e.target.value }) 
      setInputText(e.target.value);
  }

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
       
      try {
        await signIn("credentials", {
          
        })
      } catch (error) {
        
      }

   }

   const togglePasswordVisibility = () => {
     setIsPasswordVisible((prevVisibility) => !prevVisibility)                                                      
   }

  return (
    <form onSubmit={handleSubmit} className="w-[887px] flex flex-col gap-7 items-center mt-[50px]">

      <div className="flex flex-col w-[50%]">
      <label htmlFor="username">Username</label>
      <input type="text" 
      name='username'
      id='username'
      placeholder='username'   
      value={formData.username}
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

      <button type="submit" className="btn w-[50%] font-[700] text-[20px] mb-4">Next</button> 
     

    </form>
  )
}

export default LoginForm