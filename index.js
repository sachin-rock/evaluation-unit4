const express=require('express')

const app=express()


app.get("/libraries",checkpermisson,(req,res)=>{
    res.send({route:"/libraries"},permission:true)
})
app.get("/authors",checkpermisson,(req,res)=>{
    res.send({route:"/authors"},permission:true)
})

app.listen("5000",()=>{
    console.log("Hello")
})
