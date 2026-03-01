import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const highlights = [
    "Established in Pakistan in 2018",
    "Strict export compliance & halal certification",
    "Consistent quality grading on all products",
    "Dependable supply chains for long-term partners",
    "Dedicated B2B exporter — no retail, pure wholesale",
  ];

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0"
            >
              <img
                src="https://nnrvtradepartners.com/wp-content/uploads/2025/05/Frozen-Chicken-Breasts-1.jpg"
                alt="GlobeX Operations"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute top-1/2 -right-12 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 hidden md:block"
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-6 -right-4 bg-card border border-border shadow-xl rounded-2xl px-6 py-4 hidden lg:block"
            >
              <div className="text-3xl font-display font-bold text-primary">2018</div>
              <div className="text-sm text-muted-foreground">Year Established</div>
            </motion.div>
          </div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              Company Profile
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
            >
              Pakistan's Trusted Meat Export Hub
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Established in Pakistan in 2018, GlobeX Enterprises is a dedicated B2B exporter specializing in Dry Salted Beef Omasum, Chicken Feet, Chicken Paws, and a comprehensive range of frozen meat and seafood products. We serve international buyers with consistent quality, strict compliance to export standards, and dependable supply chains — ensuring long-term partnerships and reliable trade execution.
            </motion.p>

            <div className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Partner With Us →
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
