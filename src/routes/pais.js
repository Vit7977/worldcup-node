import express, { Router } from "express";
import { fileURLToPath } from "url";
import path from "path";
import PaisController from "../controllers/pais.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(express.static(path.join(__dirname, "../../../public")));

router.get("/pais/add", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/add-pais.html"));
});

router.get("/api/pais/:id", PaisController.getPaisID);

router.get("/api/pais", PaisController.getPais);

router.get("/pais", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/list-pais.html"));
});

router.post("/pais", PaisController.addPais);


router.put("/api/pais/:id", PaisController.updatePais);

router.get("/pais/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/edit-pais.html"));
});

router.delete("/api/pais/:id", PaisController.deletePais);

export default router;
