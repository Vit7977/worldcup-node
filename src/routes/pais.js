import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import connection from "../../database/connection.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(express.static(path.join(__dirname, "../../public")));

router.get("/pais", async (req, res) => {
  await connection.execute(`SELECT * FROM pais`, (error, result) => {
    if (error) {
      console.log("Erro" + error.message);
    }
    return res.status(200).json(result);
  });
});

router.post("/pais", async (req, res) => {
  const data = [req.body.nome, req.body.bandeira_url, req.body.grupo];

  try {
    await connection.execute(
      `INSERT INTO pais (nome, bandeira_url, fk_grupo) VALUES(?, ?, ?);`,
      data
    );
    return res
      .status(201)
      .send("País cadastrado com sucesso! " + JSON.stringify(data));
  } catch (error) {
    console.log("Erro:" + error.message);
    return res.status(500).send("Erro ao cadastrar!");
  }
});

router.put("/pais/:id", async (req, res) => {
  const data = [
    req.body.nome,
    req.body.bandeira_url,
    req.body.grupo,
    req.params.id,
  ];

  try {
    await connection.execute(
      `UPDATE pais SET nome = ?, bandeira_url = ?, fk_grupo = ? WHERE id = ?;`,
      data
    );
    return res
      .status(200)
      .send("País atualizado com sucesso! " + JSON.stringify(data));
  } catch (error) {
    console.log("Erro:" + error.message);
    return res.status(500).send("Erro ao atualizar!");
  }
});

router.delete("/pais/:id", async (req, res) => {
  const id = [req.params.id];
  try {
    await connection.execute(`DELETE FROM pais WHERE id = ?`, id);
    return res.status(200).send("Id " + id + " foi deletado com sucesso!");
  } catch (error) {
    console.log("Erro:" + error.message);
    return res.status(500).send("Erro ao deletar!");
  }
});

export default router;
