import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Posts from "@/models/Post"

export const GET = async () => {       
    // fetch
       
    
    try {
        await connect();   

        const posts = await Posts.find();              
        return NextResponse.json(posts, { status: 200 });          

    } catch (err) {            
        console.error(err.message);
         return NextResponse.json({ error: err.message }, { status: 503 })                                        
    }   

}    