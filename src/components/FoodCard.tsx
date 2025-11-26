import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Food } from "@/data/foodData";
import { useNavigate } from "react-router-dom";

interface FoodCardProps {
  food: Food;
  index?: number;
}

export default function FoodCard({ food, index = 0 }: FoodCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/menu/${food.id}`)}
    >
      <Card className="overflow-hidden group cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        <div className="relative overflow-hidden h-48">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {food.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {food.description}
          </p>
          <div className="mt-3">
            <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
              {food.category}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
