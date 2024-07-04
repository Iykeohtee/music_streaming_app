import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema ({           
    email: {
        type: String,  
        unique: true,
        required: true
    },
    username: {
        type: String,  
        unique: true,     
        required: true
    },
    password: {
        type: String,   
        required: true
    },
}, {timestamps: true} 
)         

const User = mongoose.models.User || mongoose.model("User", userSchema);            

export default User;

