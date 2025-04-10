import Order from '../models/Order.js';

const ordersSeedData = [
  {
    items: [
      {
        product: "product_id_here", // You'll need to replace with actual product IDs
        quantity: 2,
        price: 199.99,
        title: "Premium Wireless Headphones"
      }
    ],
    totalAmount: 399.98,
    shippingAddress: {
      fullName: "John Doe",
      addressLine1: "123 Main St",
      city: "Demo City",
      state: "Demo State",
      postalCode: "12345",
      country: "Demo Country",
      phone: "1234567890"
    },
    paymentInfo: {
      method: "card",
      status: "completed",
      transactionId: "demo_transaction_1"
    },
    orderStatus: "delivered",
    statusHistory: [
      {
        status: "confirmed",
        date: new Date('2024-01-01'),
        note: "Order confirmed"
      },
      {
        status: "delivered",
        date: new Date('2024-01-03'),
        note: "Order delivered successfully"
      }
    ]
  },
  // Add more orders...
];

export const seedOrders = async () => {
  try {
    await Order.deleteMany({});
    await Order.insertMany(ordersSeedData);
    console.log('Orders seeded successfully');
  } catch (error) {
    console.error('Error seeding orders:', error);
  }
};
