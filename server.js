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
const ansArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
app.get('/magic/:question',(req,res)=>{
    let question = req.params.question
    let len = ansArray.length-1
    let answer = Math.floor(Math.random()*len)
    res.send(`${question} <h1>${ansArray[answer]}</h1>`)
})


app.listen(3000,(req,res)=>{
    console.log("Listening...")
})