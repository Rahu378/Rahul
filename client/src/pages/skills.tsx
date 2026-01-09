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
              <Cpu className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold text-primary tracking-wider uppercase">Skills</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900">
            Technologies I <span className="text-gradient">Master</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 mb-12 lg:mb-16 xl:mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl lg:rounded-3xl p-5 lg:p-6 xl:p-8 hover-lift card-3d group"
            >
              <div className={`inline-flex p-3 lg:p-4 xl:p-5 rounded-xl lg:rounded-2xl bg-gradient-to-br ${category.color} mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <category.icon className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg lg:text-xl xl:text-2xl text-gray-900 mb-4 lg:mb-5">{category.title}</h3>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gray-50 text-gray-600 border-0 hover:bg-primary/10 hover:text-primary transition-colors text-xs lg:text-sm xl:text-base px-2 lg:px-3 py-1"
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
          className="glass-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12"
        >
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-3">
            <div className="w-1.5 lg:w-2 h-8 lg:h-10 xl:h-12 bg-gradient-to-b from-primary to-accent rounded-full" />
            AI Productivity Tools
          </h2>
          <p className="text-gray-600 text-base lg:text-lg xl:text-xl mb-6 lg:mb-8 max-w-3xl">
            I leverage AI-powered tools to accelerate development while maintaining code quality 
            through careful review. These tools augment my workflow without replacing critical thinking.
          </p>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 lg:p-6 xl:p-8 shadow-sm border border-white/50 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-primary text-base lg:text-lg xl:text-xl mb-2">{tool.name}</h3>
                <p className="text-sm lg:text-base xl:text-lg text-gray-500">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 lg:mt-16 xl:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 lg:px-8 xl:px-10 py-4 lg:py-5 xl:py-6 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-white/50">
            <span className="text-gray-600 font-medium text-base lg:text-lg xl:text-xl">Always learning, always growing</span>
            <span className="text-2xl lg:text-3xl xl:text-4xl">🚀</span>
          </div>
        </motion.div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
