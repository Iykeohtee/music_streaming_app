import { NextResponse } from "next/server";
// import User from "../../../../models/User";
import User from "@/models/User";                                                         
import connect from "../../../../utils/db"

export const POST = async (req) => {
   try {
      await connect();

      const { email } = await req.json();

      const userExist = await User.findOne({ email }).select("_id");   

      if(userExist ){
        return NextResponse.json({ userExist: true });     
      } else {
        return NextResponse.json({ userExist: false });     
      }  

   } catch (error) {
    console.log(error);                                                                                                           
    return NextResponse.json({ error: "An error occurred" }, 500);       
   }         
}