export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <img
                src="/logo.webp"
                alt="GlobeX Enterprises"
                className="h-12 w-12 object-contain"
              />
              <span className="font-display font-bold text-2xl tracking-wide text-background">
                GlobeX <span className="text-primary">Enterprises</span>
              </span>
            </a>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Pakistan's trusted B2B exporter of premium beef omasum and frozen poultry products since 2018.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-background mb-4 uppercase tracking-wider text-sm">Our Products</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              {["Dry Salted Beef Omasum", "Chicken Paws", "Chicken Feet", "Beef Meat", "Chicken Meat", "Seafood Range"].map((p) => (
                <li key={p}>
                  <a href="#menu" className="hover:text-primary transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-background/60 text-sm">
              <li>+92 300 8248913</li>
              <li>021-34313377 / 021-34313660</li>
              <li><a href="mailto:sales@globexssh.com">sales@globexssh.com</a></li>
              <li className="pt-1">Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© {new Date().getFullYear()} GlobeX Enterprises | Pakistan Export Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-background transition-colors">Home</a>
            <a href="#featured" className="hover:text-background transition-colors">Products</a>
            <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
