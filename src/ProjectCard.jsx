import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
        >
            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={800}
                scale={1.02}
                gyroscope={true}
                className="bg-gradient-to-br from-[#0f0f1a] to-[#1a093e]
                        border border-[#8245ec]/30 backdrop-blur-xl
                        px-6 sm:px-10 py-10 w-full rounded-2xl
                        shadow-[0_0_25px_rgba(130,69,236,0.25)]
                        hover:shadow-[0_0_40px_rgba(130,69,236,0.5)]
                        transition-all duration-500 group"
            >
                {/* Image */}
                <div className="overflow-hidden rounded-xl mb-6 border border-[#8245ec]/20">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-purple-800/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-600/40"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-md text-sm border border-gray-700 transition text-center"
                    >
                        View Code
                    </a>
                    <a
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md text-sm transition text-center"
                    >
                        Live Demo
                    </a>
                </div>
            </Tilt>
        </motion.div>
    );
};

export default ProjectCard;
