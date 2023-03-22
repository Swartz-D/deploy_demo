// server/index.js
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const config = require("./config.js");

const app = express();
app.use(cors());
app.use(express.json());

const connectionString = config.connectionString;
const pool = new Pool({
  connectionString: connectionString,
});

app.get("/api/messages", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM messages");
  res.json(rows);
});

app.post("/api/messages", async (req, res) => {
  const { content } = req.body;
  await pool.query("INSERT INTO messages (content) VALUES ($1)", [content]);
  res.sendStatus(201);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
