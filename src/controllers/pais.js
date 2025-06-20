import express from "express";
import connection from "../../database/connection.js";

const PaisController = {
  async getPais(req, res) {
    await connection.execute(`SELECT * FROM pais`, (error, result) => {
      if (error) {
        console.log("Erro" + error.message);
      }
      return res.status(200).json(result);
    });
  },

  async getPaisID(req, res) {
    const id = [req.params.id];
    try {
      await connection.execute(
        `SELECT * FROM pais WHERE id = ?`,
        id,
        (error, result) => {
          if (error) {
            console.log("Erro:" + error.message);
          }
          return res.status(200).json({
            message: "Consultando o país de Id:" + id,
            data: result,
          });
        }
      );
    } catch (error) {
      console.log("Erro:" + error.message);
      return res.status(500).send("Erro ao consultar!");
    }
  },

  async addPais(req, res) {
    const data = [req.body.nome, req.body.bandeira_url, req.body.grupo];

    try {
      await connection.execute(
        `INSERT INTO pais (nome, bandeira_url, fk_grupo) VALUES(?, ?, ?);`,
        data
      );
      return res.status(201).json({
        message: "País cadastrado com sucesso!",
        data: data,
      });
    } catch (error) {
      console.log("Erro:" + error.message);
      return res.status(500).send("Erro ao cadastrar país!");
    }
  },

  async updatePais(req, res) {
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
      return res.status(200).json({
        message: "País atualizado com sucesso! ",
        data: data,
      });
    } catch (error) {
      console.log("Erro:" + error.message);
      return res.status(500).send("Erro ao atualizar!");
    }
  },

  async deletePais(req, res) {
    const id = [req.params.id];
    try {
      await connection.execute(`DELETE FROM pais WHERE id = ?`, id);
      return res.status(200).json({
        message: "Id " + id + " foi deletado com sucesso!",
      });
    } catch (error) {
      console.log("Erro:" + error.message);
      return res.status(500).send("Erro ao deletar!");
    }
  },
};

export default PaisController;
