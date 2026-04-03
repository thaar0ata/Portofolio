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
    icon: MapPin,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl font-bold gold-text-gradient sm:text-4xl md:text-5xl">
            Contact Me
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {contactItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="group"
              >
                <div className="flex h-full min-h-0 flex-col items-center justify-start rounded-xl border border-border bg-card p-6 text-center transition-colors duration-300 hover:border-primary/35 sm:min-h-[200px] sm:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl gold-gradient shadow-lg shadow-primary/10 transition-shadow group-hover:shadow-primary/20 sm:mb-5 sm:h-12 sm:w-12">
                    <Icon className="text-primary-foreground" size={22} strokeWidth={1.75} />
                  </div>
                  <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground sm:mb-3">
                    {item.label}
                  </p>
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      className="font-body min-h-[44px] flex items-center justify-center text-center text-sm text-primary underline-offset-4 hover:underline active:text-primary/90 sm:text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body min-h-[44px] flex items-center justify-center text-sm leading-relaxed text-card-foreground sm:text-base">
                      Syria<span className="text-muted-foreground"> / </span>Remotely
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto mt-14 border-t border-border px-4 pt-8 sm:mt-20 sm:px-6 sm:pt-10">
        <p className="text-center font-body text-xs text-muted-foreground sm:text-sm pb-[env(safe-area-inset-bottom,0px)]">
          © 2026 Thaar Ata.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
