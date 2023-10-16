import "dotenv/config";

const config = {
  publicPath: process.env.PUBLIC_PATH,
  templatesPath: process.env.TEMPLATES_PATH,
};

export { config };
