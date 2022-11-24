const express = require("express");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", async (req, res) => {
  try {
    const { account_id } = req.query;

    if (account_id) {
      res.status(200).json(account_id);
    } else {
      throw new Error();
    }
  } catch {
    res.status(404).send("0");
  }
});

module.exports = server;
