import { Router, Request, Response } from "express";

const router = Router();

/**
 * GET /health
 */
router.get("/", async (req: Request, res: Response) => {
  res.send({ healthy: true });
});

export default router;