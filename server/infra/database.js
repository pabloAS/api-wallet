const { Pool } = require("pg");
// const dotenv = require("dotenv");

// dotenv.config();

const db = new Pool({
  user: "",
  host: "",
  database: "",
  password: "",
  port: 5432,
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 2000,
});

module.exports = db;
