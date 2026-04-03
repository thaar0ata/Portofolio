import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Business English: Networking",
    org: "University of Washington · Coursera",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/EXZMGSJE4GKQ",
  },
  {
    name: "Project Initiation: Starting a Successful Project",
    org: "Google · Coursera",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/SR373PJ8KNXV",
  },
  {
    name: "Project Execution: Running the Project",
    org: "Google · Coursera",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/XB1R0TIE26OA",
  },
  {
    name: "Foundations of Project Management",
    org: "Google · Coursera",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/VX4GT0N3E21K",
  },
  {
    name: "Agile Project Management",
    org: "Google · Coursera",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/8GT1DL06RJST",
  },
  {
    name: "Social Media Marketing for Small Businesses with Facebook",
    org: "Coursera",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/4TX89HK8WOX2",
  },
  {
    name: "Project Planning: Putting It All Together",
    org: "Google · Coursera",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/B7495I6URQPS",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14 md:mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Credentials
          </p>
          <h2 className="font-display text-3xl font-bold gold-text-gradient sm:text-4xl md:text-5xl">
            Certifications
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-2xl space-y-0">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[1.125rem] top-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent sm:left-8 md:left-8" />

          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative py-4 pl-12 sm:py-6 sm:pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 top-7 h-4 w-4 rounded-full border-[3px] border-background gold-gradient transition-all group-hover:animate-glow sm:left-3.5 sm:top-8 sm:h-5 sm:w-5 sm:border-4 md:left-5.5" />

              <div className="rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 sm:rounded-lg sm:p-6">
                <div className="flex gap-3 sm:gap-4">
                  <Award className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary sm:mt-1 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-semibold leading-snug text-primary sm:text-lg break-words">
                      {cert.name}
                    </h3>
                    <p className="mt-1 font-body text-sm text-muted-foreground">
                      {cert.org}
                    </p>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 rounded-lg py-2 font-body text-sm text-primary underline-offset-4 hover:underline active:text-primary/90"
                    >
                      Verify on Coursera
                      <ExternalLink size={14} aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
