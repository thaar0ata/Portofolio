import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Projects
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold gold-text-gradient px-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group block bg-card border border-border rounded-xl sm:rounded-lg overflow-hidden active:border-primary/50 hover:border-primary/40 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {/* Mobile: one large preview — multi-column strip is too cramped on narrow screens */}
                <div className="relative isolate aspect-[4/3] w-full overflow-hidden bg-muted md:hidden">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} — preview`}
                    className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-500 group-active:scale-[1.02]"
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between gap-3">
                    <span className="font-body text-xs font-medium uppercase tracking-wider text-primary">
                      View project
                    </span>
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full gold-gradient text-primary-foreground shadow-md">
                      <ChevronRight size={18} aria-hidden />
                    </span>
                  </div>
                </div>

                {/* md+: collage strip */}
                <div className="relative hidden h-52 min-h-0 w-full md:block lg:h-56">
                  <div
                    className={`grid h-full min-h-0 w-full gap-0.5 sm:gap-1 ${
                      project.images.length === 2 ? "grid-cols-2" : "grid-cols-3"
                    }`}
                  >
                    {project.images.map((src, j) => (
                      <div
                        key={`${project.slug}-${j}`}
                        className="relative min-h-0 min-w-0 overflow-hidden"
                      >
                        <img
                          src={src}
                          alt={`${project.title} — ${j + 1}`}
                          className="h-full w-full min-h-0 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          loading={i < 3 ? "eager" : "lazy"}
                          decoding="async"
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-70 pointer-events-none" />
                  <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:flex pointer-events-none">
                    <span className="inline-flex items-center gap-2 rounded-full gold-gradient px-4 py-2 font-body text-xs uppercase tracking-wider text-primary-foreground shadow-lg">
                      View project
                      <ChevronRight size={16} aria-hidden />
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-primary mb-2 group-hover:text-primary/90 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-4 sm:line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="text-xs font-body border-primary/30 text-primary/80"
                      >
                        {tool}
                      </Badge>
                    ))}
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
