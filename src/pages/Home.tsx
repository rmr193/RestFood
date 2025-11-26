import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FoodCard from "@/components/FoodCard";
import Chefs from "@/components/Chefs";
import Gallery from "@/components/Gallery";
import { useFoods } from "@/contexts/FoodContext";
import { Leaf } from "lucide-react";

export default function Home() {
  const { foods } = useFoods();
  const featuredFoods = foods.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                Our Special Dishes
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of signature dishes,
              crafted with the finest ingredients and prepared with love by our
              expert chefs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFoods.map((food, index) => (
              <FoodCard key={food.id} food={food} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Chefs />
      <Gallery />
    </div>
  );
}
