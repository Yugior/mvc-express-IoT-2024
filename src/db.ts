import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const configOptions: ConnectionOptions = {
  host: "127.0.0.1",
  user: "root",
  password: "Horasfeb@2015",
  database: "school",
  port: Number(process.env.MYSQL_PORT) || 3306,
};

const pool = mysql.createPool(configOptions);

export default pool;
