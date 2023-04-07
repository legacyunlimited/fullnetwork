const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());

const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.connect();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.get("/albums", (req, res) => {
  pool.query("SELECT * FROM album").then((result) => {
    res.send(result.rows);
  });
});

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
