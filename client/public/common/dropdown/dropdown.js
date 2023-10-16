const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownLabel = dropdown.querySelector(".dropdown_button");

  dropdown.onclick = (e) => {
    dropdown.classList.toggle("active");
    const optionValue = e.target?.getAttribute("data-option");

    if (optionValue) {
      dropdown.setAttribute("data-selected", optionValue);
      dropdownLabel.textContent = e.target.textContent;
    }
  };
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".dropdown")) return;
  dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
});
