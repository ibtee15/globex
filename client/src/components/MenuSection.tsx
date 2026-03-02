import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Package } from "lucide-react";
import cpawsImg from "../../public/cpaws.png";
import beefOmasun from "../../public/cat-omasum.png"
import beefMeat from "../../public/cat-beaf.png"
import cFeet from "../../public/cat-paws.png"
import cMeat from "../../public/cat-chicken.png"


const CATEGORIES = ["All", "Beef Products", "Poultry"];

// ✅ Static products from globexssh.com
const STATIC_PRODUCTS = [
  {
    id: "1",
    name: "Dry Salted Beef Omasum",
    description:
      "A gourmet, salt-cured delicacy celebrated for its signature crunch in traditional hot pots.",
    category: "Beef Products",
    image: beefOmasun,
  },
  {
    id: "2",
    name: "Chicken Paws",
    description:
      "Premium chicken paws, cleanly processed for rich flavor and maximum nutrition.",
    category: "Poultry",
    image: cFeet,
  },
  {
    id: "3",
    name: "Chicken Feet",
    description:
      "Rich, gelatin-packed chicken feet for real food lovers.",
    category: "Poultry",
    image: cpawsImg,
  },
  {
    id: "4",
    name: "Beef Meat",
    description:
      "The ultimate protein powerhouse for rich, hearty, and flavor-forward meals.",
    category: "Beef Products",
    image: beefMeat,
  },
  {
    id: "5",
    name: "Chicken Meat",
    description:
      "Farm-fresh chicken meat delivering tenderness, nutrition, and great taste.",
    category: "Poultry",
    image: cMeat,
  },
];

export function MenuSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    return STATIC_PRODUCTS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="menu" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-3 block"
            >
              Full Product Catalog
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            >
              Our Export Range
            </motion.h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Browse our complete catalog of export-grade meat and poultry products.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-72 relative"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-5 group"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full shrink-0 mt-1">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    <a href="#contact" className="mt-2 text-primary text-sm font-medium hover:underline">
                      Request Quote →
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm border border-border">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted-foreground max-w-md">
              We couldn't find anything matching "{searchQuery}" in {activeCategory}.
              Try a different search term or category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-6 text-primary font-medium hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}