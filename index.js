require('dotenv').config()
const express  = require('express');
const app = express();
const port = 3000

app.get('/' , (req,res) =>{
    res.send('Hello Ayush')
})
app.get('/ap',(req,res)=>{
    res.send("<h2>Code karo DSA kare </h2>")
})
app.listen(process.env.PORT , ()=>{
    console.log(`Listening on port ${port}`)
})