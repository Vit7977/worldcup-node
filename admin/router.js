import express from "express";

const router = express.Router();

router.get("/admin", (req, res) => {
  res.send("Consultando Admin!");
});

router.post("/admin", (req, res) => {
  res.send("Cadastrando Admin!");
});

router.put("/admin/:id", (req, res) => {
  res.send("Atualizando Admin!");
});

export default router;
