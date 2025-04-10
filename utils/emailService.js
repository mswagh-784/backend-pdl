import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Validate required environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  throw new Error('Missing email configuration in environment variables');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    // Only disable for testing with local mail servers
    rejectUnauthorized: process.env.NODE_ENV !== 'production'
  }
});

// Verify connection on startup
transporter.verify()
  .then(() => console.log('SMTP connection verified'))
  .catch(error => {
    console.error('SMTP connection failed:', error);
    process.exit(1); // Exit if email service is critical
  });

export const sendLoginEmail = async (userEmail, userName) => {
  if (!userEmail || !userName) {
    throw new Error('Missing required parameters for sendLoginEmail');
  }

  const mailOptions = {
    from: `EcoShop <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: 'New Login to Your EcoShop Account',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50;">Welcome back to EcoShop, ${userName}!</h1>
        <p style="font-size: 16px;">We noticed a new login to your account.</p>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;">Time: ${new Date().toLocaleString()}</p>
        </div>
        <p style="font-size: 14px; color: #7f8c8d;">
          If this wasn't you, please <a href="mailto:support@ecoshop.com" style="color: #4a90e2;">contact our support team</a> immediately.
        </p>
      </div>
    `,
    // Text fallback for non-HTML email clients
    text: `Welcome back to EcoShop, ${userName}!\n\nWe noticed a new login to your account.\n\nTime: ${new Date().toLocaleString()}\n\nIf this wasn't you, please contact our support team at support@ecoshop.com.`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Login email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Failed to send login email:', error);
    throw new Error('Failed to send login notification email');
  }
};

export const sendWelcomeEmail = async (userEmail, userName) => {
  if (!userEmail || !userName) {
    throw new Error('Missing required parameters for sendWelcomeEmail');
  }

  const mailOptions = {
    from: `EcoShop <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: 'Welcome to EcoShop! 🎉',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50;">Welcome to EcoShop, ${userName}! 🌟</h1>
        <p style="font-size: 16px;">Thank you for choosing EcoShop! We're thrilled to have you as part of our sustainable shopping community.</p>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #1a73e8; margin-top: 0;">What's Next?</h2>
          <ul style="padding-left: 20px;">
            <li>Browse our extensive collection of eco-friendly products</li>
            <li>Check out our best sellers</li>
            <li>Explore special offers and discounts</li>
          </ul>
        </div>
        <p style="font-size: 14px; color: #7f8c8d;">
          Need help? Contact our support team at <a href="mailto:support@ecoshop.com" style="color: #4a90e2;">support@ecoshop.com</a>
        </p>
      </div>
    `,
    text: `Welcome to EcoShop, ${userName}! 🌟\n\nThank you for choosing EcoShop! We're thrilled to have you as part of our sustainable shopping community.\n\nWhat's Next?\n- Browse our extensive collection of eco-friendly products\n- Check out our best sellers\n- Explore special offers and discounts\n\nNeed help? Contact our support team at support@ecoshop.com`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Welcome email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    throw new Error('Failed to send welcome email');
  }
};