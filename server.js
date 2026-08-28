import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Ciao nini!");
});

app.listen(port, () => {
  console.log(`Il server sta ascoltando sulla porta ${port}`);
});
