
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
    { title: "Now", path: "/now" },
  ];

  return (
    <header className="border-b border-sepia sticky top-0 z-10 bg-sepia-light/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center">
              <span className="font-playfair text-white font-bold text-lg">A</span>
            </div>
            <span className="font-playfair text-lg md:text-xl font-bold text-amber-dark">Ankit's Lab</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-amber-dark"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="typewriter hover:text-amber transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 bg-sepia-light border-b border-sepia shadow-md transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
        )}
      >
        <ul className="py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block py-2 typewriter hover:text-amber transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
