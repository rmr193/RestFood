import { Link } from "react-router-dom";
import { Utensils, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <footer className="bg-muted/50 border-t border-border mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                <Utensils className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold text-foreground">RestFood</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Experience the best culinary delights with our premium food delivery service.
                            Fresh ingredients, expert chefs, and fast delivery.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Admin Portal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>123 Foodie Street, Culinary District, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>hello@restfood.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Subscribe to our newsletter for updates and exclusive offers.
                        </p>
                        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-background"
                            />
                            <Button type="submit" className="w-full">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        © {new Date().getFullYear()} RestFood. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
