const express =require("express");
const { dirname } = require("path");
const app =express();


app.get('/',handleRoot)

app.get('/info',handleInfo)

app.get('/About',handleAbout)


function handleRoot (req,res){
  res.send("Root Route")
}

function handleInfo (req,res){
    res.send("Root Info")
  }

  function handleAbout (req,res){
    res.send("Root About")
  }

  
  

app.listen(5000,()=>{
    console.log("Server is Running..!")
})