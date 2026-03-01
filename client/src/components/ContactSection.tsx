import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Sent!",
        description: "Our team will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
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
            Don't hesitate to ask everything about us — our team is ready to
            discuss your export requirements.
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
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Location
                  </h4>
                  <p className="text-muted-foreground">
                    Pakistan Export Hub
                    <br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Phone
                  </h4>
                  <p className="text-muted-foreground">
                    +92 300 8248913
                    <br />
                    021-34313377 / 021-34313660
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Email
                  </h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:sjabbarr@gmail.com">sjabbarr@gmail.com</a>
                    <br />
                    <a href="mailto:sales@globexssh.com">sales@globexssh.com</a>
                    <br />
                    <a href="mailto:samad@globexssh.com">samad@globexssh.com</a>
                    <br />
                    <a href="mailto:shahab@globexssh.com">
                      shahab@globexssh.com
                    </a>
                    <br />
                    <a href="mailto:ceo@globexssh.com">ceo@globexssh.com</a>
                    <br />
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h4 className="font-display font-bold text-foreground text-lg mb-4">
                Why Choose GlobeX?
              </h4>
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

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Send an Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Company / Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="Your Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Product of Interest
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                >
                  <option value="">Select a product...</option>
                  <option value="omasum">Dry Salted Beef Omasum</option>
                  <option value="chicken-paws">Chicken Paws</option>
                  <option value="chicken-feet">Chicken Feet</option>
                  <option value="beef-meat">Beef Meat</option>
                  <option value="chicken-meat">Chicken Meat</option>
                  <option value="seafood">Seafood Products</option>
                  <option value="multiple">Multiple Products</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message / Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your quantity requirements, destination country, and any specific product specifications..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Inquiry
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
