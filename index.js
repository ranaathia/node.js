const express = require("express")
const path = require("path")
const app = express();

app.use(express.json()) ;

app.get("/" , (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const port = 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`example app listening at http://localhost:${port}`);
});