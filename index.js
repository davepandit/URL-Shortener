import express from "express"
import connectDB from "./db/connectionDB.js"
const app = express()

const PORT = 8001


//testing port 
app.get("/test" , (req ,res)=>{
    res.send("everything is fine !!!")
})


connectDB()
.then(()=>{
    app.listen(PORT , ()=>{
        console.log(`Server is running at ${PORT}`)
    })
})
.catch((error)=>{
    console.log("error in connecting the database!!!" , error)
})
