import { motion } from "framer-motion";
import { FolderOpen, Github, ExternalLink, Database, Brain, Zap, TrendingUp } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Scalable Task Management System",
    subtitle: "Capstone Project",
    description: "Engineered a PostgreSQL-based distributed system with Redis caching, handling over 100 concurrent users while keeping latency under 200ms during peak times. Set up monitoring with CloudWatch and custom dashboards to maintain 99.5% uptime. Designed fault-tolerance features like automatic recovery and graceful degradation.",
    tags: ["PostgreSQL", "Redis", "CloudWatch", "Distributed Systems", "Fault Tolerance"],
    icon: Database,
    color: "from-violet-500 to-purple-600",
    metrics: [
      { label: "Concurrent Users", value: "100+" },
      { label: "Latency", value: "<200ms" },
      { label: "Uptime", value: "99.5%" }
    ]
  },
  {
    title: "Database Optimization for E-Commerce",
    subtitle: "Performance Engineering",
    description: "Refactored the database schema and optimized queries with indexing and caching strategies, resulting in a 35% reduction in latency for a high-traffic e-commerce platform. Implemented performance monitoring using CloudWatch to catch issues early and enable continuous optimization as traffic grew.",
    tags: ["PostgreSQL", "Query Optimization", "Indexing", "Caching", "CloudWatch"],
    icon: Zap,
    color: "from-orange-500 to-red-500",
    metrics: [
      { label: "Latency Reduction", value: "35%" },
      { label: "Query Optimization", value: "100+" },
      { label: "Traffic Handling", value: "High" }
    ]
  },
  {
    title: "Financial Document Query System with RAG",
    subtitle: "AI/ML Integration",
    description: "Built a cloud-native backend using AWS Lambda, Kendra, and S3, creating a retrieval-augmented generation pipeline for financial documents. Improved retrieval accuracy by 25% through prompt engineering and fine-tuning of multiple LLM models including GPT-3.5-turbo and LLaMA 2. Automated financial metric calculations for enhanced decision-making.",
    tags: ["AWS Lambda", "Amazon Kendra", "S3", "RAG", "LLM", "GPT-3.5", "LLaMA 2"],
    icon: Brain,
    color: "from-emerald-500 to-teal-600",
    metrics: [
      { label: "Accuracy Improvement", value: "25%" },
      { label: "LLM Models", value: "Multiple" },
      { label: "Architecture", value: "Cloud-Native" }
    ]
  }
];

export default function Projects() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 lg:py-20 xl:py-24 relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 xl:mb-20"
        >
          <div className="flex items-center gap-4 mb-4 lg:mb-6">
            <div className="p-2 lg:p-3 xl:p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
              <FolderOpen className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold text-primary tracking-wider uppercase">Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900">
            Things I've <span className="text-gradient">Built</span>
          </h1>
        </motion.div>

        <div className="space-y-6 lg:space-y-8 xl:space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card rounded-2xl lg:rounded-3xl overflow-hidden hover-lift"
            >
              <div className="grid lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] 2xl:grid-cols-[1fr_380px]">
                <div className="p-6 lg:p-8 xl:p-10 2xl:p-12">
                  <div className="flex items-start gap-4 mb-6 lg:mb-8">
                    <div className={`p-3 lg:p-4 xl:p-5 rounded-xl lg:rounded-2xl bg-gradient-to-br ${project.color} shadow-lg`}>
                      <project.icon className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-primary text-sm lg:text-base xl:text-lg font-semibold mb-1">{project.subtitle}</p>
                      <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed mb-6 lg:mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-primary/10 text-primary border-0 text-xs lg:text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-6 lg:gap-8">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm lg:text-base xl:text-lg font-medium"
                      data-testid={`link-project-github-${index}`}
                    >
                      <Github className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm lg:text-base xl:text-lg font-medium"
                      data-testid={`link-project-demo-${index}`}
                    >
                      <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-6 lg:p-8 xl:p-10 2xl:p-12 flex flex-col justify-center border-l border-gray-100/50">
                  <div className="flex items-center gap-2 text-sm lg:text-base font-medium text-gray-400 mb-6 lg:mb-8">
                    <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="uppercase tracking-wider">Key Metrics</span>
                  </div>
                  <div className="space-y-6 lg:space-y-8">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-sm lg:text-base xl:text-lg text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 lg:mt-16 xl:mt-20 text-center"
        >
          <p className="text-gray-500 text-base lg:text-lg xl:text-xl mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 lg:gap-3 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors shadow-lg text-base lg:text-lg xl:text-xl"
          >
            <Github className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            <span className="font-medium">View GitHub Profile</span>
          </a>
        </motion.div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
