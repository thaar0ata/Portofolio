import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const onHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!onHome) return;

      const sections = navItems.map((item) => item.href.replace("/#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHome]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#hero"
          className="font-display text-xl font-bold gold-text-gradient sm:text-2xl min-h-[44px] min-w-[44px] flex items-center -ml-2 pl-2"
        >
          Portfolio
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = onHome && activeSection === sectionId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-primary active:bg-primary/10"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto bg-background/98 backdrop-blur-md border-t border-border"
          >
            <ul className="flex flex-col items-stretch px-4 py-4 gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-body flex min-h-[48px] items-center justify-center rounded-lg text-sm tracking-widest uppercase text-muted-foreground active:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
