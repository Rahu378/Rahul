import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rahulchidipudi45@gmail.com",
    href: "mailto:rahulchidipudi45@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(856) 526-9115",
    href: "tel:8565269115"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chidipudi45",
    href: "https://linkedin.com/in/chidipudi45"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States (Open to Relocation)",
    href: null
  }
];

export default function Contact() {
  return (
    <PageWrapper className="noise">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <span className="font-mono text-primary text-sm tracking-wider">05. CONTACT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
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
                    className="glass rounded-2xl p-6 flex items-center gap-5 hover-lift group block"
                    data-testid={`link-contact-${item.label.toLowerCase()}`}
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass rounded-2xl p-6 flex items-center gap-5">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
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
            className="glass rounded-2xl p-10 text-center"
          >
            <div className="max-w-xl mx-auto">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Ready to Start a Conversation?</h2>
              <p className="text-muted-foreground mb-8">
                I'm excited about opportunities in backend development, cloud architecture, 
                and distributed systems. Let's discuss how I can contribute to your team!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:rahulchidipudi45@gmail.com">
                  <Button size="lg" className="glow group" data-testid="button-send-email">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </a>
                <a href="tel:8565269115">
                  <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" data-testid="button-call-now">
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
            <p className="text-muted-foreground text-sm">
              Prefer a formal approach? Feel free to{" "}
              <a href="#" className="text-primary hover:underline">download my resume</a>{" "}
              for more details about my experience and qualifications.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
