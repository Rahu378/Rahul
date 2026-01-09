import { motion } from "framer-motion";
import { Code2, Cloud, Database, Server, Wrench, MessageSquare, Container, Eye } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-amber-500 to-orange-500",
    skills: ["Java", "Python", "TypeScript", "SQL"]
  },
  {
    title: "AWS Services",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: ["EC2", "S3", "RDS", "DynamoDB", "Lambda", "API Gateway", "CloudWatch", "SQS", "SNS", "Glue"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-yellow-500 to-amber-500",
    skills: ["PostgreSQL", "MySQL", "Amazon RDS", "Amazon DynamoDB", "Redis"]
  },
  {
    title: "Backend Frameworks",
    icon: Server,
    color: "from-amber-400 to-yellow-500",
    skills: ["Spring Boot", "Node.js", "Express"]
  },
  {
    title: "APIs & Protocols",
    icon: MessageSquare,
    color: "from-orange-400 to-amber-500",
    skills: ["REST", "gRPC", "OpenAPI / Swagger"]
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    color: "from-yellow-400 to-orange-400",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman"]
  },
  {
    title: "Build & CI/CD",
    icon: Container,
    color: "from-amber-500 to-yellow-500",
    skills: ["Maven", "Gradle", "npm", "GitHub Actions", "Docker"]
  },
  {
    title: "Observability",
    icon: Eye,
    color: "from-orange-500 to-amber-500",
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
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <span className="font-mono text-primary text-sm tracking-wider">03. SKILLS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
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
              className="glass rounded-2xl p-6 hover-lift card-3d group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-white/5 hover:bg-primary/20 transition-colors text-xs"
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
          className="glass rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            AI Productivity Tools
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
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
                className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-semibold text-primary mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
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
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full glass">
            <span className="text-muted-foreground">Always learning, always growing</span>
            <span className="text-2xl">🚀</span>
          </div>
        </motion.div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
