import { createContext, useContext, useState, ReactNode } from "react";
import { Food, initialFoods } from "@/data/foodData";

interface FoodContextType {
  foods: Food[];
  addFood: (food: Omit<Food, "id">) => void;
  updateFood: (id: number, food: Partial<Food>) => void;
  deleteFood: (id: number) => void;
}

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export function FoodProvider({ children }: { children: ReactNode }) {
  const [foods, setFoods] = useState<Food[]>(initialFoods);

  const addFood = (food: Omit<Food, "id">) => {
    const newFood = {
      ...food,
      id: Math.max(...foods.map((f) => f.id), 0) + 1,
    };
    setFoods((prev) => [...prev, newFood]);
  };

  const updateFood = (id: number, updatedFood: Partial<Food>) => {
    setFoods((prev) =>
      prev.map((food) => (food.id === id ? { ...food, ...updatedFood } : food))
    );
  };

  const deleteFood = (id: number) => {
    setFoods((prev) => prev.filter((food) => food.id !== id));
  };

  return (
    <FoodContext.Provider value={{ foods, addFood, updateFood, deleteFood }}>
      {children}
    </FoodContext.Provider>
  );
}

export function useFoods() {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error("useFoods must be used within a FoodProvider");
  }
  return context;
}
