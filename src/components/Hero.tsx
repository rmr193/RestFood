import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1920",
    "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1920"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            alt="Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Decorative leaf - Adjusted z-index */}
      <motion.div
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 text-primary opacity-20 z-10"
      >
        <Leaf className="w-20 h-20" />
      </motion.div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl z-0" />

      <div className="container relative z-20 mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            BEST QUALITY
            <span className="block text-primary">FOOD</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            Experience the finest culinary delights crafted with passion and
            served with excellence. Every dish tells a story of flavor and
            tradition.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-6 px-8 py-6 text-lg group"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <div className="relative hidden md:flex justify-center items-center">
          {/* Background glow */}
          <div className="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full bg-primary/10 blur-3xl" />

          {/* Decorative circles in background */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-primary/10 blur-xl"
          />

          {/* Curved decorative lines - spanning across section */}
          <svg className="absolute bottom-0 right-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path
              d="M 0 400 Q 300 300, 600 380 T 1200 420"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-primary"
            />
            <path
              d="M 0 480 Q 300 380, 600 460 T 1200 500"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-primary"
            />
          </svg>


        </div>
      </div>
    </section>
  );
}
