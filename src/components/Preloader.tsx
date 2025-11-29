import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

export default function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
            <div className="relative flex flex-col items-center gap-4">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 bg-primary rounded-full flex items-center justify-center"
                    >
                        <Utensils className="w-10 h-10 text-primary-foreground" />
                    </motion.div>

                    {/* Pulse effect */}
                    <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                    />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-foreground tracking-wider"
                >
                    RestFood
                </motion.div>
            </div>
        </motion.div>
    );
}
