const categoryOptions = document.querySelectorAll(
  "#category-filter .dropdown_option"
);

const onCategoryChange = (e) => {
  const url = new URL("/recipes", window.location.origin);
  setTimeout(() => {
    const category = e.target
      .closest("#category-filter")
      .getAttribute("data-selected");
    url.searchParams.append("category", category);
    window.location.href = url.toString();
  });
};

categoryOptions.forEach((option) => {
  option.addEventListener("click", onCategoryChange);
});
