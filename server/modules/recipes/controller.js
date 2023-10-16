import {
  renderPage,
  renderTemplate,
  registerPartial,
} from "../../common/templates.js";
import { recipesService } from "./services.js";

registerPartial("recipeListItem", "/recipes/recipes-list-item.partial.html");

const getRecipes = (req, res) => {
  const { category } = req.query;
  const categories = [...recipesService.categoryOptions];
  const allOption = { label: "All recipes", value: "all recipes" };
  let recipes = recipesService.recipes;

  if (category && category !== allOption.value) {
    categories.unshift(allOption);

    recipes = recipes.filter((recipe) =>
      recipe.categories.includes(
        `${category.slice(0, 1).toUpperCase()}${category.slice(1)}`
      )
    );
  }

  const selectedCategory =
    category && categories.find((option) => option.value === category);

  res.send(
    renderPage("/recipes/recipes.html", {
      title: category || "All recipes",
      recipes,
      filters: {
        category: {
          id: "category-filter",
          label:
            category === allOption.value
              ? allOption.label
              : selectedCategory?.label || "Select category...",
          selected: selectedCategory?.value || "",
          options: categories,
        },
      },
    })
  );
};

const getRecipe = (req, res) => {
  const { id } = req.params;
  let recipe = recipesService.recipes.find((recipe) => recipe.id === +id);

  if (!recipe)
    recipe = recipesService.homeRecipes.find((recipe) => recipe.id === +id);

  if (!recipe) {
    return res
      .status(404)
      .send(renderTemplate("/recipes/not-found.html", { id }));
  }

  const {
    title,
    img,
    img_vertical,
    short_description,
    long_description,
    ingredients,
    preparation,
    author,
    rate,
  } = recipe;

  const html = renderPage("/recipes/recipe.html", {
    title,
    img,
    img_vertical,
    short_description,
    long_description,
    ingredients,
    preparation,
    author,
    rate,
  });

  res.send(html);
};

export const recipesController = { getRecipes, getRecipe };
