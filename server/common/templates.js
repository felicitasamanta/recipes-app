import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { config } from "../config.js";

const loadFile = (pathname) => {
  return fs
    .readFileSync(path.resolve(`${config.templatesPath}${pathname}`))
    .toString();
};

const renderTemplate = (pathname, variables) => {
  const html = loadFile(pathname);
  const template = handlebars.compile(html);
  return template(variables);
};

const renderPage = (pathname, variables) => {
  const html = loadFile(pathname);
  const commonStyles = loadFile("/common/commonStyles.html");
  const navigation = loadFile("/common/navigation.html");
  const footer = loadFile("/common/footer.html");
  const template = handlebars.compile(html);
  return template({ ...variables, commonStyles, navigation, footer });
};

const registerPartial = (name, pathname) => {
  handlebars.registerPartial(name, loadFile(pathname));
};

export { loadFile, renderTemplate, renderPage, registerPartial };
