import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FoodProvider } from "@/contexts/FoodContext";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FoodDetails = lazy(() => import("./pages/FoodDetails"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <FoodProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:id" element={<FoodDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </FoodProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
