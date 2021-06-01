const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); 

app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
  // const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
  const weather = {
    "weather" : "rainy",
    "temperature" : "50",
    "wind" : "strong",
    "humidity" : "high"
  }
  // res.status(200).send(phrase);
  res.status(200).send(weather);
});

app.listen(4000, () => console.log("Server running on 4000"));
