const express = require('express');
const app = express();
const PORT = 5000;
app.get("/",(req,res)=>{
    res.send("Hi,I am live");
});
const start = async() =>{
    try{
        app.listen(PORT,()=>{
            `${PORT} Yes I am connected`
        })
    }catch(error){
        console.log(error);
    }
}
start();