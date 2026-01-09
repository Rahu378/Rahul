import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Linkedin, Mail, Phone, Sparkles, Star, Code2, Cloud, Database } from "lucide-react";
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

const techBadges = [
  { icon: Code2, label: "Java & TypeScript" },
  { icon: Cloud, label: "AWS Certified" },
  { icon: Database, label: "PostgreSQL" },
];

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
      className="min-h-screen relative overflow-hidden"
    >
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
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-white/50"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
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
              className="text-gray-500 text-lg max-w-xl mb-8 leading-relaxed"
            >
              Building scalable backend systems with AWS, Java, and TypeScript. 
              Turning complex requirements into elegant, fault-tolerant architectures 
              that perform under real-world pressure.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {techBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm shadow-sm border border-gray-100"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-gray-700">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full shadow-lg glow group" data-testid="button-get-in-touch">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="rounded-full border-gray-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-primary/30" data-testid="button-view-work">
                  View My Work
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3"
            >
              <a href="https://linkedin.com/in/chidipudi45" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-white/50 text-gray-500 hover:text-primary hover:scale-110 transition-all duration-300" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:rahulchidipudi45@gmail.com" className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-white/50 text-gray-500 hover:text-primary hover:scale-110 transition-all duration-300" data-testid="link-email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:8565269115" className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-white/50 text-gray-500 hover:text-primary hover:scale-110 transition-all duration-300" data-testid="link-phone">
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
              {/* Glowing background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl animate-pulse-slow" />
              
              <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
                {/* Rotating gradient ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full p-1"
                  style={{
                    background: "linear-gradient(135deg, hsl(250 84% 54%), hsl(280 68% 60%), hsl(340 68% 60%), hsl(250 84% 54%))",
                    backgroundSize: "300% 300%",
                  }}
                  animate={{ 
                    rotate: 360,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    backgroundPosition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-50" />
                </motion.div>
                
                {/* Photo */}
                <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src={professionalPhoto} 
                    alt="Rahul Reddy Chidipudi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -top-2 -right-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-white/50"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-semibold text-gray-700">AWS Certified</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -bottom-2 -left-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-white/50"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-semibold text-gray-700">1+ Years Exp.</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-3 border border-white/50"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold text-gray-700">Backend Pro</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
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
