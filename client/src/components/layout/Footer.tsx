import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm font-medium">
              © 2025 Rahul Reddy Chidipudi
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Crafted with passion & precision
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/chidipudi45"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-primary hover:border-primary/20 hover:shadow-md transition-all duration-300"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rahulchidipudi45@gmail.com"
              className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-primary hover:border-primary/20 hover:shadow-md transition-all duration-300"
              data-testid="link-footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-primary hover:border-primary/20 hover:shadow-md transition-all duration-300"
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
