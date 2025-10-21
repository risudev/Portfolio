import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_zz5iv4o",
                "template_xpli9wt",
                form.current,
                "VYZnUc4Nbo7JIC3Ex"
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();
                    toast.success("Message sent successfully! ✅", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "dark",
                    });
                },
                (error) => {
                    console.error("Error sending message:", error);
                    toast.error("Failed to send message. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "dark",
                    });
                }
            );
    };

    return (
        <section
            id="contact"
            className="relative flex flex-col items-center justify-center py-24 px-[10vw] bg-[#050414] overflow-hidden"
        >
            <ToastContainer />

            {/* 3D gradient orb background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 via-transparent to-pink-800/20 blur-3xl animate-pulse"></div>

            {/* Floating glowing circles */}
            <div className="absolute top-20 left-10 w-48 h-48 bg-purple-700/30 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-700/30 rounded-full blur-3xl animate-float-slow delay-300"></div>

            <div className="relative text-center mb-16 z-10">
                <h2 className="text-4xl font-bold text-white tracking-wider drop-shadow-[0_4px_10px_rgba(168,85,247,0.4)]">
                    CONTACT
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-300 mt-4 text-lg font-medium">
                    I’d love to hear from you—reach out for any opportunities or questions!
                </p>
            </div>

            {/* 3D Glass Card */}
            <div className="relative z-10 w-full max-w-md bg-[#0f0a20]/70 backdrop-blur-md p-8 rounded-2xl border border-purple-700/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.3)] transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white text-center mb-4">
                    Connect With Me <span className="ml-1">🚀</span>
                </h3>

                <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col space-y-5">
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full p-4 rounded-lg bg-[#1a1123] text-white border border-purple-600/40 focus:border-pink-500 shadow-inner focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all placeholder-gray-400"
                    />
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full p-4 rounded-lg bg-[#1a1123] text-white border border-purple-600/40 focus:border-pink-500 shadow-inner focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all placeholder-gray-400"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="w-full p-4 rounded-lg bg-[#1a1123] text-white border border-purple-600/40 focus:border-pink-500 shadow-inner focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all placeholder-gray-400"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required
                        className="w-full p-4 rounded-lg bg-[#1a1123] text-white border border-purple-600/40 focus:border-pink-500 shadow-inner focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="w-full py-4 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-600 hover:to-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
