import { renderPage, registerPartial } from "../../common/templates.js";
import { tipsService } from "../tips/services.js";
import { recipesService } from "../recipes/services.js";

registerPartial("homeRecipes", "/home/home-recipes.partial.html");
registerPartial(
  "homeRecipeListItem",
  "/home/home-recipes-list-item.partial.html"
);
registerPartial("homeHeroTip", "/home/home-hero-tip.partial.html");
registerPartial("categories", "/home/categories-list.partial.html");
registerPartial(
  "categoriesListItem",
  "/home/categories-list-item.partial.html"
);

const renderHome = (req, res) => {
  res.send(
    renderPage("/home/home.html", {
      homeRecipes: recipesService.homeRecipes,
      tips: tipsService.tips,
      categoryOptions: recipesService.categoryOptions,
    })
  );
};

export const homeController = { renderHome };
