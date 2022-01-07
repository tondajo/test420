const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

var data = { imie: "Maria", nazwisko: "Hućko", klasa: "3i1", grupa: "2" }

app.get("/", function (req, res) {
    res.send(`<p>wejdź w /data</p>`)
})

app.get("/data", function (req, res) {
    res.send(data)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})