const express = require("express");
const app = express();

app.get("/dog",async(req,res) => {
  const r = await fetch("https://dog.ceo/api/breeds/image/random");
  res.json(await r.json());
});

app.listen(3000,() => console.log("http://localhost*3000"));