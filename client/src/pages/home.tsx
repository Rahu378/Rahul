import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import professionalPhoto from "@assets/cc46671400a562d45b067f7349ea28a4_nw_1767967101245.png";

const roles = ["Software Engineer", "Backend Developer", "Cloud Architect", "AWS Specialist"];

function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useState(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-primary inline-block"
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
      x: (e.clientX - rect.left - rect.width / 2) / 30,
      y: (e.clientY - rect.top - rect.height / 2) / 30,
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden grid-pattern noise"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-mono text-primary text-sm tracking-widest uppercase">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="text-gradient">Rahul Reddy</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-light text-muted-foreground mb-8 h-12"
            >
              <AnimatedText />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed"
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
                <Button size="lg" className="glow group" data-testid="button-get-in-touch">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50" data-testid="button-view-work">
                  View My Work
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6"
            >
              <a href="https://linkedin.com/in/chidipudi45" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:rahulchidipudi45@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg" data-testid="link-email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:8565269115" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg" data-testid="link-phone">
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
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-full blur-3xl animate-pulse-slow" />
              
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-pulse-slow" />
                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src={professionalPhoto} 
                    alt="Rahul Reddy Chidipudi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary/20"
                style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
              />
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
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-mono mb-2">Explore More</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
