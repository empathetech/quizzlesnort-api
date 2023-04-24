import { Router } from "express";
import Question from "../models/Question";

const router = Router();

/**
 * GET /questions/
 * Optional query parameters can be passed in, otherwise list all questions.
 */
router.get("/", async (req, res) => {
  const { query: params } = req;
  const results = await Question.search(params);
  if (res.statusCode === 200) res.send(results);
});

/**
 * GET /questions/:questionId
 * Get a specific question based on its question id.
 */
router.get("/:questionId", async (req, res) => {
  const { questionId } = req.params;
  const question = await Question.query().findById(questionId);
  if (res.statusCode === 200) res.send(question);
});

export default router;
