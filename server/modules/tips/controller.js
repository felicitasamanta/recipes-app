import { renderPage, registerPartial } from "../../common/templates.js";
import { tipsService } from "./services.js";

registerPartial("tipsListItem", "/tips/tips-list-item.partial.html");
registerPartial("tipItem", "/tips/tip-item.partial.html");

const getTips = (req, res) => {
  const { category } = req.query;
  const categories = [...tipsService.categoryOptions];
  const allOption = { label: "All tips", value: "all tips" };
  let tips = tipsService.tips;

  if (category && category !== allOption.value) {
    categories.unshift(allOption);

    tips = tips.filter((tip) =>
      tip.categories.includes(
        `${category.slice(0, 1).toUpperCase()}${category.slice(1)}`
      )
    );
  }
  const selectedCategory =
    category && categories.find((option) => option.value === category);

  res.send(
    renderPage("/tips/tips.html", {
      title: category || "All tips",
      tips,
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

const getTip = (req, res) => {
  const { id } = req.params;
  let tip = tipsService.tips.find((tip) => tip.id === +id);

  if (!tip) {
    return res.status(404).send(renderTemplate("/tips/not-found.html", { id }));
  }

  const { title, img, description, categories, review, readTime, steps } = tip;

  const html = renderPage("/tips/tip.html", {
    title,
    img,
    description,
    categories,
    review,
    readTime,
    steps,
  });

  res.send(html);
};

export const tipsController = { getTips, getTip };
