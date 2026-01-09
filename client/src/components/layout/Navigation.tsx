import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-sm py-3 border-b border-gray-100" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <motion.span 
              className="text-2xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              data-testid="link-logo"
            >
              <span className="text-gradient">RC</span>
              <span className="text-primary">.</span>
            </motion.span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.path}>
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-4 py-2 text-sm font-medium cursor-pointer rounded-full transition-all duration-300 ${
                    location === item.path
                      ? "text-white bg-primary shadow-md"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }`}
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="rounded-full shadow-md glow" data-testid="button-resume">
              Download CV
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white" />
            <div className="relative h-full flex flex-col items-center justify-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.path}>
                    <span
                      className={`text-3xl font-bold cursor-pointer transition-colors ${
                        location === item.path ? "text-primary" : "text-gray-800 hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
