import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Linkedin, Mail, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import professionalPhoto from "@assets/cc46671400a562d45b067f7349ea28a4_nw_1767967101245.png";

const roles = ["Software Engineer", "Backend Developer", "Cloud Architect", "AWS Specialist"];

function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-gradient inline-block"
    >
      {roles[currentIndex]}
    </motion.span>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 40,
      y: (e.clientY - rect.top - rect.height / 2) / 40,
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden hero-gradient"
    >
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-600">Available for opportunities</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900"
            >
              Hi, I'm
              <br />
              <span className="text-gradient">Rahul Reddy</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-gray-600 mb-8 h-12"
            >
              <AnimatedText />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-lg max-w-xl mb-10 leading-relaxed"
            >
              Building scalable backend systems with AWS, Java, and TypeScript. 
              Turning complex requirements into elegant, fault-tolerant architectures 
              that perform under real-world pressure.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full shadow-lg glow group" data-testid="button-get-in-touch">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="rounded-full border-gray-200 hover:bg-gray-50 hover:border-primary/30" data-testid="button-view-work">
                  View My Work
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <a href="https://linkedin.com/in/chidipudi45" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-primary hover:border-primary/20 hover:shadow-md transition-all duration-300" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:rahulchidipudi45@gmail.com" className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-primary hover:border-primary/20 hover:shadow-md transition-all duration-300" data-testid="link-email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:8565269115" className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-primary hover:border-primary/20 hover:shadow-md transition-all duration-300" data-testid="link-phone">
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-full blur-3xl animate-pulse-slow" />
              
              <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-white" />
                </motion.div>
                
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src={professionalPhoto} 
                    alt="Rahul Reddy Chidipudi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">AWS Certified</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-medium text-gray-700">1+ Years Exp.</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="/about">
          <motion.div 
            className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-medium mb-2">Explore More</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
