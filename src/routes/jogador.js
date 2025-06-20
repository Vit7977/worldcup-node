import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import PlayerController from "../controllers/jogador.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(express.static(path.join(__dirname, "../../public")));

router.get("/jogador", );

router.post("/jogador", );

router.put("/jogador/:id", );

router.delete("/jogador/:id", );

export default router; 