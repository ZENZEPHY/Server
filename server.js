const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();


// app.get("/",(req,res)=> {
//     res.json({
//         message: "THis is another text"

//     })
// });

app.use(express.json());

app.use("/api", authRoutes);

app.listen(8000,()=>{
    console.log("The server is running on port 8000")
});