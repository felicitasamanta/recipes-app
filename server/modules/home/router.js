import express from "express";
import { homeController } from "./controller.js";

const router = express.Router();
router.get("/", homeController.renderHome);

export { router as homeRouter };
