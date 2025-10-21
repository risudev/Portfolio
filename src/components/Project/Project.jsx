import React from "react";
import { projects } from "../../constants";
import ProjectCard from "../../ProjectCard";

const Project = () => {
    return (
        <section
            id="project"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient text-white"
        >
            {/* Header */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#3eb4ff] text-white">
                    Projects
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto font-medium">
                    A curated collection of my most impactful and technically challenging
                    work — combining elegant design with functional architecture.
                </p>
            </div>

            {/* Projects List */}
            <div className="space-y-20">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Project;
