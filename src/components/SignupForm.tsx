"use client"

import { useRouter } from "next/navigation"
import { NextResponse } from "next/server";
import { ChangeEvent, FormEvent, useState } from "react"

const SignupForm = () => {

   const router = useRouter();

 const [formData, setFormData] = useState ({
    email: '',
    username: '',
    password: ''
 })     

     
 const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);    
 const [ inputText, setInputText ] = useState('');
 const [ err, setErr ] = useState(false);   
 const [ error, setError ] = useState(false)
//  const [ pending, setPending ] = useState(false);
 
 const togglePasswordVisibility = () => {                   
    setIsPasswordVisible((prevVisibility) => !prevVisibility) 
   }
   
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {    
      setFormData({...formData, [e.target.name]: e.target.value});               
      setInputText(e.target.value);
   }
   
   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {                
           
      e.preventDefault();    

      const { email, username, password } = formData; 

      if (!email || !username || !password) {      
           setErr(true);  
           return;
       } 
      
      try {

         const resUserExist = await fetch("api/auth/userExists", {        
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            }, 
            body: JSON.stringify({ email })  
         }) 

         const { userExist } = await resUserExist.json();      

         if(userExist) {
            setError(true)       
            return;
         }


         const res = await fetch("api/auth/register", {                                                        
            method: "POST",                                                                                  
            headers: {
               "Content-Type": "application/json"    
            },                                            
            body: JSON.stringify({
               email,
               username,
               password
            }),
         })

         if (res.ok) {   
            (e.target as HTMLFormElement).reset();
            router.push("/dashboard?success=Account has been created");
        } else {
            const errorData = await res.json();
            return NextResponse.json({errorData}) 
            // setErr(errorData.message || 'Something went wrong!');                                 
        }                   
         

      } catch (error) {   
         console.error(error);       
         setErr(true);      
      }
      
   }   

   

  return (    
    <form onSubmit={handleSubmit} className="w-[887px] flex flex-col gap-7 items-center mt-[50px]">                                 
        <div className="flex flex-col w-[50%]">  
        <label htmlFor="email">Email address</label>
        <input type="email"   
         name="email"    
         id="email"
         placeholder="enter email"        
         value={formData.email}
         onChange={handleChange}
         className={inputText.length > 0 ? 'text-white' : 'text-default'}          
        />    
        </div>

         {/* <br />   */} 
        <div className="flex flex-col w-[50%]">
        <label htmlFor="user">Username</label>
        <input type="text"
         name="username"
         id="user"
         placeholder="Your username"
         value={formData.username}
         onChange={handleChange}
         className={inputText.length > 0 ? 'text-white' : 'text-default'}
        />
        </div>

        {/* <br /> */}

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
         type="button"
         onClick={togglePasswordVisibility}   
         className="absolute top-[50%] right-[10px]"      
        >
         { isPasswordVisible ? '🔐' : '🔓'}  
        </button>
       </div>   
       {err && <span className="text-red-500">Must Provide all Crednetials</span>}        
       {error && <span className="text-red-500">User Already Exist</span>}        

        <button type="submit" className="btn w-[50%] font-[700] text-[20px] mb-4">Next</button>                                  
    </form>
  )
}

export default SignupForm  


// Password 
// 09037465611