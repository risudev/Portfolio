// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import restapi from './assets/tech_logo/restapi.png'
import fakestoreapi from "./assets/tech_logo/fakestoreapi.png"
import omdb from "./assets/tech_logo/omdb.jpeg"
import stripe from "./assets/tech_logo/stripe.png"
import razorpay from "./assets/tech_logo/Razorpay.png"
import three from "./assets/tech_logo/three.png"
import jwt from "./assets/tech_logo/jwt.svg";
import middleware from "./assets/tech_logo/middleware.png";
import bcrypt from "./assets/tech_logo/bcrypt.png"
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mongoose from "./assets/tech_logo/mongoose.png"
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Certificates Section Logo's
import jsBasics from './assets/course_image/basicsjs.png';
import html_css_tailwindcss from "./assets/course_image/html_css_tailwindcss.png";
import advancedjs from "./assets/course_image/Advancedjs.png";
import reactjs from "./assets/course_image/Reactjs.png";
import database from "./assets/course_image/database.png";
import nodejs from "./assets/course_image/nodejs.png";
import final from "./assets/course_image/final.png";


// Project Section Logo's
import auction from './assets/work_logo/auction.png';
import receipe from './assets/work_logo/receipe.png';
import tracker from './assets/work_logo/tracker.png';



export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML5', logo: htmlLogo },
            { name: 'CSS3', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'TailwindCSS', logo: tailwindcssLogo },
            { name: 'GSAP', logo: gsapLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
            { name: 'Three JS', logo: three },

        ],
    },
    {
        title: 'Backend',
        skills: [

            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'REST API', logo: restapi },
            { name: 'bcrypt', logo: bcrypt },
            { name: 'Middleware', logo: middleware },
            { name: 'JWT', logo: jwt },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'Mongoose', logo: mongoose },
            { name: 'MySQL', logo: mysqlLogo },
        ],
    },
    {
        title: 'API Integration',
        skills: [
            { name: 'Fake Store API', logo: fakestoreapi },
            { name: 'OMDB API', logo: omdb },
            { name: 'Stripe', logo: stripe },
            { name: 'Razorpay', logo: razorpay },


        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: mcLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];

export const certificate = [
    {
        id: 0,
        title: "Basics JavaScript",
        issuer: "GUVI Geek Network",
        date: "April 2025",
        image: jsBasics,
        description: "Completed JavaScript Basics in Full Stack Development Programme",
        skills: ["Basics Javascript"],
        fullText: `This is to certify that`
    },
    {
        id: 1,
        title: "HTML5, CSS3, Tailwind CSS",
        issuer: "GUVI Geek Network",
        date: "April 2025",
        image: html_css_tailwindcss,
        description: "Completed HTML, CSS, Tailwind CSS in Full Stack Development Programme",
        skills: ["Basics Javascript"],
        fullText: `This is to certify that`
    },
    {
        id: 2,
        title: "Advanced Javascript",
        issuer: "GUVI Geek Network",
        date: "April 2025",
        image: advancedjs,
        description: "Completed Advanced Javascript in Full Stack Development Programme",
        skills: ["Advanced JS"],
        fullText: `This is to certify that`
    },
    {
        id: 3,
        title: "ReactJS",
        issuer: "GUVI Geek Network",
        date: "April 2025",
        image: reactjs,
        description: "Completed ReactJS in Full Stack Development Programme",
        skills: ["ReactJS"],
        fullText: `This is to certify that`
    },
    {
        id: 4,
        title: "Database",
        issuer: "GUVI Geek Network",
        date: "April 2025",
        image: database,
        description: "Completed Database in Full Stack Development Programme",
        skills: ["Database"],
        fullText: `This is to certify that`
    },
    {
        id: 5,
        title: "NodeJS",
        issuer: "GUVI Geek Network",
        date: "April 2025",
        image: nodejs,
        description: "Completed NodeJS in Full Stack Development Programme",
        skills: ["NodeJS"],
        fullText: `This is to certify that`
    },
    {
        id: 6,
        title: "MERN FullStack Developement With AI Tools",
        issuer: "GUVI Geek Network",
        date: "April 2025",
        image: final,
        description: "Completed Full Stack Development With AI Tools",
        skills: ["FullStack Developer"],
        fullText: `This is to certify that`
    },

];


export const projects = [
    {
        id: 0,
        title: "Auction Platform",
        description: "Develop an Auction Platform that allows users to register, view item details, and place bids, while sellers can manage their products, create auctions, and oversee bidding processes. The platform handles various auction types, provides notifications for bid activities, and facilitates inventory management.",
        tags: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "SendGrid"],
        github: "https://github.com/risudev/MERN_AUCTION_PLATFORM_FRONTEND.git",
        webapp: "https://spontaneous-belekoy-9cf309.netlify.app/",
        image: auction
    },

    {
        id: 1,
        title: "Recipe App",
        description:
            "A dynamic recipe application enabling users to browse, search, and filter recipes from a public meals API. Features include detailed recipe views, category and ingredient filters, and a responsive UI built with React and TailwindCSS.",
        tags: ["React", "TailwindCSS", "Axios", "API Integration", "Responsive UI"],
        github: "https://github.com/risudev/Recipe-Web-App.git",
        webapp: "https://recipewebapplication.netlify.app/",
        image: receipe, // Make sure to have this image in your public folder
    },

    {
        id: 2,
        title: "Smart Expense Tracker",
        description:
            "A smart expense tracking app built with React and TailwindCSS that lets users add, categorize, filter, and visualize their daily expenses. Features dynamic charts for spending analysis and uses localStorage to persist data across sessions.",
        tags: ["React", "TailwindCSS", "localStorage", "Chart.js", "Data Visualization"],
        github: "https://github.com/risudev/Smart-Expense-Tracker-.git",
        webapp: "https://expensetrackersmart.netlify.app/",
        image: tracker // Add appropriate image in your public folder
    }

];

