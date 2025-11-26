import { motion } from "framer-motion";
import { Award, Clock, Heart, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with passion and care",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in culinary arts",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "All ingredients sourced fresh every morning",
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Our team brings decades of experience",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6 text-center text-foreground">
            About RestFood
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2020, RestFood has been serving the finest culinary
                experiences to our beloved community. Our journey began with a
                simple vision: to create memorable dining experiences through
                exceptional food and warm hospitality.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to uphold our commitment to quality,
                sourcing the freshest ingredients and employing talented chefs
                who pour their heart into every dish they create.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
