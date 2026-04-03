import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import NotFound from "@/pages/NotFound";
import { getProjectBySlug } from "@/data/projects";

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

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-24 sm:pt-28 pb-[max(4rem,env(safe-area-inset-bottom,0px))] sm:pb-[max(5rem,env(safe-area-inset-bottom,0px))]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#projects"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg py-2 pr-3 pl-2 -ml-2 font-body text-sm text-muted-foreground hover:text-primary active:text-primary transition-colors mb-8 sm:mb-10"
            >
              <ArrowLeft size={18} aria-hidden className="flex-shrink-0" />
              Back to portfolio
            </Link>

            <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Project
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold gold-text-gradient mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="font-body text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="flex gap-2 flex-wrap mb-10 sm:mb-12">
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

            <div className="space-y-4 mb-10 sm:mb-14 font-body text-sm sm:text-base text-card-foreground/95 leading-relaxed">
              {paragraphs.map((block, i) => (
                <p key={i}>{block}</p>
              ))}
            </div>
          </motion.div>

          <div className="space-y-5 sm:space-y-8">
            {project.images.map((src, i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="overflow-hidden rounded-lg border border-border bg-card sm:rounded-xl"
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
        </div>
      </article>
    </main>
  );
};

export default ProjectDetail;
