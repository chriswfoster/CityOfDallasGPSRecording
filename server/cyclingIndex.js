const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()

const port = 1010

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => console.log("Listenong on port: ", port))
