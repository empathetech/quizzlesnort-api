import express from "express";
import knex from "knex";
import objection from "objection";
import knexConfig from "../knexfile";
import routes from "./routes";

const app = express();
const router = express.Router();


// Initialize Knex with the configuration from knexfile.ts
const db = knex(knexConfig);

// Bind Objection models to the Knex instance
objection.Model.knex(db);

app.use("/", routes);

export default app;
