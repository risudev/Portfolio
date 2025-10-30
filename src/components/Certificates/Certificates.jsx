import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { certificate } from "../../constants";

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const openCertificateInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            id="certificates"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
        >
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#3eb4ff] text-white">
                    CERTIFICATES
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>

            </div>

            {/* Certificates Grid */}
            <div className="flex flex-wrap gap-8 justify-center">
                {certificate.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#0f0f1a] to-[#1a093e] 
                                   border border-[#8245ec]/60 backdrop-blur-xl 
                                   px-6 sm:px-10 py-10 w-full sm:w-[46%] rounded-2xl 
                                   shadow-[0_0_25px_rgba(130,69,236,0.25)]
                                   hover:shadow-[0_0_40px_rgba(130,69,236,0.5)]
                                   hover:scale-[1.02] transition-all duration-500
                                   cursor-pointer group"
                        onClick={() => setSelectedCert(cert)}
                    >
                        <h3 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#3eb4ff] mb-6 text-center text-white">
                            📜 {cert.title}
                        </h3>

                        <Tilt
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <div className="space-y-6">
                                {/* Certificate Image */}
                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a093e] to-[#0f0f1a] p-4 border border-[#8245ec]/20">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-48 object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#8245ec]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <span className="text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                            Click to View Details
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>



            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        onClick={() => setSelectedCert(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-[#0f0f1a] to-[#1a093e] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#8245ec]/30"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-8 border-b border-[#8245ec]/30 bg-gradient-to-r from-[#1a093e] to-[#0f0f1a] rounded-t-2xl">
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#3eb4ff]">
                                    📜 Certificate Details
                                </h3>
                                <motion.button
                                    className="bg-[#8245ec] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#3eb4ff] transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                                    onClick={() => setSelectedCert(null)}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    ×
                                </motion.button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto">
                                {/* Certificate Image with Fullscreen Button */}
                                <div className="bg-gradient-to-br from-[#1a093e] to-[#0f0f1a] p-8 border-b border-[#8245ec]/20">
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={selectedCert.image}
                                            alt={selectedCert.title}
                                            className="max-w-full h-auto max-h-96 object-contain rounded-xl shadow-2xl border border-[#8245ec]/20"
                                        />
                                    </div>
                                    {/* Fullscreen Button */}
                                    <div className="flex justify-center">
                                        <motion.button
                                            onClick={() => openCertificateInNewTab(selectedCert.image)}
                                            className="bg-gradient-to-r from-[#8245ec] to-[#3eb4ff] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(130,69,236,0.5)] transition-all duration-300 flex items-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                            View Full Certificate
                                        </motion.button>
                                    </div>
                                </div>


                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;