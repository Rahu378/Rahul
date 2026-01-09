import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Calendar, Zap, ChevronRight, Building2 } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Appworks",
    location: "Pittsburgh, Pennsylvania",
    period: "Mar 2025 – Dec 2025",
    type: "Full-time",
    highlights: [
      "Owned a backend service from design to prod, wiring it into API Gateway, Lambda, and DynamoDB so other teams could hit it safely",
      "Worked with product and ops folks to clarify weird edge cases, then baked those into RDS schema changes and API contracts",
      "Spent time chasing slow queries on RDS, adding better indexes and read patterns so peak traffic felt less terrifying",
      "Hooked services up to CloudWatch alarms and dashboards, tuned thresholds until on-call was about real issues",
      "Broke chunky data processing jobs into smaller async pieces using Lambda and S3 so retries were cheap",
      "Did regular code reviews for Java and TypeScript services, pointing out test gaps and risky error handling",
      "Documented deployment runbooks and common failure modes for EC2 and API Gateway stack"
    ]
  },
  {
    title: "Junior Software Engineer Intern",
    company: "Wessco",
    location: "Pittsburgh, Pennsylvania",
    period: "June 2024 – Sep 2024",
    type: "Internship",
    highlights: [
      "Normalized PostgreSQL tables for a SaaS backend, cut out duplicate rows and made relationships make sense",
      "Used EXPLAIN ANALYZE, tcpdump, netstat, traceroute and logs to chase down slow requests in distributed setup",
      "Wrote AWS Lambda functions in Python for recurring data jobs and ETL workflows",
      "Got hands-on with AWS RDS read replicas, DynamoDB, S3 hooks and CloudWatch graphs",
      "Participated in code reviews, cleaned up PRs and kept notes on gRPC patterns",
      "Joined senior engineers for architecture chats about scaling, sketched changes that made the system less fragile"
    ]
  },
  {
    title: "Summer Research Analyst",
    company: "Corefront Technologies",
    location: "Bangalore, India",
    period: "May 2022 – Aug 2022",
    type: "Internship",
    highlights: [
      "Analyzed enterprise infra diagrams and cloud migration plans, pointed out cost and complexity issues",
      "Deep dive into database metrics and node-level logs for large distributed setup, found query path chokepoints",
      "Created internal notes on AWS cost patterns, DB scaling tricks, and distributed systems sanity checks",
      "Translated low-level performance and architecture findings into slides for client executives",
      "Researched newer cloud services and architectures, fed insights into internal tech briefs"
    ]
  }
];

const leadership = [
  {
    title: "Tech Coordinator",
    org: "ACM – Rowan University",
    period: "May 2024 – Oct 2024",
    description: "Increased event attendance by 30% through targeted social media campaigns. Led technical workshops on distributed systems, cloud architecture, and AWS services for 100+ students."
  },
  {
    title: "Graphic Designer & Event Coordinator",
    org: "Google Developer Student Club - LPU",
    period: "Feb 2022 – Nov 2022",
    description: "Designed visual materials for 15+ technical workshops on cloud technologies. Coordinated events engaging 100+ participants."
  },
  {
    title: "Public Speaker & Event Coordinator",
    org: "Orator Student Club - LPU",
    period: "Dec 2021 – Jun 2022",
    description: "Coordinated 10+ technical events and guest lectures. Delivered presentations on Leadership Principles and their application in building scalable systems."
  }
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Experience</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Where I've <span className="text-gradient">Worked</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-4 text-left rounded-xl font-medium transition-all duration-300 whitespace-nowrap lg:whitespace-normal border ${
                  activeIndex === index
                    ? "bg-primary text-white shadow-lg border-primary glow"
                    : "bg-white/80 backdrop-blur-sm text-gray-600 hover:text-primary hover:border-primary/30 border-white/50 shadow-sm"
                }`}
                data-testid={`button-experience-${index}`}
              >
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{exp.company}</div>
                    <div className="text-xs opacity-70">{exp.type}</div>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {experiences[activeIndex].title}
                  </h3>
                  <p className="text-xl text-primary font-semibold">
                    @ {experiences[activeIndex].company}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    {experiences[activeIndex].period}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    {experiences[activeIndex].location}
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {experiences[activeIndex].highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-4 text-gray-600"
                  >
                    <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <ChevronRight className="w-6 h-6 text-primary" />
            Leadership Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-lift"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{item.org}</p>
                <p className="text-gray-400 text-xs mb-4">{item.period}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
