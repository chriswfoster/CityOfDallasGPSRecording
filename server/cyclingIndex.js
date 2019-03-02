const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios")
require("dotenv").config()

const port = 3333

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("get/dentonInfo", (req, res) => {
  axios
    .get(
      "https://services.arcgis.com/9dTWrhPzuDPnUVXr/arcgis/rest/services/Major_Points_of_Interest/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    )
    .then(resp =>
      res.status(200).json({
        status: true,
        message: resp
      })
    )
    .catch(err => {
      res.status(200).send({
        status: false,
        message: "Error getting data"
      })
      console.log("Error getting Denton's data!")
    })
})

app.listen(port, () => console.log("Listenong on port: ", port))
