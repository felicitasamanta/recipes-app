import express from "express";
import { contactController } from "./controller.js";

const router = express.Router();

router.get("/", contactController.renderContact);

export { router as contactRouter };
