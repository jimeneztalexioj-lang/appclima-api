const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API AppClima funcionando 🚀");
});

app.get("/clima", (req, res) => {
  res.json({
    ciudad: "Lima",
    temperatura: 22,
    estado: "Soleado"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
