const express = require("express");

const app = express();

const port = process.env.port || 8080;

app.use("/", express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
