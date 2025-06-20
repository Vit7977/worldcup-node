import connection from "../../database/connection.js";
import express from "express";

const PlayerController = {
  async getPlayer(req, res) {
    await connection.execute(`SELECT * FROM jogador;`, (error, result) => {
      if (error) {
        console.log("Erro:" + error.message);
      }
      return res.status(200).json(result);
    });
  },
  async addPlayer(req, res) {
    const data = [req.body.nome, req.body.data_nasc, req.body.foto_url];
    try {
      connection.execute(
        `INSERT INTO jogador (nome, data_nasc, foto_url) VALUES (?,?,?);`,
        data
      );
      return res
        .status(201)
        .send("Jogador cadastrado com sucesso! " + JSON.stringify(data));
    } catch (error) {
      console.log("Erro:" + error.message);
      return res.status(500).send("Erro ao cadastrar jogador!");
    }
  },
  async updatePlayer(req, res) {},
  async deletePlayer(req, res) {},
};

export default PlayerController;
