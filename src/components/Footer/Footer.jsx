import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Footer = () => {
    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay, ease: "easeOut" },
        viewport: { once: true },
    });

    return (
        <footer className="bg-gradient-to-b from-[#0a0a0f] to-[#12121a] text-gray-300 py-10 px-6 md:px-[8vw] relative">
            <motion.div
                {...fadeUp(0)}
                className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10"
            >
                {/* Brand Section */}
                <motion.div {...fadeUp(0.1)} className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-white mb-2">Riswan</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Crafting high-performance web applications as a MERN Stack Developer with clean, modern UI and scalable architecture.
                    </p>
                </motion.div>

                {/* MERN Logos Section */}
                <motion.div
                    {...fadeUp(0.3)}
                    className="flex-1 flex justify-center items-center gap-5 flex-wrap"
                >
                    <SiMongodb className="text-green-500 text-3xl hover:scale-110 transition-transform duration-300" />
                    <SiExpress className="text-gray-400 text-3xl hover:scale-110 transition-transform duration-300" />
                    <FaReact className="text-cyan-400 text-3xl hover:scale-110 transition-transform duration-300" />
                    <FaNodeJs className="text-green-600 text-3xl hover:scale-110 transition-transform duration-300" />
                </motion.div>

                {/* Socials Section */}
                <motion.div
                    {...fadeUp(0.5)}
                    className="flex-1 flex flex-col items-center md:items-end gap-3"
                >
                    <div className="flex gap-4">
                        <motion.a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2 }}
                            className="text-gray-400 hover:text-white transition-colors text-xl"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2 }}
                            className="text-gray-400 hover:text-white transition-colors text-xl"
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="risudeveloper@gmail.com"
                            whileHover={{ scale: 1.2 }}
                            className="text-gray-400 hover:text-white transition-colors text-xl"
                        >
                            <FaEnvelope />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
                {...fadeUp(0.7)}
                className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500"
            >
                <p>
                    © {new Date().getFullYear()} <span className="text-white font-medium">Riswan. </span>
                    All rights reserved.
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;
