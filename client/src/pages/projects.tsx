import { motion } from "framer-motion";
import { FolderOpen, Github, ExternalLink, Database, Cloud, Brain, Zap } from "lucide-react";
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
    color: "from-amber-500 to-orange-500",
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
    color: "from-yellow-500 to-amber-500",
    metrics: [
      { label: "Accuracy Improvement", value: "25%" },
      { label: "LLM Models", value: "Multiple" },
      { label: "Architecture", value: "Cloud-Native" }
    ]
  }
];

export default function Projects() {
  return (
    <PageWrapper className="noise">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <FolderOpen className="w-6 h-6 text-primary" />
            </div>
            <span className="font-mono text-primary text-sm tracking-wider">04. PROJECTS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Things I've <span className="text-gradient">Built</span>
          </h1>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden hover-lift"
            >
              <div className="grid lg:grid-cols-[1fr_300px]">
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-primary text-sm font-mono mb-1">{project.subtitle}</p>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
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

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid={`link-project-github-${index}`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid={`link-project-demo-${index}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                <div className="bg-white/5 p-8 lg:p-10 flex flex-col justify-center">
                  <h4 className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Key Metrics</h4>
                  <div className="space-y-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
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
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-primary/10 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View GitHub Profile</span>
          </a>
        </motion.div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
