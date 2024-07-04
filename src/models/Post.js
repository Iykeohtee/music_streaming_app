import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema ({
    title: { 
        type: String,
        required: true
    },
    desc: {
        type: String,
        unique: true,     
        required: true
    },
    img: {
        type: String,      
        required: true
    },
    content: {
        type: String,      
        required: true
    },
    username: {    
        type: String,   
        required: true
    },
}, {timestamps: true} 
)         

const Posts = mongoose.models.Post || mongoose.model("Post", postSchema);         

export default Posts;
