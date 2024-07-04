import LoginForm from "@/components/LoginForm";
// import PasswordInput from "@/components/PasswordInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {    
  return (
    <main className="w-[887px] flex flex-col gap-7 items-center mt-[100px]">   
          <div className="flex flex-col justify-center items-center">       
          <h1 className="text-center">Welcome to Lyrix</h1>               
          <LoginForm/>
          
          <h2 className='text-[gray]'>
           Don't have an account? <Link href="/signup" className='underline text-[white]'>signup</Link>   
          </h2>         
        </div>   
        {/* <PasswordInput/> */}    
    </main>  
  );
}
