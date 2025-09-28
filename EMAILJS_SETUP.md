# EmailJS Setup Guide

## 📧 How to Configure EmailJS for Your Contact Form

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (a7medkh326@gmail.com)
5. Note down your **Service ID** (starts with "service\_")

### Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Message: {{message}}

Reply to: {{from_email}}
```

4. Set the "To Email" to: `a7medkh326@gmail.com`
5. Note down your **Template ID** (starts with "template\_")

### Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key** (long string of characters)

### Step 5: Update Configuration

Open `/lib/emailjs-config.ts` and replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_your_actual_service_id", // Replace with your Service ID
  TEMPLATE_ID: "template_your_actual_template_id", // Replace with your Template ID
  PUBLIC_KEY: "your_actual_public_key", // Replace with your Public Key
  TO_EMAIL: "a7medkh326@gmail.com", // Your Gmail address
};
```

### Step 6: Test the Setup

1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Check your Gmail inbox for the test message

## 🚀 Features Added

### ✅ EmailJS Integration

- **Contact form** sends emails directly to your Gmail
- **Form validation** with required fields
- **Success/error messages** for user feedback
- **Loading states** during email sending

### ✅ WhatsApp Integration

- **Floating WhatsApp button** (bottom-right corner)
- **WhatsApp button** in contact form
- **Direct link** to your WhatsApp number: +201201782258
- **Pre-filled message** for better user experience

### ✅ User Experience

- **Responsive design** for all devices
- **Smooth animations** and transitions
- **Accessibility features** with proper labels
- **Error handling** for failed email sends

## 📱 WhatsApp Features

The WhatsApp integration includes:

- **Floating button** that's always visible
- **Contact form button** for immediate contact
- **Pre-filled message** to start conversations
- **Mobile-optimized** WhatsApp Web/App links

## 🔧 Troubleshooting

### Email Not Sending?

1. Check your EmailJS configuration values
2. Verify your Gmail account is connected
3. Check browser console for error messages
4. Ensure your EmailJS account is active

### WhatsApp Not Working?

1. Verify the phone number format: +201201782258
2. Test the link in a new browser tab
3. Ensure WhatsApp is installed on mobile devices

## 📞 Contact Information

- **Email**: a7medkh326@gmail.com
- **WhatsApp**: +201201782258
- **Website**: Your portfolio URL

Your contact form is now fully functional with both email and WhatsApp integration! 🎉
