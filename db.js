import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.IPSERVIDOR,
  user: process.env.USUARIO,
  password: process.env.PASSWORD,
  database: process.env.BD,
});

export default pool;
