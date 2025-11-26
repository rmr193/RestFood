import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useFoods } from "@/contexts/FoodContext";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const { foods } = useFoods();
  const navigate = useNavigate();
  const galleryFoods = foods.slice(0, 8); // Display first 8 foods

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImageIcon className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">
              Our Food Gallery
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual feast of our culinary creations. Every dish is crafted with
            care and presented with style.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryFoods.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
              onClick={() => navigate(`/menu/${food.id}`)}
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-primary-foreground font-semibold">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
