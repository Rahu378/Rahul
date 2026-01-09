import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2025 Rahul Reddy Chidipudi
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">
              Built with passion & precision
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/chidipudi45"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rahulchidipudi45@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="link-footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="link-footer-github"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
