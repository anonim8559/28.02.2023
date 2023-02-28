const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send("ok");
});

app.get("/:imie/:nazwisko", function (req, res) {
  const imie = req.params.imie;
  const nazwisko = req.params.nazwisko;
  res.send(imie + " " + nazwisko);
});

app.listen(3001);
