import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat } from "lucide-react";

interface Chef {
  id: number;
  name: string;
  role: string;
  tagline: string;
  image: string;
}

const chefs: Chef[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Head Chef",
    tagline: "Specialist in Italian Cuisine",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400",
  },
  {
    id: 2,
    name: "Maria Gomez",
    role: "Pastry Chef",
    tagline: "Master of Desserts & Baking",
    image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=400",
  },
  {
    id: 3,
    name: "Liam Chen",
    role: "Sous Chef",
    tagline: "Expert in Asian Fusion",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400",
  },
  {
    id: 4,
    name: "Sophie Laurent",
    role: "Grill Master",
    tagline: "Perfecting Every Flame",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
  },
];

export default function Chefs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">
              Our Expert Chefs
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented culinary artists behind your favorite dishes,
            bringing years of experience and passion to every plate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="overflow-hidden group cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {chef.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-2">
                    {chef.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{chef.tagline}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
