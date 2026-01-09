import { motion } from "framer-motion";
import { User, Award, Code, Briefcase, GraduationCap, MapPin } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import professionalPhoto from "@assets/cc46671400a562d45b067f7349ea28a4_nw_1767967101245.png";

const stats = [
  { value: "1+", label: "Years Experience", icon: Briefcase },
  { value: "50+", label: "LeetCode Problems", icon: Code },
  { value: "AWS", label: "Certified Developer", icon: Award },
  { value: "3+", label: "Major Projects", icon: GraduationCap },
];

const education = {
  school: "Rowan University",
  degree: "Bachelor of Science in Computer Science",
  location: "New Jersey, USA",
  date: "Graduated Dec 2024",
  scholarship: "Merit Based International Credit Transfer Scholarship",
  courses: [
    "Database Systems", "Cloud Computing", "Distributed Systems",
    "Data Structures & Algorithms", "System Design", "Software Engineering",
    "Microservices Architecture", "AI", "Machine Learning"
  ]
};

const certifications = [
  "AWS Certified Developer – Associate",
  "Machine Learning Specialization – Stanford & DeepLearning.AI",
  "IBM Enterprise Design Thinking Practitioner",
  "Google Data Analytics Foundations",
  "Google Project Management Foundations"
];

export default function About() {
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
              <User className="w-6 h-6 text-primary" />
            </div>
            <span className="font-mono text-primary text-sm tracking-wider">01. ABOUT ME</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            The Story Behind <span className="text-gradient">The Code</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a software engineer with about <span className="text-primary font-medium">1 year of hands-on experience</span> building 
              and running backend services on AWS with Java, TypeScript, PostgreSQL, DynamoDB, and RDS.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I tend to live close to the data—poking at schemas, query plans, and cache layers 
              until reads and writes behave under real traffic. I'm usually the one wiring things 
              into <span className="text-primary font-medium">API Gateway, Lambda, S3, and CloudWatch</span>, 
              adding alarms, dashboards, and runbooks so on-call feels like engineering, not guessing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have a habit of taking fuzzy requirements and weird edge cases, turning them 
              into clearer APIs and fault-tolerant flows. I lean on tools like GitHub Copilot 
              and Cursor, but never trust them more than careful code review.
            </p>

            <div className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span>United States (Open to Relocation)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
              <div className="relative glass rounded-2xl p-2 overflow-hidden">
                <img 
                  src={professionalPhoto} 
                  alt="Rahul Reddy Chidipudi"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="glass rounded-xl p-6 text-center hover-lift card-3d"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-2">{education.school}</h3>
              <p className="text-primary font-medium mb-2">{education.degree}</p>
              <p className="text-muted-foreground text-sm mb-4">{education.location} • {education.date}</p>
              <Badge className="bg-primary/10 text-primary border-0 mb-6">
                {education.scholarship}
              </Badge>
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground font-medium mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <Badge key={course} variant="secondary" className="bg-muted/50 text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="glass rounded-xl p-5 flex items-center gap-4 hover-lift group"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
