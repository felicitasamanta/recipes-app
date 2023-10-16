const recipes = [
  {
    id: 1,
    title: "Creamy Spaghetti",
    img: "/assets/images/creamySpaghetti.jpg",
    img_vertical: "/assets/images/creamySpaghettiVerticaal.jpg",
    short_description: "Quick and easy to make!",
    long_description:
      "This simple 'cacio e pepe' recipe is super minimalist and easy to make. All you need is really just good cheese and pepper.",

    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "pasta spaghetti", amount: "6 oz." },
      { item: "unsalted butter", amount: "1 tsp" },
      { item: "fresh black peper", amount: "1 tsp" },
      { item: "grated Pecorino cheese", amount: "1/3 cup " },
      { item: "grated Grana Podano cheese", amount: "1 cup" },
    ],
    preparation: [
      {
        step: " Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add pasta to cook. Stir occassionally until the pasta gets tender. Before draining pasta reserve 3/4 cup of pasta cooking water",
      },
      {
        step: "Step 02",
        description:
          "On a medium large skillet melt butter. Once the butter is melted, keep the temperature on medium heat and add pepper, cook until the pepper is toasted.",
      },
      {
        step: "Steep 03",
        description:
          "Add the reserved pasta water to the skillet and let simmer. Add pasta and all grated cheese. Stir and toss until cheese melts and create creamy texture. Then the pasta is ready to serve.",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
  {
    id: 2,
    title: "Fusilli pomodoro",
    img: "/assets/images/fusilliPomodoro.jpg",
    img_vertical: "/assets/images/pastaVertical1.jpg",
    short_description: "Juicy and fresh plate",
    long_description:
      "Wholesome Simplicity: Fusilli Pomodoro Recipe. Enjoy the ease of this Italian classic—twirl-shaped fusilli pasta drenched in a vibrant tomato sauce, kissed with garlic and herbs. Perfect for busy nights, it's a quick and satisfying dinner that embodies the essence of homemade Italian comfort food.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "fusilli pasta", amount: "6 oz." },
      { item: "olive oil", amount: "2 tbsp" },
      { item: "garlic cloves, minced", amount: "2" },
      { item: "canned crushed tomatoes", amount: "28 oz." },
      { item: "fresh basil leaves, chopped", amount: "1/4 cup" },
      { item: "salt", amount: "1 tsp" },
      { item: "black pepper, freshly ground", amount: "1/2 tsp" },
      { item: "grated Parmesan cheese", amount: "1/2 cup" },
    ],
    preparation: [
      {
        step: "Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add fusilli pasta to cook. Stir occasionally until the pasta becomes tender. Before draining the pasta, reserve 3/4 cup of pasta cooking water.",
      },
      {
        step: "Step 02",
        description:
          "In a medium-large skillet, melt the unsalted butter. Once the butter is melted, keep the temperature on medium heat and add freshly ground black pepper. Cook until the pepper is toasted.",
      },
      {
        step: "Step 03",
        description:
          "Add the reserved pasta water to the skillet and let it simmer. Add the cooked fusilli pasta and all of the grated Pecorino cheese and grated Grana Padano cheese. Stir and toss until the cheese melts and creates a creamy texture. Your Fusilli Pomodoro is now ready to serve.",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
  {
    id: 3,
    title: "Spaghetti Arrabiata",
    img: "/assets/images/creamySpaghetti.jpg",
    img_vertical: "/assets/images/pastaVertical2.jpg",
    short_description: "Pinch at chilli to tingle your mouth",
    long_description:
      "This Italian delight features al dente spaghetti coated in a spicy tomato and garlic sauce, enlivened with red pepper flakes. A speedy and bold dinner choice, it's the epitome of easy and exciting homemade Italian cuisine.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "spaghetti", amount: "8 oz." },
      { item: "olive oil", amount: "3 tbsp" },
      { item: "garlic cloves, minced", amount: "3" },
      { item: "red pepper flakes", amount: "1/2 tsp" },
      { item: "canned crushed tomatoes", amount: "28 oz." },
      { item: "fresh basil leaves, chopped", amount: "1/4 cup" },
      { item: "salt", amount: "1 tsp" },
      { item: "black pepper, freshly ground", amount: "1/2 tsp" },
      { item: "grated Pecorino Romano cheese", amount: "1/4 cup" },
    ],

    preparation: [
      {
        step: "Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add spaghetti to cook. Stir occasionally until the spaghetti becomes al dente. Before draining, reserve 1/2 cup of pasta cooking water.",
      },
      {
        step: "Step 02",
        description:
          "In a large skillet, heat olive oil over medium heat. Add minced garlic and red pepper flakes. Sauté until the garlic becomes fragrant and slightly golden.",
      },
      {
        step: "Step 03",
        description:
          "Add the canned crushed tomatoes, chopped basil, salt, and freshly ground black pepper to the skillet. Simmer for about 15 minutes, allowing the sauce to thicken.",
      },
      {
        step: "Step 04",
        description:
          "Add the cooked spaghetti to the skillet with the sauce. Toss to coat the spaghetti with the Arrabbiata sauce. If the sauce is too thick, you can add some of the reserved pasta cooking water to reach your desired consistency.",
      },
      {
        step: "Step 05",
        description:
          "Serve the Spaghetti Arrabbiata hot, garnished with grated Pecorino Romano cheese. Enjoy your spicy and flavorful meal!",
      },
    ],

    author: "Tom Ralgenden",
    rate: 4,
  },
  {
    id: 4,
    title: "Baked pasta",
    img: "/assets/images/bakedPasta.jpg",
    img_vertical: "/assets/images/pastaVertical3.jpg",
    short_description: "Bowl full of cheese and spice!",
    long_description:
      "Dive into this satisfying Italian favorite—penne pasta layered with a rich, meaty sauce, creamy cheese, and baked to perfection. A simple and comforting dinner that's sure to delight, embodying the essence of homemade Italian goodness",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "penne pasta", amount: "8 oz." },
      { item: "olive oil", amount: "2 tbsp" },
      { item: "onion, finely chopped", amount: "1" },
      { item: "garlic cloves, minced", amount: "2" },
      { item: "ground beef", amount: "1 lb" },
      { item: "canned crushed tomatoes", amount: "28 oz." },
      { item: "dried oregano", amount: "1 tsp" },
      { item: "salt", amount: "1/2 tsp" },
      { item: "black pepper, freshly ground", amount: "1/4 tsp" },
      { item: "ricotta cheese", amount: "1 cup" },
      { item: "mozzarella cheese, shredded", amount: "2 cups" },
      { item: "Parmesan cheese, grated", amount: "1/2 cup" },
      { item: "fresh basil leaves, chopped", amount: "1/4 cup" },
    ],

    preparation: [
      {
        step: "Step 01",
        description: "Cook penne pasta until al dente. Drain and set aside.",
      },
      {
        step: "Step 02",
        description:
          "Sauté onion and garlic, then add ground beef and cook until browned. Mix in crushed tomatoes, oregano, salt, and pepper. Simmer.",
      },
      {
        step: "Step 03",
        description:
          "Layer cooked penne, ricotta, and half the mozzarella in a baking dish. Top with meat sauce, remaining penne, and cheese.",
      },
      {
        step: "Step 04",
        description:
          "Bake at 375°F (190°C) until cheese is bubbly. Garnish with fresh basil. Serve and enjoy!",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
  {
    id: 5,
    title: "Linguine Aglio e olio",
    img: "/assets/images/tortellini.jpg",
    img_vertical: "/assets/images/pastaVertical4.jpg",
    short_description: "Sage, butterr and pumpkin? Yes!",
    long_description:
      "Experience Italian elegance with this dish—linguine pasta dressed in a sublime garlic-infused olive oil, enhanced by red pepper flakes and fresh parsley. A quick and flavorful dinner that captures the essence of homemade Italian cuisine.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "linguine pasta", amount: "8 oz." },
      { item: "olive oil", amount: "1/2 cup" },
      { item: "garlic cloves, thinly sliced", amount: "4" },
      { item: "red pepper flakes", amount: "1/2 tsp" },
      { item: "fresh parsley, chopped", amount: "1/4 cup" },
      { item: "salt", amount: "1/2 tsp" },
      { item: "black pepper, freshly ground", amount: "1/4 tsp" },
      { item: "grated Parmesan cheese", amount: "1/2 cup" },
    ],

    preparation: [
      {
        step: "Step 01",
        description: "Cook linguine pasta until al dente. Drain and set aside.",
      },
      {
        step: "Step 02",
        description:
          "In a skillet, heat olive oil over medium heat. Add thinly sliced garlic and red pepper flakes. Sauté until the garlic turns golden.",
      },
      {
        step: "Step 03",
        description:
          "Toss the cooked linguine in the garlic-infused olive oil. Season with salt and freshly ground black pepper.",
      },
      {
        step: "Step 04",
        description:
          "Sprinkle with chopped fresh parsley and grated Parmesan cheese. Serve immediately.",
      },
    ],
    author: "Sam Smith",
    rate: 4,
  },
  {
    id: 6,
    title: "Linguine con Funghi",
    img: "/assets/images/linguineConFunghi.jpg",
    img_vertical: "/assets/images/pastaVertical5.jpg",
    short_description: "Classic meal from Naples",
    long_description:
      " Savor the essence of Italian forests with this dish—linguine pasta enveloped in buttery mushrooms and thyme. A simple and earthy dinner that embodies the rustic charm of homemade Italian cuisine.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "linguine pasta", amount: "8 oz." },
      { item: "olive oil", amount: "2 tbsp" },
      { item: "butter", amount: "2 tbsp" },
      { item: "garlic cloves, minced", amount: "2" },
      { item: "mushrooms, sliced", amount: "8 oz." },
      { item: "fresh thyme leaves", amount: "1 tsp" },
      { item: "salt", amount: "1/2 tsp" },
      { item: "black pepper, freshly ground", amount: "1/4 tsp" },
      { item: "grated Parmesan cheese", amount: "1/2 cup" },
    ],

    preparation: [
      {
        step: "Step 01",
        description: "Cook linguine pasta until al dente. Drain and set aside.",
      },
      {
        step: "Step 02",
        description:
          "In a large skillet, heat olive oil and butter over medium heat. Add minced garlic and sliced mushrooms. Sauté until mushrooms are browned.",
      },
      {
        step: "Step 03",
        description:
          "Toss the cooked linguine with the sautéed mushrooms. Add fresh thyme leaves, salt, and freshly ground black pepper.",
      },
      {
        step: "Step 04",
        description:
          "Sprinkle with grated Parmesan cheese. Serve your Linguine con Funghi hot and enjoy!",
      },
    ],
    author: "Sam Smith",
    rate: 4,
  },
  {
    id: 7,
    title: "Pumpkin Ravioli",
    img: "/assets/images/ravioli.jpg",
    img_vertical: "/assets/images/pastaVertical6.jpg",
    short_description: "Creamy, tasty with a bit of greens",
    long_description:
      "Celebrate the season with this dish—pillowy pumpkin-filled ravioli dressed in a sage-infused buttery sauce. A warm and comforting dinner that captures the flavors of homemade Italian cuisine with a seasonal twist.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "pumpkin ravioli", amount: "8 oz." },
      { item: "butter", amount: "4 tbsp" },
      { item: "sage leaves", amount: "8-10" },
      { item: "salt", amount: "1/2 tsp" },
      { item: "black pepper, freshly ground", amount: "1/4 tsp" },
      { item: "grated Parmesan cheese", amount: "1/4 cup" },
    ],

    preparation: [
      {
        step: "Step 01",
        description:
          "Cook pumpkin ravioli according to package instructions. Drain and set aside.",
      },
      {
        step: "Step 02",
        description:
          "In a skillet, melt butter over medium heat. Add sage leaves and cook until they become crispy.",
      },
      {
        step: "Step 03",
        description:
          "Toss the cooked pumpkin ravioli in the sage-infused butter. Season with salt and freshly ground black pepper.",
      },
      {
        step: "Step 04",
        description:
          "Sprinkle with grated Parmesan cheese. Serve your Pumpkin Ravioli hot and enjoy!",
      },
    ],
    author: "Sam Smith",
    rate: 4,
  },
  {
    id: 8,
    title: "Spaghetti Carbonara",
    img: "/assets/images/spaghettiCarbonara.jpg",
    img_vertical: "/assets/images/pastaVertical7.jpg",
    short_description: "Luscious and wonderfully indulgent",
    long_description:
      "Indulge in Italian simplicity—spaghetti enveloped in a creamy sauce of eggs, Pecorino Romano cheese, and crispy pancetta. A classic and delectable dinner that showcases the essence of homemade Roman cuisine.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "spaghetti", amount: "8 oz." },
      { item: "pancetta or guanciale, diced", amount: "4 oz." },
      { item: "eggs", amount: "2" },
      { item: "grated Pecorino Romano cheese", amount: "1/2 cup" },
      { item: "salt", amount: "1/2 tsp" },
      { item: "black pepper, freshly ground", amount: "1/4 tsp" },
    ],

    preparation: [
      {
        step: "Step 01",
        description: "Cook spaghetti until al dente. Drain and set aside.",
      },
      {
        step: "Step 02",
        description:
          "In a skillet, cook diced pancetta or guanciale until crispy. Remove from heat and drain excess fat.",
      },
      {
        step: "Step 03",
        description:
          "In a bowl, whisk together eggs, grated Pecorino Romano cheese, salt, and freshly ground black pepper.",
      },
      {
        step: "Step 04",
        description:
          "Toss the cooked spaghetti with the crispy pancetta or guanciale. Pour the egg and cheese mixture over the pasta. Toss quickly to create a creamy sauce.",
      },
      {
        step: "Step 05",
        description:
          "Serve your Spaghetti Carbonara immediately, garnished with extra cheese and black pepper. Enjoy!",
      },
    ],
    author: "Sam Smith",
    rate: 4,
  },
];

