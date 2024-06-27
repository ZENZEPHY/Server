const express = require("express");
const app = express();


app.get("/",(req,res)=> {
    res.json({
        message: "THis is another text"

    })
});

app.listen(8000,()=>{
    console.log("The server is running on port 8000")
});