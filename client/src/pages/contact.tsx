import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle, Sparkles } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rahulchidipudi45@gmail.com",
    href: "mailto:rahulchidipudi45@gmail.com",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(856) 526-9115",
    href: "tel:8565269115",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chidipudi45",
    href: "https://linkedin.com/in/chidipudi45",
    color: "from-sky-500 to-blue-600"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States (Open to Relocation)",
    href: null,
    color: "from-emerald-500 to-teal-600"
  }
];

export default function Contact() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            I'm currently open to new opportunities and would love to hear from you. 
            Whether you have a question, a project idea, or just want to say hello—
            my inbox is always open.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card rounded-2xl p-6 flex items-center gap-5 hover-lift group block"
                    data-testid={`link-contact-${item.label.toLowerCase()}`}
                  >
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 font-medium">{item.label}</p>
                      <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card rounded-2xl p-6 flex items-center gap-5">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 font-medium">{item.label}</p>
                      <p className="font-semibold text-gray-900">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-10" />
            <div className="glass-card rounded-3xl p-10 text-center relative">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start a Conversation?</h2>
              <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                I'm excited about opportunities in backend development, cloud architecture, 
                and distributed systems. Let's discuss how I can contribute to your team!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:rahulchidipudi45@gmail.com">
                  <Button size="lg" className="rounded-full shadow-lg glow group" data-testid="button-send-email">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </a>
                <a href="tel:8565269115">
                  <Button size="lg" variant="outline" className="rounded-full border-gray-200 bg-white/50 backdrop-blur-sm hover:bg-white" data-testid="button-call-now">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-sm">
              Prefer a formal approach? Feel free to{" "}
              <a href="#" className="text-primary hover:underline font-medium">download my resume</a>{" "}
              for more details about my experience and qualifications.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
