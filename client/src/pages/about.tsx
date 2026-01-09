import { motion } from "framer-motion";
import { User, Award, Code, Briefcase, GraduationCap, MapPin, CheckCircle2 } from "lucide-react";
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
              <User className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold text-primary tracking-wider uppercase">About Me</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900">
            The Story Behind <span className="text-gradient">The Code</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 mb-20 lg:mb-24 xl:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 lg:space-y-8"
          >
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
              I'm a software engineer with about <span className="text-primary font-semibold">1 year of hands-on experience</span> building 
              and running backend services on AWS with Java, TypeScript, PostgreSQL, DynamoDB, and RDS.
            </p>
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
              I tend to live close to the data—poking at schemas, query plans, and cache layers 
              until reads and writes behave under real traffic. I'm usually the one wiring things 
              into <span className="text-primary font-semibold">API Gateway, Lambda, S3, and CloudWatch</span>, 
              adding alarms, dashboards, and runbooks so on-call feels like engineering, not guessing.
            </p>
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
              I have a habit of taking fuzzy requirements and weird edge cases, turning them 
              into clearer APIs and fault-tolerant flows. I lean on tools like GitHub Copilot 
              and Cursor, but never trust them more than careful code review.
            </p>

            <div className="pt-6 lg:pt-8 flex items-center gap-3 text-gray-500">
              <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              <span className="font-medium text-base lg:text-lg xl:text-xl">United States (Open to Relocation)</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 lg:-inset-6 xl:-inset-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-3 lg:p-4 xl:p-5 shadow-xl border border-white/50 overflow-hidden">
                <img 
                  src={professionalPhoto} 
                  alt="Rahul Reddy Chidipudi"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 mb-20 lg:mb-24 xl:mb-28"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="glass-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 text-center hover-lift card-3d"
            >
              <div className="inline-flex p-3 lg:p-4 xl:p-5 rounded-xl lg:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 lg:mb-6">
                <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm lg:text-base xl:text-lg text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-20 lg:mb-24 xl:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-primary" />
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="glass-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-2">{education.school}</h3>
              <p className="text-primary font-medium text-base lg:text-lg xl:text-xl mb-2">{education.degree}</p>
              <p className="text-gray-500 text-sm lg:text-base xl:text-lg mb-4">{education.location} • {education.date}</p>
              <Badge className="bg-primary/10 text-primary border-0 mb-6 text-sm lg:text-base px-3 lg:px-4 py-1 lg:py-2">
                {education.scholarship}
              </Badge>
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm lg:text-base xl:text-lg text-gray-500 font-medium mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {education.courses.map((course) => (
                    <Badge key={course} variant="secondary" className="bg-gray-50 text-gray-600 border-0 text-xs lg:text-sm xl:text-base px-2 lg:px-3 py-1">
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
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <Award className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-primary" />
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">Certifications</h2>
            </div>
            <div className="space-y-3 lg:space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-5 xl:p-6 flex items-center gap-4 hover-lift group"
                >
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base xl:text-lg text-gray-700 group-hover:text-gray-900 transition-colors">{cert}</span>
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
