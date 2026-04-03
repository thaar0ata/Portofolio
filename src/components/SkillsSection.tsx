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
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Expertise
          </p>
          <h2 className="font-display mb-4 text-3xl font-bold gold-text-gradient sm:text-4xl md:text-5xl">
            Skills & Tools
          </h2>
          <p className="font-body text-sm leading-relaxed text-muted-foreground md:text-base">
            Work spans high-end interior renders and accurate technical drawings—built to communicate design intent clearly to clients and collaborators.
          </p>
        </motion.div>

        <div className="mx-auto mb-12 grid max-w-5xl gap-6 md:mb-14 md:grid-cols-2 md:gap-8">
          {mainSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative rounded-xl border border-border bg-card p-5 text-left transition-all duration-500 hover:border-primary/50 sm:rounded-lg sm:p-8 shimmer"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg gold-gradient transition-all group-hover:animate-glow sm:h-14 sm:w-14">
                <skill.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary sm:text-2xl mb-1">
                {skill.name}
              </h3>
              <p className="font-body mb-4 text-xs uppercase tracking-[0.2em] text-primary/80">
                {skill.summary}
              </p>
              <p className="font-body mb-6 text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
              <ul className="space-y-2.5 border-t border-border pt-6">
                {skill.highlights.map((line) => (
                  <li
                    key={line}
                    className="font-body text-sm text-card-foreground/90 flex gap-3 leading-snug"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-body text-center text-xs tracking-[0.25em] uppercase text-muted-foreground mb-5">
            Focus areas
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="font-body rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary sm:px-5 sm:text-sm"
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
