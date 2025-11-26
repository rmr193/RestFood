import { motion } from "framer-motion";
import { useFoods } from "@/contexts/FoodContext";
import FoodCard from "@/components/FoodCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Menu() {
  const { foods } = useFoods();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(foods.map((f) => f.category)))];
  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((f) => f.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-foreground">Our Menu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our extensive collection of delicious dishes
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFoods.map((food, index) => (
            <FoodCard key={food.id} food={food} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
