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
app.get('/tip',(req,res)=>{
    let newTotal = parseInt(req.query.total)
    let newTip = parseInt(req.query.tipPercentage)
    let tipAmount = (newTotal/(100/newTip))
    console.log(newTip)
    res.send(`${tipAmount}`)
})



app.listen(3000,(req,res)=>{
    console.log("Listening...")
})