import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png?url";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pt-[max(5rem,env(safe-area-inset-top,0px))] sm:px-6 sm:pb-10 sm:pt-24"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden>
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
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[100px] sm:h-[36rem] sm:w-[36rem]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 flex justify-center sm:mb-8"
        >
          <img
            src={logo}
            alt="Thaar Ata"
            className="h-20 w-auto object-contain drop-shadow-[0_0_28px_hsla(45,100%,50%,0.35)] sm:h-24 md:h-28"
            decoding="async"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
        >
          <h1 className="font-display text-[clamp(2.75rem,11vw,7.5rem)] font-bold leading-[1.02] gold-text-gradient mb-4 sm:mb-5">
            Thaar Ata
          </h1>
          <p className="font-body mx-auto mb-6 max-w-xl text-base text-muted-foreground sm:mb-8 sm:text-lg md:text-xl leading-relaxed">
            Crafting immersive spaces, one pixel at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
        >
          <p className="font-body mx-auto mb-9 flex max-w-lg flex-row flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm tracking-wide text-primary/90 sm:mb-11 sm:gap-x-3 sm:text-base md:text-lg md:tracking-widest">
            <span className="font-semibold">3D Visualizer</span>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <span className="font-semibold">Architect</span>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <span className="font-semibold">Designer</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
          className="flex w-full max-w-md flex-col gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="gold-gradient min-h-[48px] w-full text-primary-foreground font-body text-sm tracking-wider shadow-lg shadow-primary/20 hover:opacity-90 sm:w-auto sm:px-9"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-[48px] w-full border-primary/40 bg-background/40 text-primary font-body text-sm tracking-wider backdrop-blur-sm hover:bg-primary/10 sm:w-auto sm:px-9"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 sm:bottom-8"
        aria-label="Scroll to skills"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-primary/45" size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