const homeRecipesSuggestions = [
  {
    id: 101,
    title: "Creamy Spaghetti",
    img: "/assets/images/cuiche.jpg",
    img_vertical: "/assets/images/spaghettiInspiration.jpg",
    short_description: "Rich, creamy pasta delightfully satisfying!",
    long_description:
      "Savor a classic Italian dish with creamy spaghetti, where a luscious, velvety sauce melds perfectly with perfectly cooked pasta, creating culinary delight..",
    categories: ["Dinner"],
    ingredients: [
      { item: "Spaghetti", amount: "8 oz." },
      { item: "Butter", amount: "4 tbsp" },
      { item: "Garlic cloves", amount: "3-4, minced" },
      { item: "Parmesan cheese", amount: "1/2 cup" },
      { item: "Fresh parsley", amount: "2 tbsp, chopped" },
    ],
    preparation: [
      {
        step: "Boil the spaghetti",
        description:
          "In a large pot, boil water and add salt. Cook the spaghetti until al dente, then drain.",
      },
      {
        step: "Sauté the garlic",
        description:
          "In a skillet, melt the butter over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant.",
      },
      {
        step: "Combine pasta and garlic butter",
        description:
          "Toss the drained spaghetti into the garlic butter, ensuring it's well coated.",
      },
      {
        step: "Add Parmesan and parsley",
        description:
          "Sprinkle grated Parmesan cheese and chopped fresh parsley over the pasta. Toss to combine.",
      },
    ],
    author: "Rafealla Toros",
    rate: 5,
  },
  {
    id: 102,
    title: "Fancy Minestrone",
    img: "/assets/images/minestrone.jpg",
    img_vertical: "/assets/images/creamySpaghettiVerticaal.jpg",
    short_description: "All green and fresh soup",
    long_description:
      "This simple 'cacio e pepe' recipe is super minimalist and easy to make. All you need is really just good cheese and pepper.",
    categories: ["Wine"],
    ingredients: [
      { item: "pasta spaghetti", amount: "6 oz." },
      { item: "unsalted butter", amount: "1 tsp" },
      { item: "fresh black peper", amount: "1 tsp" },
      { item: "grated Pecorino cheese", amount: "1/3 cup " },
      { item: "grated Grana Podano cheese", amount: "1 cup" },
    ],
    preparation: [
      {
        step: " Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add pasta to cook. Stir occassionally until the pasta gets tender. Before draining pasta reserve 3/4 cup of pasta cooking water",
      },
      {
        step: "Step 02",
        description:
          "On a medium large skillet melt butter. Once the butter is melted, keep the temperature on medium heat and add pepper, cook until the pepper is toasted.",
      },
      {
        step: "Steep 03",
        description:
          "Add the reserved pasta water to the skillet and let simmer. Add pasta and all grated cheese. Stir and toss until cheese melts and create creamy texture. Then the pasta is ready to serve.",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
  {
    id: 103,
    title: "Fancy Minestrone",
    img: "/assets/images/minestrone.jpg",
    img_vertical: "/assets/images/creamySpaghettiVerticaal.jpg",
    short_description: "All green and fresh soup",
    long_description:
      "This simple 'cacio e pepe' recipe is super minimalist and easy to make. All you need is really just good cheese and pepper.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "pasta spaghetti", amount: "6 oz." },
      { item: "unsalted butter", amount: "1 tsp" },
      { item: "fresh black peper", amount: "1 tsp" },
      { item: "grated Pecorino cheese", amount: "1/3 cup " },
      { item: "grated Grana Podano cheese", amount: "1 cup" },
    ],
    preparation: [
      {
        step: " Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add pasta to cook. Stir occassionally until the pasta gets tender. Before draining pasta reserve 3/4 cup of pasta cooking water",
      },
      {
        step: "Step 02",
        description:
          "On a medium large skillet melt butter. Once the butter is melted, keep the temperature on medium heat and add pepper, cook until the pepper is toasted.",
      },
      {
        step: "Steep 03",
        description:
          "Add the reserved pasta water to the skillet and let simmer. Add pasta and all grated cheese. Stir and toss until cheese melts and create creamy texture. Then the pasta is ready to serve.",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
];

const homeRecipes = [
  {
    id: 1001,
    title: "Spring Quiche with vegetables",
    img: "/assets/images/cuiche.jpg",
    img_vertical: "/assets/images/creamySpaghettiVerticaal.jpg",
    short_description: "Gluten free with potati crust!",
    long_description:
      "This simple 'cacio e pepe' recipe is super minimalist and easy to make. All you need is really just good cheese and pepper.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "pasta spaghetti", amount: "6 oz." },
      { item: "unsalted butter", amount: "1 tsp" },
      { item: "fresh black peper", amount: "1 tsp" },
      { item: "grated Pecorino cheese", amount: "1/3 cup " },
      { item: "grated Grana Podano cheese", amount: "1 cup" },
    ],
    preparation: [
      {
        step: " Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add pasta to cook. Stir occassionally until the pasta gets tender. Before draining pasta reserve 3/4 cup of pasta cooking water",
      },
      {
        step: "Step 02",
        description:
          "On a medium large skillet melt butter. Once the butter is melted, keep the temperature on medium heat and add pepper, cook until the pepper is toasted.",
      },
      {
        step: "Steep 03",
        description:
          "Add the reserved pasta water to the skillet and let simmer. Add pasta and all grated cheese. Stir and toss until cheese melts and create creamy texture. Then the pasta is ready to serve.",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
  {
    id: 1002,
    title: "Fancy Minestrone",
    img: "/assets/images/minestrone.jpg",
    img_vertical: "/assets/images/creamySpaghettiVerticaal.jpg",
    short_description: "All green and fresh soup",
    long_description:
      "This simple 'cacio e pepe' recipe is super minimalist and easy to make. All you need is really just good cheese and pepper.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "pasta spaghetti", amount: "6 oz." },
      { item: "unsalted butter", amount: "1 tsp" },
      { item: "fresh black peper", amount: "1 tsp" },
      { item: "grated Pecorino cheese", amount: "1/3 cup " },
      { item: "grated Grana Podano cheese", amount: "1 cup" },
    ],
    preparation: [
      {
        step: " Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add pasta to cook. Stir occassionally until the pasta gets tender. Before draining pasta reserve 3/4 cup of pasta cooking water",
      },
      {
        step: "Step 02",
        description:
          "On a medium large skillet melt butter. Once the butter is melted, keep the temperature on medium heat and add pepper, cook until the pepper is toasted.",
      },
      {
        step: "Steep 03",
        description:
          "Add the reserved pasta water to the skillet and let simmer. Add pasta and all grated cheese. Stir and toss until cheese melts and create creamy texture. Then the pasta is ready to serve.",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
  {
    id: 1003,
    title: "Lemon Chicken",
    img: "/assets/images/cuiche.jpg",
    img_vertical: "/assets/images/lemonChicken.jpg",
    short_description: "Easy one-pot meal for dinners.",
    long_description:
      "This simple 'cacio e pepe' recipe is super minimalist and easy to make. All you need is really just good cheese and pepper.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "pasta spaghetti", amount: "6 oz." },
      { item: "unsalted butter", amount: "1 tsp" },
      { item: "fresh black peper", amount: "1 tsp" },
      { item: "grated Pecorino cheese", amount: "1/3 cup " },
      { item: "grated Grana Podano cheese", amount: "1 cup" },
    ],
    preparation: [
      {
        step: " Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add pasta to cook. Stir occassionally until the pasta gets tender. Before draining pasta reserve 3/4 cup of pasta cooking water",
      },
      {
        step: "Step 02",
        description:
          "On a medium large skillet melt butter. Once the butter is melted, keep the temperature on medium heat and add pepper, cook until the pepper is toasted.",
      },
      {
        step: "Steep 03",
        description:
          "Add the reserved pasta water to the skillet and let simmer. Add pasta and all grated cheese. Stir and toss until cheese melts and create creamy texture. Then the pasta is ready to serve.",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
  {
    id: 1004,
    title: "Poke Bowl",
    img: "/assets/images/pokeBowl.jpg",
    img_vertical: "/assets/images/creamySpaghettiVerticaal.jpg",
    short_description: "Fancy flavours and textures you need to try.",
    long_description:
      "This simple 'cacio e pepe' recipe is super minimalist and easy to make. All you need is really just good cheese and pepper.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "pasta spaghetti", amount: "6 oz." },
      { item: "unsalted butter", amount: "1 tsp" },
      { item: "fresh black peper", amount: "1 tsp" },
      { item: "grated Pecorino cheese", amount: "1/3 cup " },
      { item: "grated Grana Podano cheese", amount: "1 cup" },
    ],
    preparation: [
      {
        step: " Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add pasta to cook. Stir occassionally until the pasta gets tender. Before draining pasta reserve 3/4 cup of pasta cooking water",
      },
      {
        step: "Step 02",
        description:
          "On a medium large skillet melt butter. Once the butter is melted, keep the temperature on medium heat and add pepper, cook until the pepper is toasted.",
      },
      {
        step: "Steep 03",
        description:
          "Add the reserved pasta water to the skillet and let simmer. Add pasta and all grated cheese. Stir and toss until cheese melts and create creamy texture. Then the pasta is ready to serve.",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
  {
    id: 1005,
    title: "Creamy Tortellini",
    img: "/assets/images/tortellini.jpg",
    img_vertical: "/assets/images/creamySpaghettiVerticaal.jpg",
    short_description: "Springy, light and yer comforting bowl of pasta.",
    long_description:
      "This simple 'cacio e pepe' recipe is super minimalist and easy to make. All you need is really just good cheese and pepper.",
    categories: ["Dinner", "Pasta"],
    ingredients: [
      { item: "pasta spaghetti", amount: "6 oz." },
      { item: "unsalted butter", amount: "1 tsp" },
      { item: "fresh black peper", amount: "1 tsp" },
      { item: "grated Pecorino cheese", amount: "1/3 cup " },
      { item: "grated Grana Podano cheese", amount: "1 cup" },
    ],
    preparation: [
      {
        step: " Step 01",
        description:
          "Boil water in a pot. Season it with salt and then add pasta to cook. Stir occassionally until the pasta gets tender. Before draining pasta reserve 3/4 cup of pasta cooking water",
      },
      {
        step: "Step 02",
        description:
          "On a medium large skillet melt butter. Once the butter is melted, keep the temperature on medium heat and add pepper, cook until the pepper is toasted.",
      },
      {
        step: "Steep 03",
        description:
          "Add the reserved pasta water to the skillet and let simmer. Add pasta and all grated cheese. Stir and toss until cheese melts and create creamy texture. Then the pasta is ready to serve.",
      },
    ],
    author: "Rafealla Toros",
    rate: 4,
  },
];

const categoryOptions = [
  { label: "Breakfast", value: "breakfast", img: "assets/icons/breakfast.svg" },
  { label: "Baking", value: "baking", img: "assets/icons/baking.svg" },
  { label: "Cocktails", value: "cocktails", img: "assets/icons/cocktails.svg" },
  { label: "Pasta", value: "pasta", img: "assets/icons/pasta.svg" },
  { label: "Dinner", value: "dinner", img: "assets/icons/hamburger.svg" },
  { label: "Wines", value: "wines", img: "assets/icons/wines.svg" },
  { label: "Snack", value: "snack", img: "assets/icons/snack.svg" },
  { label: "Tips", value: "tips", img: "assets/icons/tips.svg" },
];

export const recipesService = { recipes, homeRecipes, categoryOptions };
