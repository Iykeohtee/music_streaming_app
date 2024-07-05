import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from "next-auth/providers/credentials"
import connect from "@/utils/db"
import User from "@/models/User"
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({ 
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,                          
        }),         
        CredentialsProvider({     
          // id: "credentials",
          name: "credentials", 

          credentials: {
            username: { label: "Username", type: "username", required: true }, 
            password: { label: "Password", type: "password", required: true },         
          },    
          
          async authorize(credentials, req) {   

            if (!credentials || !credentials.username || !credentials.password) {         
              throw new Error("No credentials provided");   
            }    
    
            const { username, password } = credentials; 
             
            await connect();

            try {    
               const user = await User.findOne({ email: credentials.username })         
               
               if(user) {
                 
                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);    

                if (isPasswordCorrect) {

                  return user;
 
                } else {
                  throw new Error("Incorrect Password");                                                                                    
                }
                 
                
               }else{

                 throw new Error("User does not exist")  
               }
              
            } catch (err) {
              throw new Error(err instanceof Error ? err.message : "An unknown error occured");  
            }

          }
        })
      ],
      pages: {  
        error: "/login"           
      }  
}