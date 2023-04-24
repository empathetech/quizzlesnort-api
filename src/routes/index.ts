import { Router } from "express";
import questions from "./questions";
import topics from "./topics";

const routes = Router();

// Top-level routing for all routes for the API.
routes.use("/questions", questions);
routes.use("/topics", topics);

export default routes;
