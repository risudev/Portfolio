import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../../assets/profile1.jpg';
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (

        <section
            id="home"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font
            -sans mt-24 md:mt-24 lg:mt-32"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Riswan N
                    </h2>
                    {/* Skills Heading with Typing Effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">

                        <Typewriter
                            words={[
                                'Front-End Developer',
                                'Back-End Developer',
                                'MERN Fullstack Developer',
                            ]}
                            loop={0}
                            cursor

                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h3>
                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        MERN Stack Developer creating high-performance, responsive web apps with clean code and smooth user experiences. I love turning complex problems into simple, elegant solutions.
                    </p>
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1raFJbwwGwcCLLVN5j0okhJY3_G7DPW2r/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-block text-white font-semibold text-lg py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 hover:brightness-110"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                        }}
                    >
                        📄 View Resume
                    </a>


                </div>
                {/* Right Side */}
                {/* <div className="md:w-1/2 flex justify-center md:justify-end ">
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden border-4 border-purple-700"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={profileImage}
                            alt="Riswan"
                            className="w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div> */}

                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden border-4 border-purple-700 shadow-[0_10px_20px_rgba(130,69,236,0.5)] ml-5">
                    <img
                        src={profileImage}
                        alt="Riswan"
                        className="w-full h-full object-cover"
                    />
                </div>


            </div>
        </section>
    );
};

export default About;
