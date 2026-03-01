import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

const SLIDES = [
  {
    title: "Dry Salted Beef Omasum",
    subtitle: "A gourmet salt-cured delicacy celebrated for its signature crunch in traditional hot pots.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Premium Chicken Paws",
    subtitle: "Cleanly processed for rich flavor and maximum nutrition — trusted worldwide.",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Chicken Feet",
    subtitle: "Rich, gelatin-packed chicken feet for real food lovers and global markets.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
          alt="Premium meat exports"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 dark:from-black/90 dark:via-black/75 dark:to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe size={16} className="text-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Est. 2018 • Pakistan Export Hub
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 text-balance mx-auto leading-tight">
            Quality You Can Trust,{" "}
            <br className="hidden md:block" />
            <span className="italic font-light text-primary/90">Supply You Can Rely On.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 text-balance">
            GlobeX Enterprises — Pakistan's trusted B2B exporter of Dry Salted Beef Omasum, Chicken Feet, Chicken Paws, Beef Meat, and Chicken Meat to international markets worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#featured"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Our Products
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 rounded-full font-medium transition-all w-full sm:w-auto justify-center flex"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "2018", label: "Established" },
            { value: "B2B", label: "Export Focus" },
            { value: "Global", label: "Reach" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
