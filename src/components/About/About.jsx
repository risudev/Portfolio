import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient text-white"
        >
            <div className="container mx-auto max-w-5xl text-center text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#3eb4ff] text-white">
                    About Me
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full mb-8"></div>

                <div className="space-y-6 text-left">
                    <p className="text-gray-300">
                        Hi! I’m Riswan, a passionate and self-taught <b>MERN Fullstack Developer</b> from{" "}
                        <b>Vellore District, Tamil Nadu.</b> After earning my <b>B.Tech in Information Technology,</b>
                        I discovered my passion for web development and began my journey as a fullstack developer —
                        and I’ve been building ever since! <br />
                        <br />I specialize in creating <b>responsive, user-friendly,</b> and{" "}
                        <b>scalable web applications.</b> My focus is always on writing clean, maintainable code and
                        designing <b>intuitive user interfaces.</b>
                    </p>

                    <p className="text-gray-300">
                        <b>⚙️ Tech Stack : </b>
                        <br />
                        <b>Frontend:</b> HTML5, CSS3, TailwindCSS, ShadCN, JavaScript, ReactJS, Three.js <br />
                        <b>Backend:</b> Node.js, Express.js, MongoDB, Mongoose, MySQL, Middleware, JWT, Postman API
                        <br />
                        <b>Version Control & Deployment:</b> Git, Github, Netlify, Render
                        <br />
                    </p>

                    <p className="text-gray-300">
                        <b>🚀 Projects </b>
                        <br />
                        I’ve built several real-world projects, including:
                        <ul className="list-disc list-inside mt-2">
                            <li>
                                🏷️ <b>Auction Platform</b> – A real-time bidding system for users to buy and sell products.
                            </li>
                            <li>
                                🛍️ <b>E-commerce Website</b> – A responsive online store with secure authentication and product management.
                            </li>
                            <li>
                                🌐 <b>Portfolio Website</b> – Showcasing my work and skills as a fullstack developer.
                                <i> (More exciting projects are on the way!)</i>
                            </li>
                        </ul>
                    </p>

                    <p className="text-gray-300">
                        <b>📚 Learning & Growth</b>
                        <br />
                        I'm currently enrolled in the{" "}
                        <b>IIT Madras-Guvi MERN Fullstack Development Certification Program,</b> where I'm deepening
                        my understanding of fullstack architecture and best practices.
                    </p>

                    <p className="text-gray-300">
                        <b>🌟 Let’s Connect</b>
                        <br />
                        I'm actively seeking <b>opportunities to contribute to real-world projects,</b> collaborate with
                        passionate teams, and grow as a developer. <br />
                        You can explore my projects on{" "}
                        <a href="https://github.com/risudev" target="_blank" rel="noopener noreferrer">
                            <b>GitHub</b>
                        </a>{" "}
                        <span role="img" aria-label="arrow">👉</span> let's connect and build something great together!
                    </p>
                </div>

                {/* 🌟 4 Developer Role Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {/* Frontend */}
                    <div className="gradient-border p-6 rounded-xl bg-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-cyan-500/20 mb-3">
                                <SiReact className="h-10 w-10 text-cyan-400" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Frontend Developer</h4>
                            <p className="text-gray-300 text-sm mt-2">
                                Crafting clean, responsive, and interactive UIs using React, TailwindCSS, and modern web tools.
                            </p>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="gradient-border p-6 rounded-xl bg-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-green-500/20 mb-3">
                                <SiNodedotjs className="h-10 w-10 text-green-400" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Backend Developer</h4>
                            <p className="text-gray-300 text-sm mt-2">
                                Developing secure APIs and business logic using Node.js, Express, and RESTful architecture.
                            </p>
                        </div>
                    </div>

                    {/* Database */}
                    <div className="gradient-border p-6 rounded-xl bg-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-yellow-500/20 mb-3">
                                <SiMongodb className="h-10 w-10 text-yellow-400" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Database Developer</h4>
                            <p className="text-gray-300 text-sm mt-2">
                                Managing and optimizing data with MongoDB and Mongoose for seamless data flow.
                            </p>
                        </div>
                    </div>

                    {/* Fullstack */}
                    <div className="gradient-border p-6 rounded-xl bg-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-purple-500/20 mb-3">
                                <MdLaptopMac className="h-10 w-10 text-purple-400" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Fullstack Developer</h4>
                            <p className="text-gray-300 text-sm mt-2">
                                Building complete, scalable web apps by integrating frontend and backend technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
