const tips = [
  {
    id: 1,
    title: "Brownie Magic",
    img: "/assets/images/brownie.jpg",
    description: "5 tips how to make the best brownies in the game",
    categories: ["How to", "Baking"],
    review:
      "The first time I decided to bake brownies I totally failed. The second time same. The cake always came out too gooey, too dry, too wet... But I kept trying and trying and these are the tips that saved my baking.",
    readTime: "12 min read",
    steps: [
      {
        step: " #01",
        title: "Be prepared",
        description:
          "Always read the recipe and prepare all needed ingredients. The ingredients are 90% of the success.",
      },
      {
        step: "#02",
        title: "Choose the right recipe",
        description:
          "There are millions of recipes on the internet. Always read the comments below the article. Also the ingredients in the recipe can predict if the brownies will be more dense or cakey.",
      },
      {
        step: "#03",
        title: "Timing is everything",
        description:
          "Brownies are very time sensitive cake to bake. Even couple more minutes in the oven can ruin their perfect structure. Always check on them five minutes before the timer to check if they are properly baked.",
      },
      {
        step: "#04",
        title: "Take a chill pill",
        description:
          "Cutting brownies directly when you take them out of the oven can turn into one huge mess. Always let the cake cool down properly before you put knife in it.",
      },
      {
        step: "#05",
        title: "Whip it gooooood",
        description:
          "This is one the most important steps to follow. Whip eggs and sugar long enough so they turn into foamly and fluffy yellow form. This step also gives brownies its beautiful crackling top that everyone loves!",
      },
    ],
  },
  {
    id: 2,
    title: "Cooking is an Art",
    img: "/assets/images/baking.jpg",
    description:
      "You can make changes as you go with no major catastrophe in the end",
    categories: ["How to", "Baking"],
    review:
      "The first time I decided to bake brownies I totally failed. The second time same. The cake always came out too gooey, too dry, too wet... But I kept trying and trying and these are the tips that saved my baking.",
    readTime: "12 min read",
    steps: [
      {
        step: " #01",
        title: "Measuring matters",
        description:
          " We Americans like to kick it old-school in the measuring department, relying on cups and spoons to give the proper proportions. Yet pastry chefs world-wide measure their ingredients by metric weight. The reason for this is that a cup of flour can vary greatly in weight depending on the type of flour, and how packed it is.",
      },
      {
        step: "#02",
        title: "Quality ingredients",
        description:
          "Different brands of butter, yogurt, buttermilk, and flour have varied levels of moisture, fat, and protein. These little variations can greatly effect the outcome of the final product. ",
      },
      {
        step: "#03",
        title: "Ingredient temperature",
        description:
          "f a recipe calls for cold butter, melted butter, or room-temperature eggs, remember that any adjustment you make will effect the outcome.",
      },
      {
        step: "#04",
        title: "Butter",
        description:
          "Buy and use the freshest butter you can find. Check dates on the packing and always select unsalted butter, because salt is a preservative… Meaning salted butter has probably been in cold storage longer than unsalted.",
      },
    ],
  },
];

const categoryOptions = [
  { label: "How To", value: "how to" },
  {
    label: "Products",
    value: "products",
  },
  { label: "Ingredient Tips", value: "ingredient" },
  { label: "Cooking Techniques", value: "cooking" },

  {
    label: "Kitchen Equipment and Tools",
    value: "tools",
  },
];

export const tipsService = { tips, categoryOptions };
