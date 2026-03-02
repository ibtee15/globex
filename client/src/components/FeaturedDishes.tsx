import { motion } from "framer-motion";
import cpawsImg from "../../public/cpaws.png";
import beefOmasun from "../../public/cat-omasum.png"
import beefMeat from "../../public/cat-beaf.png"

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Dry Salted Beef Omasum",
    description:
      "A premium salt-cured delicacy made from beef omasum (bible tripe), celebrated for its signature crunch and umami depth. Perfect for traditional hot pots, soups, and gourmet preparations across Asian and global markets.",
    image: beefOmasun,
    tag: "Flagship Product",
  },
  {
    id: 2,
    name: "Chicken Paws",
    description:
      "Premium-grade chicken paws, meticulously cleaned and processed to meet international export standards. Prized in Southeast Asian, Chinese, and African markets for their rich collagen content and versatile culinary uses.",
    image: cpawsImg,
    tag: "High Demand",
  },
  {
    id: 3,
    name: "Beef Meat",
    description:
      "The ultimate protein powerhouse. Our beef cuts are sourced from quality-certified facilities, processed under strict halal and export compliance standards, and delivered frozen to preserve maximum freshness.",
    image: beefMeat,
    tag: "Premium Cut",
  },
];

export function FeaturedDishes() {
  return (
    <section id="featured" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Our Flagship Exports
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
          >
            Featured Products
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg"
          >
            Premium quality beef omasum and frozen poultry, sourced with
            integrity and exported with reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                  {item.tag}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                >
                  Inquire Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
