import { motion } from "framer-motion";
import { useFoods } from "@/contexts/FoodContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Food } from "@/data/foodData";

export default function Admin() {
  const { foods, addFood, updateFood, deleteFood } = useFoods();
  const [editingFood, setEditingFood] = useState<Food | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingFood) {
      updateFood(editingFood.id, formData);
      toast.success("Food item updated successfully!");
    } else {
      addFood(formData);
      toast.success("Food item added successfully!");
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      price: 0,
      description: "",
      image: "",
      category: "",
    });
    setEditingFood(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (food: Food) => {
    setEditingFood(food);
    setFormData({
      name: food.name,
      price: food.price,
      description: food.description,
      image: food.image,
      category: food.category,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    deleteFood(id);
    toast.success("Food item deleted successfully!");
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold text-foreground">
              Admin Panel
            </h1>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => {
                    resetForm();
                    setIsDialogOpen(true);
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Food
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingFood ? "Edit Food Item" : "Add New Food Item"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Food Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: parseFloat(e.target.value),
                      })
                    }
                    required
                  />
                  <Input
                    placeholder="Category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    required
                  />
                  <Input
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    required
                  />
                  <Textarea
                    placeholder="Description"
                    rows={3}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      {editingFood ? "Update" : "Add"} Food
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={resetForm}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4">
            {foods.map((food, index) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground">
                          {food.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {food.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-primary font-semibold">
                            ${food.price.toFixed(2)}
                          </span>
                          <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                            {food.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleEdit(food)}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => handleDelete(food.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
