import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const PP  = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



//routs

import userRouter from './routes/user.routs.js'


//routes decleration
app.use("/api/v1/users",userRouter)



export { app }