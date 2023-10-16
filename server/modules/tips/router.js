import express from "express";
import { tipsController } from "./controller.js";

const router = express.Router();
router.get("/", tipsController.getTips);
router.get("/:id", tipsController.getTip);

export { router as tipsRouter };
