import { renderPage } from "../../common/templates.js";

const renderContact = (req, res) => {
  const html = renderPage("/contact/contact.html", {
    title: "Contact",
    body: "Contact page",
  });

  res.send(html);
};

export const contactController = { renderContact };
