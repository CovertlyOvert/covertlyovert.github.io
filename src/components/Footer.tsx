
import { Github, Link } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-sepia bg-sepia-light/40 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-playfair font-bold text-amber-dark mb-2">Ankit's Lab</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              A personal archive of projects, thoughts, and experiments. Developed with care using
              vintage development tools from the modern era.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/ankit"
                target="_blank"
                rel="noreferrer"
                className="text-amber hover:text-amber-dark transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-amber hover:text-amber-dark transition-colors"
                aria-label="Personal website"
              >
                <Link size={20} />
              </a>
            </div>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ankit's Lab. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
