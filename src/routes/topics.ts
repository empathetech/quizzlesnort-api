import { Router } from "express";
import Topic from "../models/Topic";

const router = Router();

/**
 * GET /topics/
 */
router.get("/", async (req, res) => {
  const topics = await Topic.query();
  if (res.statusCode === 200) res.send(topics);
});

/**
 * GET /topics/:topicId
 */
router.get("/:topicId", async (req, res) => {
  const { topicId } = req.params;
  const topic = await Topic.query().findById(topicId);
  if (res.statusCode === 200) res.send(topic);
});

export default router;
