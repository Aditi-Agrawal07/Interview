const http = require("http")
const express = require("express")
const mongooseConnection = require("./utility/database.utils")
const dotenv = require('dotenv')
const studentRouter = require("./Routes/student.routes")
const cors = require("cors")
dotenv.config()

const app = express()

const httpServer = http.createServer(app)

app.use(express.json())
app.use(cors)
mongooseConnection()
app.use(studentRouter)
const port = 4000
httpServer.listen(port, ()=>{
    console.log(`Server started at ${port}`)
})