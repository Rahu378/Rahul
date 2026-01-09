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
    <PageWrapper className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <FolderOpen className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Things I've <span className="text-gradient">Built</span>
          </h1>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden hover-lift shadow-sm border border-gray-100"
            >
              <div className="grid lg:grid-cols-[1fr_280px]">
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-primary text-sm font-semibold mb-1">{project.subtitle}</p>
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-primary/10 text-primary border-0 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                      data-testid={`link-project-github-${index}`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                      data-testid={`link-project-demo-${index}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-10 flex flex-col justify-center border-l border-gray-100">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-6">
                    <TrendingUp className="w-4 h-4" />
                    <span className="uppercase tracking-wider">Key Metrics</span>
                  </div>
                  <div className="space-y-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-500">{metric.label}</div>
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
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors shadow-lg"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View GitHub Profile</span>
          </a>
        </motion.div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
