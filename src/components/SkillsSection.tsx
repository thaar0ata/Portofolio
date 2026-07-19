import { motion } from "framer-motion";
import { Monitor, Ruler } from "lucide-react";

const mainSkills = [
  {
    name: "3ds Max",
    icon: Monitor,
    summary: "Visualization & presentation imagery",
    description:
      "Full-scene interior and architectural renders with controlled lighting, materials, and cameras tailored for design review, marketing, and client sign-off—not generic stock looks.",
    highlights: [
      "Materials, lighting, and cameras tuned per shot",
      "Interior-focused spaces: kitchens, living areas, bedrooms",
      "Output ready for web, print, and pitch decks",
    ],
  },
  {
    name: "AutoCAD",
    icon: Ruler,
    summary: "Precise drafting & drawing sets",
    description:
      "Clean 2D documentation and technical drawings with consistent layers, dimensions, and scales—so layouts stay legible for consultants, contractors, and permit packages when needed.",
    highlights: [
      "Plans, elevations, and detail development",
      "Layering and annotation aligned to project standards",
      "Clear handoff from concept to technical linework",
    ],
  },
];

const focusAreas = [
  "Interior visualization",
  "Lighting & mood",
  "Material storytelling",
  "Spatial composition",
  "Client-ready stills",
  "Technical drafting",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <p className="font-body mb-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Expertise
          </p>
          <h2 className="font-display mb-4 text-3xl font-bold gold-text-gradient sm:text-4xl md:text-5xl">
            Skills & Tools
          </h2>
          <p className="font-body text-sm leading-relaxed text-muted-foreground md:text-base">
            High-end interior renders and accurate technical drawings—built to communicate design intent clearly.
          </p>
        </motion.div>

        <div className="mx-auto mb-12 grid max-w-5xl gap-5 md:mb-14 md:grid-cols-2 md:gap-7">
          {mainSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-border/80 bg-card/70 p-5 text-left shadow-sm shadow-black/10 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/10 sm:p-8 shimmer"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl gold-gradient shadow-md shadow-primary/15 transition-all group-hover:animate-glow sm:h-14 sm:w-14">
                <skill.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-display mb-1 text-xl font-semibold text-primary sm:text-2xl">
                {skill.name}
              </h3>
              <p className="font-body mb-4 text-xs uppercase tracking-[0.18em] text-primary/75">
                {skill.summary}
              </p>
              <p className="font-body mb-6 text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
              <ul className="space-y-2.5 border-t border-border/80 pt-5">
                {skill.highlights.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 font-body text-sm leading-snug text-card-foreground/90"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full gold-gradient" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-5 text-center font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Focus areas
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="font-body rounded-full border border-border/80 bg-card/40 px-4 py-2 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/45 hover:text-primary sm:px-5 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
