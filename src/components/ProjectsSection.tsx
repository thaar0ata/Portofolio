import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 section-fade">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center sm:mb-14 md:mb-16"
        >
          <p className="font-body mb-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Portfolio
          </p>
          <h2 className="font-display px-2 text-3xl font-bold gold-text-gradient sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm text-muted-foreground sm:text-base">
            Selected interior visualizations—open each project for the full set and notes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.07, 0.35), duration: 0.45 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border/80 bg-card/70 shadow-sm shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} — preview`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <span className="font-body text-xs font-medium uppercase tracking-[0.18em] text-primary">
                      View project
                    </span>
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full gold-gradient text-primary-foreground shadow-md transition-transform duration-300 group-hover:translate-x-0.5">
                      <ChevronRight size={18} aria-hidden />
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-display mb-2 text-lg font-semibold leading-snug text-primary transition-colors sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 font-body text-sm leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="font-body text-xs border-primary/25 text-primary/85"
                      >
                        {tool}
                      </Badge>
                    ))}
                    {project.images.length > 1 && (
                      <Badge
                        variant="outline"
                        className="font-body text-xs border-border text-muted-foreground"
                      >
                        {project.images.length} views
                      </Badge>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
