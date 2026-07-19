import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png?url";

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const onHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHome]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        scrolled || isOpen
          ? "border-b border-border/60 bg-background/90 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3">
        <Link
          to="/#hero"
          className="flex min-h-[48px] items-center gap-2.5 -ml-1 rounded-lg pl-1 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          aria-label="Thaar Ata — Home"
        >

          <span className="font-display text-base font-bold gold-text-gradient sm:text-lg">
            Thaar Ata
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("/#", "");
            const isActive = onHome && activeSection === sectionId;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`relative font-body inline-flex items-center px-3 py-2 text-xs tracking-[0.16em] uppercase transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px gold-gradient"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-primary active:bg-primary/10"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto border-t border-border/60 bg-background/98 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => {
                const sectionId = item.href.replace("/#", "");
                const isActive = onHome && activeSection === sectionId;
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-body flex min-h-[48px] items-center justify-center rounded-xl text-sm tracking-widest uppercase transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground active:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
