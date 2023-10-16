# My Food App

My Food App is a web application with server-side rendering.It provides various features to explore recipes, discover cooking tips, and stay updated with the latest food trends.

<div style="display: flex; flex-wrap: wrap">
    <img src="/client/public/assets/github/heroScreen.png" width="45%" />
    &nbsp;
    <img src="/client/public/assets/github/recipesScreen.png" width="45%" /> 
    &nbsp;
</div>

## Technologies Used

### Client-Side

- **HTML/CSS:** Frontend structure and styles.
- **JavaScript:** Programming language for client-side code.
- **SCSS:** Stylesheets pre-processor.

### Server-Side

- **Express.js:** Backend web framework.
- **Handlebars:** Templating engine for rendering HTML.
- **Node.js:** Server runtime.
- **JavaScript:** Programming language for server-side code.
- **Dotenv:** Library for environment variable management.

## Project Structure

The project is organized into two main directories: `server` and `client`. Below is an overview of the project structure:

### Client Directory

- `client/public/`: Contains assets such as styles, images, and icons.

- `client/templates/`: Contains HTML templates and partials for rendering pages.

### Server Directory

- `server/common/`: Contains common utilities and templates used throughout the application.

  - `templates.js`: A module for loading and rendering HTML templates using Handlebars.

- `modules/`: Contains modular sections for different app features.

  - `contact/`: Example module for the Contact page.

    - `controller.js`: Controller for rendering the Contact page.

    - `router.js`: Defines the Express router for the Contact module.

## Getting Started

- npm install
- npm start
