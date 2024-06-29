const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hi my firendo'
    });
});

app.listen(3000, () => {
    console.log("Server is running in some port 3000 ");
});

