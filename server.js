const express =require("express")
const path =require ("path")

const server_port=process.env.PORT || 3333

const app=express()
app.use('/public',express.static(path.join(__dirname,'public')))
app.get('/', (req , res) => res.send("hello from backend"))

app.listen(server_port,()=> console.log("server started"))