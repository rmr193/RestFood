import { useParams, useNavigate } from "react-router-dom";
import { useFoods } from "@/contexts/FoodContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { foods } = useFoods();
  
  const food = foods.find((f) => f.id === Number(id));

  if (!food) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Food not found</h2>
        <Button onClick={() => navigate("/menu")}>Back to Menu</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-8 hover:bg-transparent hover:text-primary p-0" 
          onClick={() => navigate("/menu")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Menu
        </Button>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={food.image} 
              alt={food.name} 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                {food.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6 text-foreground">{food.name}</h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {food.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Details</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Calories: {food.calories} kcal</p>
                  <p>Preparation: {food.preparationTime}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ingredients</h3>
                <p className="text-sm text-muted-foreground">
                  {food.ingredients.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/contact")}>
                Book Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
