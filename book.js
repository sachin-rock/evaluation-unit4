const express=requre('express')
const app=express()

const book=require("./data.json")
console.log(book)


app.get("/book",(req,res)=>{
    res.send("book")
    res.end()
})


app.listen("5000",()=>{
    console.log("book")
})