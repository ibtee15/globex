import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/sales@globexssh.com", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Contact Us
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Don't hesitate to ask everything about us — our team is ready to discuss your export requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Pakistan Export Hub<br />Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    +92 300 8248913<br />
                    021-34313377 / 021-34313660
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                  <div className="flex flex-col gap-1 text-muted-foreground">
                    {["sales@globexssh.com"].map((em) => (
                      <a key={em} href={`mailto:${em}`} className="hover:text-primary transition-colors">{em}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl"
          >
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h4 className="font-display font-bold text-foreground text-lg mb-4">Why Choose GlobeX?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Consistent product quality grading",
                  "Halal-certified supply chain",
                  "Competitive FOB & CIF pricing",
                  "Full export documentation support",
                  "Reliable shipment timelines",
                  "Long-term partnership approach",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}