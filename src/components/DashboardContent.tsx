"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const DashboardContent = () => {

    const { data: session } = useSession();   
    console.log(session)
  return (     
    <div>
      {session ? (  
        <>
          <h1>Welcome Back {session.user?.name}</h1>
          <img src={session.user?.image as string} alt="User Image" /> 
          <button onClick={() => signOut({ callbackUrl: `/login`})}>Sign out</button>      
        </>
      ): (     
         <>                                              
           <h1>You are not logged in</h1>
           <button onClick={() => signIn("google")}>Sign in with Google.</button>      
           <button onClick={() => signIn("gitub")}>Sign in with GitHub.</button>                     
         </>        
      )}   
    </div>
  )
}

export default DashboardContent; 
