import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTestimonials } from "@/hooks/use-testimonials";

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useTestimonials();

  return (
    <section id="testimonials" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Partner Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Our Partners Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by international importers, distributors, and food processors across Asia, Africa, and the Middle East.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-background rounded-2xl p-8 border border-border h-64" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-3xl p-8 shadow-sm border border-border/50 relative group hover:shadow-md transition-all"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < Number(testimonial.rating) ? "currentColor" : "none"}
                      className={i < Number(testimonial.rating) ? "" : "text-muted"}
                    />
                  ))}
                </div>

                <p className="text-foreground text-lg mb-8 relative z-10 leading-relaxed italic font-display">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold font-display text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    {testimonial.role && (
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
