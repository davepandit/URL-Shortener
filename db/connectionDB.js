import mongoose from "mongoose";

//async function to connect the database 
const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect('mongodb://127.0.0.1:27017/short-url')
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

        // console.log(connectionInstance)
    } catch (error) {
        console.log("Error:" , error)
        process.exit(1)
        
    }

}

export default connectDB