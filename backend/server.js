const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://arnim2006.github.io'],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

// Parse JSON request bodies
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
  res.send('Portfolio contact server is running.');
});

// POST route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic request validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required (name, email, subject, message).' 
    });
  }

  try {
    // Configure standard SMTP transporter using credentials from .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection configuration
    await transporter.verify();

    // Setup email headers and body
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (Gmail requires authenticated sender email)
      replyTo: email, // Direct replies back to the user who filled the form
      to: process.env.RECEIVER_EMAIL, // Your receiving inbox
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eef; border-radius: 8px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">New Message from Portfolio</h2>
          <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #6366f1; margin-top: 15px;">
            <p style="white-space: pre-wrap; line-height: 1.6; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`[SUCCESS] Contact email sent by ${email}: ${info.messageId}`);

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('[ERROR] Failed to send contact email:', error);
    
    // Provide diagnostic hints for local dev
    if (error.code === 'EAUTH') {
      return res.status(500).json({
        success: false,
        message: 'Authentication failed. Please verify your SMTP user and app password credentials in the .env file.'
      });
    }

    return res.status(500).json({ 
      success: false, 
      message: 'Failed to process your message. Please try again later.' 
    });
  }
});

// Start the server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`Portfolio contact server running on port ${PORT}`);
    console.log(`API endpoint available at POST http://localhost:${PORT}/api/contact`);
    console.log(`===============================================`);
  });
}

module.exports = app;
