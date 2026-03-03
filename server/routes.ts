import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingMenuItems = await storage.getMenuItems();
  if (existingMenuItems.length === 0) {
    const initialItems = [
      {
        name: "Dry Salted Beef Omasum",
        description:
          "Premium salt-cured beef omasum (bible tripe), renowned for its unique crunchy texture and umami-rich flavor. Widely used in Asian hot pots, soups, and traditional cuisines. Available in bulk export quantities with consistent quality grading.",
        price: "0.00",
        category: "Beef Products",
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop",
        isFeatured: true,
      },
      {
        name: "Beef Omasum — Sundried",
        description:
          "Naturally sundried beef omasum with extended shelf life, ideal for markets requiring non-refrigerated storage. Processed under strict hygiene standards and halal-certified for global distribution.",
        price: "0.00",
        category: "Beef Products",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
        isFeatured: false,
      },
      {
        name: "Frozen Beef Cuts",
        description:
          "High-quality frozen beef cuts sourced from halal-certified slaughterhouses. Available in various specifications including boneless and bone-in options. Packaged in export-grade cartons with full cold chain compliance.",
        price: "0.00",
        category: "Beef Products",
        image:
          "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop",
        isFeatured: false,
      },
      {
        name: "Chicken Paws",
        description:
          "Grade A chicken paws, meticulously cleaned, de-clawed, and blast-frozen to preserve freshness. Highly sought after in Chinese, Vietnamese, and African markets for collagen-rich cooking. Supplied in standard 15kg export cartons.",
        price: "0.00",
        category: "Poultry",
        image:
          "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop",
        isFeatured: true,
      },
      {
        name: "Chicken Feet",
        description:
          "Premium frozen chicken feet, carefully processed and quality-checked for international export. Rich in gelatin and collagen, popular in Asian and African cuisines. Available in bulk volumes with competitive FOB pricing.",
        price: "0.00",
        category: "Poultry",
        image:
          "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=2070&auto=format&fit=crop",
        isFeatured: true,
      },
      {
        name: "Whole Frozen Chicken",
        description:
          "Farm-fresh whole chickens, halal-slaughtered, deep-cleaned, and individually quick-frozen (IQF). Available in graded weights ranging from 900g to 1400g per bird. Suitable for retail, HoReCa, and food processing industries.",
        price: "0.00",
        category: "Poultry",
        image:
          "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop",
        isFeatured: false,
      },
      {
        name: "Boneless Chicken Breast",
        description:
          "Skinless, boneless chicken breast fillets processed in ISO-certified facilities. Individually frozen for easy portioning. Ideal for food service operators, processors, and distributors seeking consistent quality at scale.",
        price: "0.00",
        category: "Poultry",
        image:
          "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=2070&auto=format&fit=crop",
        isFeatured: false,
      },
      {
        name: "Chicken Leg Quarters",
        description:
          "Frozen chicken leg quarters with skin-on, bone-in configuration. Preferred in African and Middle Eastern markets for their rich flavor. Packed in standard 10kg and 15kg export cartons with full documentation.",
        price: "0.00",
        category: "Poultry",
        image:
          "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?q=80&w=2064&auto=format&fit=crop",
        isFeatured: false,
      },
      {
        name: "Mixed Frozen Poultry Pack",
        description:
          "Customizable mixed poultry export packs available upon buyer request. Combine chicken paws, feet, leg quarters, and breast cuts in one shipment. Ideal for distributors seeking product variety with streamlined logistics.",
        price: "0.00",
        category: "Poultry",
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2070&auto=format&fit=crop",
        isFeatured: false,
      },
      {
        name: "Seafood Export Range",
        description:
          "A comprehensive range of frozen seafood products including fish fillets, shrimp, and squid. Sourced from certified fisheries and processed under HACCP-compliant facilities. Available for bulk B2B orders with flexible packaging options.",
        price: "0.00",
        category: "Seafood",
        image:
          "https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=2069&auto=format&fit=crop",
        isFeatured: false,
      },
    ];

    for (const item of initialItems) {
      await storage.createMenuItem(item);
    }
  }

  const existingTestimonials = await storage.getTestimonials();
  if (existingTestimonials.length === 0) {
    const initialTestimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "Import Director, Gulf Foods LLC",
      text: "GlobeX has been our go-to supplier for beef omasum for over three years. Their consistency in quality grading and on-time shipments have made them an indispensable partner for our business.",
      rating: "5",
    },
    {
      name: "Li Wei Trading Co.",
      role: "Procurement Manager, Guangzhou",
      text: "The dry salted beef omasum from GlobeX consistently meets our import specifications for the Chinese hot pot market. Texture, cleanliness, and moisture levels are always well controlled. A very dependable supplier.",
      rating: "5",
    },
    {
      name: "Emmanuel Okonkwo",
      role: "Food Distributor, Lagos Nigeria",
      text: "We've sourced frozen poultry from multiple countries, but GlobeX stands out for competitive pricing and genuine quality compliance. Their halal certification is recognized and trusted in our market.",
      rating: "5",
    },

    // ✅ UPDATED — China focused on omasum
    {
      name: "Zhang Minghao (张明浩)",
      role: "Senior Buyer, China",
      text: "We primarily import dry salted beef omasum from GlobeX for distribution in northern China. The cut quality and salt curing are very consistent, and shipments arrive exactly as specified in our contracts.",
      rating: "5",
    },

    // ✅ unchanged — Africa poultry focus
    {
      name: "Joseph Mwangi",
      role: "Import Manager, Nairobi",
      text: "GlobeX understands the African market requirements very well. Their chicken feet and leg quarters arrive well-packed and within agreed timelines. Communication throughout the order cycle is very professional.",
      rating: "5",
    },

    // ✅ UPDATED — Hong Kong focused on omasum
    {
      name: "Michael Wong (黄志强)",
      role: "Purchasing Director, Hong Kong",
      text: "Our buyers in Hong Kong are very satisfied with GlobeX dry salted beef omasum. The product has excellent crunch after rehydration and performs well in hot pot applications. Documentation and packing are always in order.",
      rating: "5",
    },
  ];

    for (const testimonial of initialTestimonials) {
      await storage.createTestimonial(testimonial);
    }
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // Seed the database
  seedDatabase().catch(console.error);

  app.get(api.menuItems.list.path, async (req, res) => {
    try {
      const search = req.query.search as string | undefined;
      const category = req.query.category as string | undefined;

      const items = await storage.getMenuItems(search, category);
      res.json(items);
    } catch (err) {
      console.error("Error fetching menu items:", err);
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  return httpServer;
}
