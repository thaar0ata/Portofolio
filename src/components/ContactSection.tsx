import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "thaarata5@gmail.com",
    href: "mailto:thaarata5@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+963 995 559 254",
    href: "tel:+963995559254",
    icon: Phone,
  },
  {
    label: "Location",
    value: null as string | null,
    href: null as string | null,
    icon: MapPin,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 section-fade">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="font-body mb-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl font-bold gold-text-gradient sm:text-4xl md:text-5xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm text-muted-foreground">
            Available for visualization and design work—reach out by email or phone.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const inner = (
              <>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gold-gradient shadow-lg shadow-primary/15 transition-transform duration-300 group-hover:scale-105 sm:mb-5">
                  <Icon className="text-primary-foreground" size={22} strokeWidth={1.75} />
                </div>
                <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </p>
                {item.value ? (
                  <p className="font-body text-sm text-primary sm:text-base break-all">
                    {item.value}
                  </p>
                ) : (
                  <p className="font-body text-sm leading-relaxed text-card-foreground sm:text-base">
                    Syria<span className="text-muted-foreground"> / </span>Remotely
                  </p>
                )}
              </>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex h-full min-h-[160px] flex-col items-center justify-center rounded-2xl border border-border/80 bg-card/70 p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 sm:min-h-[190px] sm:p-8"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex h-full min-h-[160px] flex-col items-center justify-center rounded-2xl border border-border/80 bg-card/70 p-6 text-center transition-all duration-300 hover:border-primary/35 sm:min-h-[190px] sm:p-8">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto mt-14 border-t border-border/70 px-4 pt-8 sm:mt-16 sm:px-6 sm:pt-10">
        <p className="pb-[env(safe-area-inset-bottom,0px)] text-center font-body text-xs text-muted-foreground sm:text-sm">
          © 2026 Thaar Ata.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
