import { Knex } from "knex";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const knexConfig: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.resolve(__dirname, "src", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "seeds"),
  },
  pool: {
    min: 2,
    max: 10,
  },
};

export default knexConfig;
