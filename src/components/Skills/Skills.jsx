import React from "react";
import { SkillsInfo } from "../../constants.js";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";



const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
        >
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#3eb4ff] text-white">
                    SKILLS
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
                    A collection of my technical skills and expertise honed through
                    various projects and experiences.
                </p>
            </div>

            {/* Skill Categories */}
            <div className="flex flex-wrap gap-8 justify-center">
                {SkillsInfo.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#0f0f1a] to-[#1a093e] 
                       border border-[#8245ec]/30 backdrop-blur-xl 
                       px-6 sm:px-10 py-10 w-full sm:w-[46%] rounded-2xl 
                       shadow-[0_0_25px_rgba(130,69,236,0.25)]
                       hover:shadow-[0_0_40px_rgba(130,69,236,0.5)]
                       hover:scale-[1.02] transition-all duration-500"
                    >
                        <h3 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#3eb4ff] mb-6 text-center text-white">
                            {category.icon && (
                                <img
                                    src={category.icon}
                                    alt={`${category.title} icon`}
                                    className="w-8 h-8"
                                />
                            )}
                            {category.title}
                        </h3>

                        <Tilt
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center justify-center space-x-2 bg-[#151526]/60 
                               border border-gray-700 rounded-3xl py-2 px-2 sm:py-3 sm:px-3 
                               hover:bg-[#8245ec]/20 hover:border-[#8245ec]/60
                               shadow-[inset_0_0_8px_rgba(130,69,236,0.3)]
                               transition-all duration-300"
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-[0_0_6px_rgba(130,69,236,0.6)]"
                                        />
                                        <span className="text-xs sm:text-sm text-gray-300 font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
