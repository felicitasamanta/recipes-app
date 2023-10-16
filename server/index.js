import express from "express";
import cookieParser from "cookie-parser";
import { tipsRouter } from "./modules/tips/router.js";
import { config } from "./config.js";
import { homeRouter } from "./modules/home/router.js";
import { contactRouter } from "./modules/contact/router.js";
import { recipesRouter } from "./modules/recipes/router.js";
import { registerPartial } from "./common/templates.js";

registerPartial("dropdown", "/common/dropdown.partial.html");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static(config.publicPath));

app.use("/", homeRouter);
app.use("/recipes", recipesRouter);
app.use("/tips", tipsRouter);
app.use("/contact", contactRouter);

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
