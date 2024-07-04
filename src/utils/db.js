// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//     throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

// let cached = global.mongoose;

// if (!cached) {
//     cached = global.mongoose = { conn: null, promise: null };
// }

// async function connect() {
//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         const opts = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverSelectionTimeoutMS: 5000,
//             socketTimeoutMS: 45000,
//         };

//         cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//             return mongoose;
//         });
//     }

//     try {
//         cached.conn = await cached.promise;
//     } catch (error) {
//         cached.promise = null;
//         throw new Error("Failed to connect to the database: " + error.message);
//     }

//     return cached.conn;
// }

// export default connect;




import mongoose from "mongoose";

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI) 
        console.log("Connected to database")     
    }     
    catch (err){
        console.log(err.message)
        throw new Error ({ error: err.message })        
    }      
}

export default connect;          
 

/* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}       

