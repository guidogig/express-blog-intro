import express from "express";

import { posts } from "./posts.js";

const app = express();
const port = 3000;

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.redirect("/client/index.html");
});

app.get("/bacheca", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Il server sta ascoltando sulla porta ${port}`);
});
