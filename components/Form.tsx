"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { EMAILJS_CONFIG, WHATSAPP_CONFIG } from "@/lib/emailjs-config";

const Form = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSent(true);
      setFormData({ from_name: "", from_email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = WHATSAPP_CONFIG.DEFAULT_MESSAGE;
    const whatsappUrl = `https://wa.me/${
      WHATSAPP_CONFIG.PHONE_NUMBER
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    // <div className="container w-full flex items-center justify-center min-h-screen px-6 mx-auto">
    //   <form className="w-full ">
    //     <div className="flex justify-center mx-auto">
    //       <h1 className="text-purple fonto-mono text-[25px]">Contact Us</h1>
    //     </div>

    //     <div className="relative flex items-center mt-8">
    //       <span className="absolute">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           stroke-width="2"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    //           />
    //         </svg>
    //       </span>

    //       <input
    //         type="text"
    //         className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //         placeholder="Username"
    //       />
    //     </div>
    //     {/* <label
    //       for="dropzone-file"
    //       className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="w-6 h-6 text-gray-300 dark:text-gray-500"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         stroke-width="2"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    //         />
    //       </svg>

    //       <h2 className="mx-3 text-gray-400">Profile Photo</h2>

    //       <input id="dropzone-file" type="file" className="hidden" />
    //     </label> */}
    //     <div className="relative flex items-center mt-6">
    //       <span className="absolute">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           stroke-width="2"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    //           />
    //         </svg>
    //       </span>

    //       <input
    //         type="email"
    //         className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //         placeholder="Email address"
    //       />
    //     </div>
    //     <div className="relative flex items-center mt-8">
    //       <textarea
    //         className="block w-full h-[150px] py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //         placeholder="Write Your Message"
    //       />
    //     </div>

    //     <div className="mt-6">
    //       <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
    //         Send
    //       </button>
    //     </div>
    //   </form>
    // </div>

    // <section className="bg-white mb-10 dark:bg-black-100">
    //   <div className="container px-6 py-12 mx-auto">
    //     <div>
    //       <p className="font-medium text-blue-500 dark:text-blue-400">
    //         Contact us
    //       </p>

    //       <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
    //         Chat to our friendly team
    //       </h1>

    //       <p className="mt-3 text-gray-500 dark:text-gray-400">
    //         We’d love to hear from you. Please fill out this form or shoot us an
    //         email.
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
    //       <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
    //         <div>
    //           <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               className="w-5 h-5"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    //               />
    //             </svg>
    //           </span>

    //           <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
    //             Email
    //           </h2>
    //           <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
    //             Our friendly team is here to help.
    //           </p>
    //           <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
    //             hello@merakiui.com
    //           </p>
    //         </div>

    //         {/* Other contact options */}
    //         <div>
    //           <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               className="w-5 h-5"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    //               />
    //             </svg>
    //           </span>

    //           <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
    //             Live chat
    //           </h2>
    //           <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
    //             Our friendly team is here to help.
    //           </p>
    //           <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
    //             Start new chat
    //           </p>
    //         </div>
    //       </div>

    //       {/* Contact form */}
    //       <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-black-100 border border-purple md:p-8">
    //         <form>
    //           <div className="-mx-2 md:items-center md:flex">
    //             <div className="flex-1 px-2">
    //               <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
    //                 First Name
    //               </label>
    //               <input
    //                 type="text"
    //                 placeholder="John"
    //                 className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //               />
    //             </div>

    //             <div className="flex-1 px-2 mt-4 md:mt-0">
    //               <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
    //                 Last Name
    //               </label>
    //               <input
    //                 type="text"
    //                 placeholder="Doe"
    //                 className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //               />
    //             </div>
    //           </div>

    //           <div className="mt-4">
    //             <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
    //               Email address
    //             </label>
    //             <input
    //               type="email"
    //               placeholder="johndoe@example.com"
    //               className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //             />
    //           </div>

    //           <div className="w-full mt-4">
    //             <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
    //               Message
    //             </label>
    //             <textarea
    //               className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //               placeholder="Message"
    //             ></textarea>
    //           </div>

    //           <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
    //             Send message
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <section className="bg-white mb-16 dark:bg-gray-900">
    //   <div className="container px-6 py-12 mx-auto">
    //     <div>
    //       <p className="font-medium text-blue-500 dark:text-blue-400">
    //         Contact us
    //       </p>

    //       <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
    //         Chat to our friendly team
    //       </h1>

    //       <p className="mt-3 text-gray-500 dark:text-gray-400">
    //         We’d love to hear from you. Please fill out this form or shoot us an
    //         email.
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
    //       <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
    //         <div>
    //           <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               className="w-5 h-5"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    //               />
    //             </svg>
    //           </span>

    //           <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
    //             Email
    //           </h2>
    //           <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
    //             Our friendly team is here to help.
    //           </p>
    //           <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
    //             hello@merakiui.com
    //           </p>
    //         </div>

    //         {/* Other contact options */}
    //         <div>
    //           <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               className="w-5 h-5"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    //               />
    //             </svg>
    //           </span>

    //           <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
    //             Live chat
    //           </h2>
    //           <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
    //             Our friendly team is here to help.
    //           </p>
    //           <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
    //             Start new chat
    //           </p>
    //         </div>
    //       </div>

    //       {/* Contact form */}
    //       <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
    //         <form>
    //           <div className="-mx-2 md:items-center md:flex">
    //             <div className="flex-1 px-2">
    //               <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
    //                 First Name
    //               </label>
    //               <input
    //                 type="text"
    //                 placeholder="John"
    //                 className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //               />
    //             </div>

    //             <div className="flex-1 px-2 mt-4 md:mt-0">
    //               <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
    //                 Last Name
    //               </label>
    //               <input
    //                 type="text"
    //                 placeholder="Doe"
    //                 className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //               />
    //             </div>
    //           </div>

    //           <div className="mt-4">
    //             <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
    //               Email address
    //             </label>
    //             <input
    //               type="email"
    //               placeholder="johndoe@example.com"
    //               className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //             />
    //           </div>

    //           <div className="w-full mt-4">
    //             <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
    //               Message
    //             </label>
    //             <textarea
    //               className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //               placeholder="Message"
    //             ></textarea>
    //           </div>

    //           <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
    //             Send message
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>]
    <section className="min-h-screen bg-white dark:bg-black-100 lg:flex">
      <div className="flex flex-col justify-center w-full p-8 lg:bg-gray-100 lg:dark:bg-black-100 lg:px-12 xl:px-32 lg:w-1/2">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
          hire us.
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Ask us everything and we would love to hear from you
        </p>

        <div className="mt-6 md:mt-8">
          <h3 className="font-medium text-gray-600 dark:text-gray-300 ">
            Follow us
          </h3>

          <div className="flex mt-4 -mx-1.5 ">
            <a
              className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
              href="#"
            >
              {/* <svg
                className="w-10 h-10 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 h-8 fill-current"
              >
                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" />
              </svg>
            </a>

            <a
              className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
              href="#"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                  fill="currentColor"
                />
                <path
                  d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                  fill="currentColor"
                />
                <path
                  d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
              href="#"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
              href="#"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="-mx-2 md:items-center md:flex">
            <div className="flex-1 px-2">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 px-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Email address
              </label>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required
              className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
          </div>

          {isSent && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
