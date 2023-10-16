import express from "express";
import { recipesController } from "./controller.js";

const router = express.Router();
router.get("/", recipesController.getRecipes);
router.get("/:id", recipesController.getRecipe);

export { router as recipesRouter };
