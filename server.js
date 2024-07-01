const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

//routes
const authRoutes = require("./routes/authRoutes");


dotenv.config();
const app = express();

//! Database Connection
mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
})
.then(()=>{console.log("Database connected successfully");})
.catch((err)=>{console.log("Database connection failed", err);});

// ! middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api",authRoutes);

app.listen(3000, () => {
    console.log("Server is running in some port 3000 ");
});

