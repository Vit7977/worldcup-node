import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import paisRouter from "./src/routes/pais.js";

export const raizProjeto = fileURLToPath(import.meta.url);
const __dirname = path.dirname(raizProjeto);

const app = express();
const port = 9090;

app.use(express.json())

app.use("/", paisRouter);

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(`App aberto em http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});
