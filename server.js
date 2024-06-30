const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api",authRoutes);

app.listen(3000, () => {
    console.log("Server is running in some port 3000 ");
});

