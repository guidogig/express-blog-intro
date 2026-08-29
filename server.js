import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // con .type() specifichiamo il tipo di dato che inviamo (non necessario specificare html se .send(), visto che é il tipo di default)
  res.type("html").send("<h1>Server del mio blog!</h1>");

  //res.download("./public/images/ciambellone.jpeg");

  //res.redirect("/altra-pagina");

  //.json() é una scorciatoia per .type("json")
  //res.json({ messaggino: "Server del mio blog!", tipo: "JSON!" });
});

app.listen(port, () => {
  console.log(`Il server sta ascoltando sulla porta ${port}`);
});
