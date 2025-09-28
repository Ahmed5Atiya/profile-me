"use client";

import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_CONFIG } from "@/lib/emailjs-config";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = WHATSAPP_CONFIG.DEFAULT_MESSAGE;
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
