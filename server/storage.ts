import {
  type MenuItem,
  type Testimonial,
  type InsertMenuItem,
  type InsertTestimonial,
} from "@shared/schema";

export interface IStorage {
  getMenuItems(search?: string, category?: string): Promise<MenuItem[]>;
  getTestimonials(): Promise<Testimonial[]>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemoryStorage implements IStorage {
  private menuItems: MenuItem[] = [];
  private testimonials: Testimonial[] = [];
  private menuIdCounter = 1;
  private testimonialIdCounter = 1;

  async getMenuItems(search?: string, category?: string): Promise<MenuItem[]> {
    let items = this.menuItems;
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }
    if (category) {
      items = items.filter((i) => i.category === category);
    }
    return items;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    const newItem: MenuItem = {
      ...item,
      id: this.menuIdCounter++,
      isFeatured: item.isFeatured ?? false,
    };
    this.menuItems.push(newItem);
    return newItem;
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: this.testimonialIdCounter++,
      role: testimonial.role ?? null,
    };
    this.testimonials.push(newTestimonial);
    return newTestimonial;
  }
}

export const storage = new MemoryStorage();
