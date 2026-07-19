import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import NotFound from "@/pages/NotFound";
import { getProjectBySlug, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <NotFound />;
  }

  const paragraphs = project.longDescription
    .trim()
    .split(/\n\n+/)
    .filter(Boolean);

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-24 sm:pt-28 pb-[max(4rem,env(safe-area-inset-bottom,0px))] sm:pb-[max(5rem,env(safe-area-inset-bottom,0px))]">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#projects"
              className="mb-8 inline-flex min-h-[44px] items-center gap-2 rounded-lg py-2 pl-2 pr-3 -ml-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary sm:mb-10"
            >
              <ArrowLeft size={18} aria-hidden className="flex-shrink-0" />
              Back to portfolio
            </Link>

            <div className="mb-8 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg shadow-black/20 sm:mb-10">
              <img
                src={project.images[0]}
                alt={`${project.title} — hero`}
                className="aspect-[16/10] w-full object-cover object-center sm:aspect-[21/10]"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            </div>

            <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Project
            </p>
            <h1 className="mb-4 font-display text-3xl font-bold leading-tight gold-text-gradient sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mb-6 max-w-3xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.shortDescription}
            </p>
            <div className="mb-8 flex flex-wrap gap-2 sm:mb-10">
              {project.tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="font-body text-xs border-primary/30 text-primary/85"
                >
                  {tool}
                </Badge>
              ))}
            </div>

            <div className="mb-10 max-w-3xl space-y-4 font-body text-sm leading-relaxed text-card-foreground/95 sm:mb-14 sm:text-base">
              {paragraphs.map((block, i) => (
                <p key={i}>{block}</p>
              ))}
            </div>
          </motion.div>

          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-xl font-semibold text-primary sm:text-2xl">
              Gallery
            </h2>
            <p className="font-body text-xs text-muted-foreground">
              {project.images.length} views
            </p>
          </div>

          <div className="space-y-5 sm:space-y-7">
            {project.images.map((src, i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.25), duration: 0.4 }}
                className="overflow-hidden rounded-xl border border-border/80 bg-card sm:rounded-2xl"
              >
                <img
                  src={src}
                  alt={`${project.title} — view ${i + 1}`}
                  className="h-auto w-full max-w-full object-cover object-center"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </motion.figure>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-border/70 pt-12 sm:mt-20 sm:pt-14">
              <p className="mb-6 font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
                More work
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/projects/${item.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border/80 bg-card/70 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="font-display text-base font-semibold text-primary sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 font-body text-sm text-muted-foreground">
                        {item.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};

export default ProjectDetail;
