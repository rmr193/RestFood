export interface Food {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  ingredients: string[];
  calories: number;
  preparationTime: string;
}

export const initialFoods: Food[] = [
  {
    id: 1,
    name: "Beef Burger Meal",
    price: 12.99,
    description: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    category: "Burgers",
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Bun", "Special Sauce"],
    calories: 850,
    preparationTime: "15-20 min"
  },
  {
    id: 2,
    name: "Double Cheese Pizza",
    price: 15.0,
    description: "Wood-fired pizza with double mozzarella and parmesan cheese",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    category: "Pizza",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Parmesan", "Basil"],
    calories: 1200,
    preparationTime: "20-25 min"
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 10.0,
    description: "Fresh romaine lettuce with caesar dressing and croutons",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
    category: "Salads",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing", "Black Pepper"],
    calories: 350,
    preparationTime: "10 min"
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    price: 11.3,
    description: "Classic Italian pasta with creamy sauce and bacon",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
    category: "Pasta",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
    calories: 750,
    preparationTime: "20 min"
  },
  {
    id: 5,
    name: "Classic Burger",
    price: 8.6,
    description: "Simple and delicious beef burger with all the classics",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
    category: "Burgers",
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Bun", "Ketchup", "Mustard"],
    calories: 650,
    preparationTime: "15 min"
  },
  {
    id: 6,
    name: "Grilled Chicken",
    price: 13.5,
    description: "Tender grilled chicken breast with herbs and vegetables",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400",
    category: "Mains",
    ingredients: ["Chicken Breast", "Mixed Herbs", "Lemon", "Olive Oil", "Steamed Vegetables"],
    calories: 450,
    preparationTime: "25 min"
  },
  {
    id: 7,
    name: "Margherita Pizza",
    price: 12.0,
    description: "Traditional pizza with tomato sauce, mozzarella, and basil",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    category: "Pizza",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Fresh Basil", "Olive Oil"],
    calories: 900,
    preparationTime: "20 min"
  },
  {
    id: 8,
    name: "Seafood Pasta",
    price: 16.5,
    description: "Fresh seafood with al dente pasta in white wine sauce",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
    category: "Pasta",
    ingredients: ["Linguine", "Shrimp", "Mussels", "White Wine", "Garlic", "Parsley"],
    calories: 600,
    preparationTime: "25 min"
  }
];
