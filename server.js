const express=require("express")
const app= express()

app.set("view engine","jsx")
app.engine("jsx",require("express-react-views").createEngine())

// app.get('/greeting',(req,res)=>{
//     res.send("<h1>Hello, stranger</h1>")
// })
app.get('/greeting/:name',(req,res)=>{
    res.send(`Hello, ${req.params.name}`)
})
app.get('/typ',(req,res)=>{
    res.send(``)
})



app.listen(3000,(req,res)=>{
    console.log("Listening...")
})