import { motion } from "framer-motion";
import { Code2, Cloud, Database, Server, Wrench, MessageSquare, Container, Eye, Cpu } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-violet-500 to-purple-600",
    skills: ["Java", "Python", "TypeScript", "SQL"]
  },
  {
    title: "AWS Services",
    icon: Cloud,
    color: "from-blue-500 to-indigo-600",
    skills: ["EC2", "S3", "RDS", "DynamoDB", "Lambda", "API Gateway", "CloudWatch", "SQS", "SNS", "Glue"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-emerald-500 to-teal-600",
    skills: ["PostgreSQL", "MySQL", "Amazon RDS", "Amazon DynamoDB", "Redis"]
  },
  {
    title: "Backend Frameworks",
    icon: Server,
    color: "from-orange-500 to-red-500",
    skills: ["Spring Boot", "Node.js", "Express"]
  },
  {
    title: "APIs & Protocols",
    icon: MessageSquare,
    color: "from-pink-500 to-rose-600",
    skills: ["REST", "gRPC", "OpenAPI / Swagger"]
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    color: "from-amber-500 to-orange-500",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman"]
  },
  {
    title: "Build & CI/CD",
    icon: Container,
    color: "from-cyan-500 to-blue-600",
    skills: ["Maven", "Gradle", "npm", "GitHub Actions", "Docker"]
  },
  {
    title: "Observability",
    icon: Eye,
    color: "from-fuchsia-500 to-purple-600",
    skills: ["Amazon CloudWatch", "Prometheus", "Grafana"]
  }
];

const aiTools = [
  { name: "GitHub Copilot", description: "AI-powered code completion" },
  { name: "Amazon CodeWhisperer", description: "AWS-integrated AI assistant" },
  { name: "Cursor", description: "AI-first code editor" }
];

export default function Skills() {
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
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Skills</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Technologies I <span className="text-gradient">Master</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 hover-lift card-3d shadow-sm border border-gray-100 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gray-50 text-gray-600 border-0 hover:bg-primary/10 hover:text-primary transition-colors text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            AI Productivity Tools
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            I leverage AI-powered tools to accelerate development while maintaining code quality 
            through careful review. These tools augment my workflow without replacing critical thinking.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-primary mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-500">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
            <span className="text-gray-600 font-medium">Always learning, always growing</span>
            <span className="text-2xl">🚀</span>
          </div>
        </motion.div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
