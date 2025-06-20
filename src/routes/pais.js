import express, { Router } from "express";
import { fileURLToPath } from "url";
import path from "path";
import PaisController from "../controllers/pais.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(express.static(path.join(__dirname, "../../../public")));

router.get("/pais/cadastrar", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/add-pais.html"));
});

router.get("/api/pais", PaisController.getPais);

router.get("/pais", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/list-pais.html"));
});

router.post("/pais", PaisController.addPais);

router.put("/pais/:id", PaisController.updatePais);

router.delete("/pais/:id", PaisController.deletePais);

export default router;
