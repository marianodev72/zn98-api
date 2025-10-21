import express from "express";
import { getSimulatedData } from "./simulator.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/simulacion", (req, res) => {
  res.json(getSimulatedData());
});

app.get("/", (req, res) => {
  res.send("<h1>Portal zn98</h1><p>API corriendo sin hardware físico.</p>");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
