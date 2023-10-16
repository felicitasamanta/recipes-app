const form = document.getElementById("subscription");
const input = document.querySelector("input");
const inputError = document.querySelector(".error");
const dialog = document.querySelector("dialog");
const dialogCloseBtn = document.querySelector(".close");

const validateForm = () => {
  let isValid = true;
  const validRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  if (input.validity.valueMissing) {
    inputError.textContent = "Required";
    isValid = false;
  } else if (input.validity.tooShort) {
    inputError.textContent = `Username should be at least ${input.minLength} symbols`;
    isValid = false;
  } else if (!input.value.match(validRegex)) {
    inputError.textContent = "Invalid email address!";
    isValid = false;
  }

  if (!isValid) inputError.classList.add("error");

  return isValid;
};

input.oninput = () => {
  const isErrorShown = inputError.classList.contains("error");

  if (isErrorShown) {
    inputError.textContent = "";
    inputError.classList.remove("error");
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const isValid = validateForm();
  if (!isValid) return;
  dialog.showModal();
  input.value = "";
});

dialogCloseBtn.addEventListener("click", () => {
  dialog.close();
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("dialog")) return;
  dialog.close();
});
