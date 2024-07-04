import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import User from "@/models/User";    
import bcrypt from 'bcrypt';

    export const POST = async (request) => {
        try { 
            const { email, username, password } = await request.json();  
            const hashedPassword = await bcrypt.hash(password, 10);  
            
            await connect();

            await User.create({ email, username, password: hashedPassword});

            return NextResponse.json({ message: "User registered"}, { status: 201 }) 
   
    } catch (error) {
        return NextResponse.json({ message: "An error occured while registering the user"}, { status: 500} )                          
    }              

}