import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Animated Orbs - Larger for big screens */}
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] 2xl:w-[1000px] 2xl:h-[1000px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 70%)",
          top: "-15%",
          left: "-15%",
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[900px] xl:h-[900px] 2xl:w-[1100px] 2xl:h-[1100px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          top: "30%",
          right: "-20%",
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[700px] xl:h-[700px] 2xl:w-[850px] 2xl:h-[850px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)",
          bottom: "-10%",
          left: "15%",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px] 2xl:w-[800px] 2xl:h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
          top: "15%",
          left: "45%",
        }}
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 80, -20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional orb for extra large screens */}
      <motion.div
        className="hidden xl:block absolute w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[750px] 2xl:h-[750px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          bottom: "20%",
          right: "10%",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles - More and larger on big screens */}
      <div className="particles">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full"
            style={{
              background: `linear-gradient(135deg, rgba(99, 102, 241, ${0.4 + Math.random() * 0.3}), rgba(168, 85, 247, ${0.3 + Math.random() * 0.3}))`,
              left: `${5 + (i * 6)}%`,
              top: `${5 + (i * 5.5)}%`,
            }}
            animate={{
              y: [0, -120, -60, 0],
              x: [0, 40, -30, 0],
              opacity: [0.4, 0.8, 0.5, 0.4],
              scale: [1, 1.3, 0.7, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
}
