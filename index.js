const express = require('express');
const app = express();
const port = process.env.port || 3000;
const router = require("./router.js");
const cors = require("cors")

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);



app.listen(port, () => {
    console.log(`MY app is eavesdropping at localhost:${port}`)
})