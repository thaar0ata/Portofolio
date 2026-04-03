import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pb-[max(2rem,env(safe-area-inset-bottom,0px))] pt-[max(4.5rem,env(safe-area-inset-top,0px))] sm:px-6 sm:pb-8 sm:pt-20"
    >
      {/* Geometric wireframe background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(45,100%,50%)" strokeWidth="0.5" />
            </pattern>
            <pattern id="diag" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 120 120 M 120 0 L 0 120" fill="none" stroke="hsl(45,100%,50%)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      {/* Radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-body text-xs tracking-[0.35em] text-muted-foreground sm:text-sm sm:tracking-[0.4em] mb-3 sm:mb-4">
            Portfolio
          </p>
          <h1 className="font-display text-[clamp(2.75rem,12vw,9rem)] font-bold leading-[1.05] gold-text-gradient mb-5 sm:mb-6">
            Thaar Ata
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="font-body mx-auto mb-8 flex max-w-md flex-col items-center gap-1.5 text-base text-muted-foreground sm:mb-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-0 sm:text-lg md:text-xl md:tracking-widest">
            <span className="text-primary">3D Visualizer</span>
            <span className="hidden text-border sm:inline" aria-hidden>
              •
            </span>
            <span className="text-primary">Architect</span>
            <span className="hidden text-border sm:inline" aria-hidden>
              •
            </span>
            <span className="text-primary">Designer</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex w-full max-w-md flex-col gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="gold-gradient min-h-[48px] w-full text-primary-foreground font-body text-sm tracking-wider hover:opacity-90 sm:w-auto sm:px-8"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-[48px] w-full border-primary/50 text-primary font-body text-sm tracking-wider hover:bg-primary/10 sm:w-auto sm:px-8"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 sm:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-primary/50" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
