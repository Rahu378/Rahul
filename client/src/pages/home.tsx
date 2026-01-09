import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, 
  ChevronDown, Terminal, Cloud, Database, Code2, Server,
  Award, GraduationCap, Briefcase, Zap, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roles = [
  "Software Development Engineer",
  "Backend Developer",
  "Cloud Architect",
  "Systems Designer"
];

function TypewriterText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <span className="text-primary glow-text">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-mono text-primary text-lg font-semibold" data-testid="link-home">
          &lt;RC /&gt;
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              data-testid={`link-nav-${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="glow" data-testid="button-resume">
            Resume
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-primary text-sm">Hello World, I'm</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">Rahul Reddy</span>
            <br />
            <span className="text-foreground">Chidipudi</span>
          </h1>

          <div className="text-2xl md:text-3xl font-medium mb-8 h-12">
            <TypewriterText />
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Building and running backend services on AWS with Java, TypeScript, 
            PostgreSQL, and DynamoDB. Turning fuzzy requirements into fault-tolerant 
            systems that scale.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="glow group" data-testid="button-contact">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" data-testid="button-projects">
              View Projects
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/chidipudi45"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rahulchidipudi45@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:8565269115"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a software engineer with about 1 year of hands-on experience building 
                and running backend services on <span className="text-primary">AWS</span> with 
                Java, TypeScript, PostgreSQL, DynamoDB, and RDS.
              </p>
              <p>
                I tend to live close to the data, poking at schemas, query plans, and cache 
                layers until reads and writes behave under real traffic. Usually the one 
                wiring things into <span className="text-primary">API Gateway, Lambda, S3, and CloudWatch</span>, 
                adding alarms, dashboards, and runbooks so on-call feels like engineering, not guessing.
              </p>
              <p>
                I have a habit of taking fuzzy requirements and weird edge cases, turning them 
                into clearer APIs and fault-tolerant flows, then leaning on tools like GitHub 
                Copilot and Cursor without ever trusting them more than careful code review.
              </p>
            </div>

            <div className="relative">
              <div className="glass rounded-xl p-8 hover-lift">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary mb-2">1+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">LeetCode Problems</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Major Projects</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary mb-2">AWS</div>
                    <div className="text-sm text-muted-foreground">Certified</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Appworks",
    location: "Pittsburgh, Pennsylvania",
    period: "Mar 2025 – Dec 2025",
    highlights: [
      "Owned a backend service from design to prod, wiring it into API Gateway, Lambda, and DynamoDB",
      "Worked with product and ops to clarify edge cases, baking them into RDS schema changes and API contracts",
      "Chased slow queries on RDS, adding indexes and read patterns so peak traffic felt less terrifying",
      "Set up CloudWatch alarms and dashboards, tuned thresholds until on-call was about real issues",
      "Broke chunky data processing into async pieces using Lambda and S3 for cheap retries"
    ]
  },
  {
    title: "Junior Software Engineer Intern",
    company: "Wessco",
    location: "Pittsburgh, Pennsylvania",
    period: "June 2024 – Sep 2024",
    highlights: [
      "Normalized PostgreSQL tables for a SaaS backend, eliminated duplicate rows and fixed relationships",
      "Used EXPLAIN ANALYZE, tcpdump, netstat to chase down slow requests in distributed setup",
      "Wrote AWS Lambda functions in Python for recurring data jobs and ETL workflows",
      "Got hands-on with AWS RDS read replicas, DynamoDB, S3 hooks and CloudWatch"
    ]
  },
  {
    title: "Summer Research Analyst",
    company: "Corefront Technologies",
    location: "Bengalore, India",
    period: "May 2022 – Aug 2022",
    highlights: [
      "Analyzed enterprise infra and cloud migration plans, identified cost and complexity issues",
      "Deep dive into database metrics and node-level logs, found query path chokepoints",
      "Created internal notes on AWS cost patterns, DB scaling tricks, and distributed systems checks"
    ]
  }
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-[250px_1fr] gap-8">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-4 text-left whitespace-nowrap lg:whitespace-normal font-mono text-sm transition-all ${
                    activeIndex === index
                      ? "text-primary bg-primary/10 border-b-2 lg:border-b-0 lg:border-l-2 border-primary -mb-px lg:mb-0 lg:-ml-px"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                  data-testid={`button-experience-${index}`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[400px]"
              >
                <h3 className="text-xl font-semibold mb-1">
                  {experiences[activeIndex].title}{" "}
                  <span className="text-primary">@ {experiences[activeIndex].company}</span>
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 font-mono">
                  <span>{experiences[activeIndex].period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {experiences[activeIndex].location}
                  </span>
                </div>
                <ul className="space-y-4">
                  {experiences[activeIndex].highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "TypeScript", "SQL"]
  },
  {
    title: "AWS Services",
    icon: Cloud,
    skills: ["EC2", "S3", "RDS", "DynamoDB", "Lambda", "API Gateway", "CloudWatch", "SQS", "SNS"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Amazon RDS", "DynamoDB", "Redis"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Node.js", "Express", "REST", "gRPC", "OpenAPI"]
  }
];

function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Scalable Task Management System",
    description: "Engineered a PostgreSQL-based distributed system with Redis caching, handling 100+ concurrent users with <200ms latency. Achieved 99.5% uptime with CloudWatch monitoring and fault-tolerance features.",
    tags: ["PostgreSQL", "Redis", "CloudWatch", "Distributed Systems"],
    featured: true
  },
  {
    title: "Database Optimization for E-Commerce",
    description: "Refactored database schema and optimized queries with indexing and caching, reducing latency by 35% for a high-traffic e-commerce platform.",
    tags: ["PostgreSQL", "Query Optimization", "Caching", "CloudWatch"],
    featured: true
  },
  {
    title: "Financial Document Query System with RAG",
    description: "Built a cloud-native backend using AWS Lambda, Kendra, and S3 for retrieval-augmented generation on financial documents. Improved retrieval accuracy by 25%.",
    tags: ["AWS Lambda", "Kendra", "S3", "LLM", "RAG"],
    featured: true
  }
];

function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-8 hover-lift group"
                data-testid={`card-project-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Terminal className="w-5 h-5 text-primary" />
                      <span className="font-mono text-primary text-sm">Featured Project</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-project-github-${index}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-project-external-${index}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const certifications = [
  "AWS Certified Developer – Associate",
  "Machine Learning Specialization – Stanford Online & DeepLearning.AI",
  "IBM Enterprise Design Thinking Practitioner",
  "Google Data Analytics Foundations",
  "Google Project Management Foundations"
];

function Education() {
  return (
    <section className="py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-2">Rowan University</h3>
                <p className="text-primary font-medium mb-2">Bachelor of Science in Computer Science</p>
                <p className="text-muted-foreground text-sm mb-4">New Jersey, USA • Graduated Dec 2024</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  Merit Based International Credit Transfer Scholarship
                </Badge>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium mb-2">Relevant Coursework:</p>
                  <p className="text-sm text-muted-foreground">
                    Database Systems, Cloud Computing, Distributed Systems, Data Structures & Algorithms, 
                    System Design, Software Engineering, Microservices Architecture, AI, Machine Learning
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-lg p-4 flex items-center gap-4 hover-lift"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="font-mono text-primary text-sm mb-4 block">05. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently open to new opportunities and would love to hear from you. 
            Whether you have a question, a project idea, or just want to connect — 
            my inbox is always open.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:rahulchidipudi45@gmail.com">
              <Button size="lg" className="glow group" data-testid="button-say-hello">
                <Mail className="w-4 h-4 mr-2" />
                Say Hello
              </Button>
            </a>
            <a href="tel:8565269115">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" data-testid="button-call">
                <Phone className="w-4 h-4 mr-2" />
                (856) 526-9115
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by Rahul Reddy Chidipudi
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/chidipudi45"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rahulchidipudi45@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="noise">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
