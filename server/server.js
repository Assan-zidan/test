const path = require("path")
const express = require("express")

const app = express()
var options = {
  root: path.join(__dirname, "..", "public"),
  dotfiles: "deny",
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true,
  },
}
var fileName = "index.html"
const publicPath = path.join(__dirname, "..", "public")
const port = process.env.PORT || 8000

app.use(express.static(publicPath))
app.get("*", (req, res) => {
  //res.send("Hello GUY12")
  //res.sendFile(path.join(publicPath, "index.html"));
  res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log("Sent:", fileName)
        }
  })
})
app.listen(port, () => {
  console.log("Server listening on port  " + port)
})
