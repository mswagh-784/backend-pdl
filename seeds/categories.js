import Category from '../models/Category.js';

const categoriesSeedData = [
  {
    name: "Electronics",
    slug: "electronics",
    description: "Latest electronic gadgets and accessories",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
    isActive: true,
    featuredOrder: 1,
    metadata: {
      title: "Electronics - Latest Gadgets",
      description: "Discover the latest electronic gadgets"
    }
  },
  {
    name: "Clothing",
    slug: "clothing",
    description: "Fashion and apparel",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500",
    isActive: true,
    featuredOrder: 2,
    metadata: {
      title: "Fashion & Clothing",
      description: "Latest fashion trends"
    }
  },
  // Add more categories...
];

export const seedCategories = async () => {
  try {
    await Category.deleteMany({});
    await Category.insertMany(categoriesSeedData);
    console.log('Categories seeded successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
};
