import airline from './images/flight-manager.png';
import visaid from './images/visaid.jpg';
import website from './images/personal-website.png';
import draft from './images/draft.jpg';
import connect_four from './images/connect-four.jpg';
import hintcode from './images/hintcode.png';

const logotext = "RHP";
const meta = {
    title: "Raj Patel",
    description: "I'm Raj Patel data scientist _ Full stack devloper, a student at Univerity of Washington",
};

const introdata = {
    title: "I'm Raj Patel,",
    animated: {
        first: "I do Software Engineering",
        second: "I love coding",
        third: "I make cool projects",
    },
    description: "Hello, I am currently a student at the University of Washington pursuing a " +
                 "Computer Science Degree with a Minor in Business Administration. I am a " +
                 "passionate software engineer with a strong interest in building efficient and " +
                 "scalable applications. I am currently looking for opportunities to work on " +
                 "real-world projects and expand my skills. I have experience in multiple " +
                 "programming languages such as Java, C/C++, Python, and a few others. Feel free " +
                 "to check out my portfolio or contact me if you would like!",
    your_img_url: "img/personal-image",
};

const dataabout = {
    aboutme: "I am a problem-solver with a passion for technology, organization, and " +
             "efficiency. My skills include project management, technical problem-solving, " +
             "communication, and customer service. I also have a long history of volunteering, " +
             "with over 500 hours of community service. I thrive in dynamic environments where " +
             "I can apply analytical thinking and adaptability to tackle challenges. With a " +
             "strong foundation in teamwork and leadership, I am always eager to learn, grow, " +
             "and contribute to meaningful projects.",
};

const worktimeline = [
    {
        jobtitle: "Assistant Manager",
        where: "Walla Walla SureStay Hotel",
        date: "Dec 2021 - Present",
    },
    {
        jobtitle: "Student Assistant",
        where: "Seattle MCB Grad Program",
        date: "Aug 2024 - Present",
    },
    {
        jobtitle: "Specialist",
        where: "Apple",
        date: "2024-2025",
    },
    {
        jobtitle: "Assistant Manager",
        where: "Walla Walla Travelodge Hotel",
        date: "Jun 2016 - Nov 2021",
    }
];

const volunteertimeline = [
    {
        jobtitle: "Organizer/Coordinator",
        where: "Food Drive",
        date: "May 2022",
    },
    {
        jobtitle: "Volunteer",
        where: "Walla Walla Public Library",
        date: "2016 - 2022",
    },
    {
        jobtitle: "Volunteer",
        where: "Blue Mountain Humane Society",
        date: "2018 - 2021",
    },
    {
        jobtitle: "Volunteer",
        where: "Whitman Place Senior Center",
        date: "2019 - 2020",
    },
    {
        jobtitle: "Volunteer",
        where: "Washington Odd Fellows Home",
        date: "2017",
    }
];

const skills = [
    {
        name: "Java",
        value: 100,
    },
    {
        name: "HTML/CSS",
        value: 95,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "Python",
        value: 85,
    },
    {
        name: "SQL",
        value: 80,
    },
    {
        name: "C/C++",
        value: 70,
    },
    {
        name: "TypeScript",
        value: 60,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Node.js",
        value: 70,
    },
];

const dataportfolio = [
    {
        title: "HintCode AI Extension",
        img: hintcode,
        description: "A browser extension that seamlessly integrates with LeetCode, leveraging " +
                     "AI-generated hints to enhance real-time problem-solving. Implemented " +
                     "AI-driven hint generation using Gemini 1.5 Flash, optimizing response " +
                     "accuracy and contextual relevance for algorithmic coding challenges. " +
                     "Developed CI/CD pipelines using GitHub Actions to automate testing, " +
                     "building, and deployment, ensuring a streamlined development workflow.",
        link: "https://chromewebstore.google.com/detail/hintcode/hpehhabpjldkfbbjggeeajmcjkmlhfbe",
    },
    {
        title: "Draft Application",
        img: draft,
        description: "Full-stack web application for conducting item drafts using a " +
                     "client-server architecture. Users to create, join, and participate in " +
                     "real-time drafts, with dynamic updates and error handling. The project " +
                     "was built using JavaScript, Node.js, and front-end technologies, with a " +
                     "focus on scalability and user experience.",
        link: "https://github.com/RHP1174/Draft",
    },
    {
        title: "Personal Website",
        img: website,
        description: "Designed and developed a personal portfolio website showcasing projects, " +
             "skills, and experiences with a sleek and responsive UI. Built using React and " +
             "Bootstrap for a modern and interactive design, with React-Helmet for SEO " +
             "optimization. Integrated dynamic content handling with JavaScript and leveraged " +
             "React Icons for visual enhancements. Ensured smooth navigation and a structured " +
             "layout to provide an engaging user experience.",
        link: "https://github.com/RHP1174/Personal-Website",
    },
    {
        title: "Flight Application",
        img: airline,
        description: "Developed an airline management app in Java with user accounts, flight " + 
                     "searches, and reservations. Built a SQL-backed system ensuring data " + 
                     "consistency and secure authentication with salted password hashing.",
        link: "https://github.com/RHP1174/FlightApp",
    },
    {
        title: "VisAId",
        img: visaid,
        description: "Developed an AI powered visual to audio program that takes in camera " + 
                     "inputs and converts it to speech in real-time. Made for the visually " + 
                     "impaired using Ultralytics, CVzone, and integrated LLaMA3 and PyTorch for " +
                     "detailed environmental analysis to assist users with audio descriptions " + 
                     "of their surroundings. Incorporated text-to-speech functionality using " + 
                     "pyttsx3 to communicate real-time insights effectively.",
        link: "https://github.com/RHP1174/VisAId",
    },
    {
        title: "Connect Four Game",
        img: connect_four,
        description: "Developed a simple Connect Four console application that is Java-based. " +
                     "It features turn-based gameplay, automatic win detection, an optional " +
                     "undo mechanism, and robust error handling. Built using Object-Oriented " +
                     "Programming principles, it follows the Strategy Pattern with an interface " +
                     "for flexibility.",
        link: "https://github.com/RHP1174/ConnectFour",
    },
];

const contactConfig = {
    description: "If you would like to contact me, feel free to do so below. Thank you!",
    YOUR_SERVICE_ID: "service_6ckcpjv",
    YOUR_TEMPLATE_ID: "template_7wdshdy",
    YOUR_PUBLIC_KEY: "WF1va4f_ZX8VAsGEJ",
};

const socialprofils = {
    github: "https://github.com/RHP1174",
    linkedin: "https://linkedin.com/in/RajHPatel1174"
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    volunteertimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};