import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value ?? "";

    const company = get("company");
    const phone   = get("phone");
    const email   = get("email");
    const product = get("product");
    const message = get("message");

    const subject = encodeURIComponent(`Product Inquiry: ${product} — ${company}`);
    const body = encodeURIComponent(
`New Inquiry from GlobeX Enterprises Website

Company / Name : ${company}
Email          : ${email}
Phone/WhatsApp : ${phone}
Product        : ${product}

Message / Requirements:
${message}`
    );

    window.location.href = `mailto:sales@globexssh.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    form.reset();
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

            {/* Why Choose Us */}
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

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Email Client Opened!</h3>
                <p className="text-muted-foreground max-w-xs">
                  Your email app should have opened with the inquiry pre-filled. Just hit <strong>Send</strong> in your email client.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary font-medium hover:underline text-sm"
                >
                  Fill out again
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Send an Inquiry</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Clicking <strong>Send Inquiry</strong> will open your email app pre-filled and addressed to{" "}
                  <span className="text-foreground font-medium">sales@globexssh.com</span>.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company / Name</label>
                      <input
                        required name="company" type="text"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone / WhatsApp</label>
                      <input
                        required name="phone" type="tel"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Your Email Address</label>
                    <input
                      required name="email" type="email"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Product of Interest</label>
                    <select
                      required name="product"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select a product...</option>
                      <option>Dry Salted Beef Omasum</option>
                      <option>Chicken Paws</option>
                      <option>Chicken Feet</option>
                      <option>Beef Meat</option>
                      <option>Chicken Meat</option>
                      <option>Seafood Products</option>
                      <option>Multiple Products</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message / Requirements</label>
                    <textarea
                      name="message" rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Tell us about your quantity requirements, destination country, and any specific product specifications..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-lg"
                  >
                    Send Inquiry
                    <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
