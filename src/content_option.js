import airline from './images/flight-manager.png';
import visaid from './images/visaid.jpg';
import draft from './images/draft.jpg';
import connect_four from './images/connect-four.jpg';

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
    description: "Hello, my name is Raj Patel. I was born in India and moved to the United " + 
                 "States in 2010. Since then, I have loved computers. This led me to the " + 
                 "decision of pursuing a Computer Science Degree at the University of " +
                 "Washington. I am currently an upcoming Senior in the Paul G. Allen School of " + 
                 "Computer Science and Engineering. I am also pursuing a Minor in Business " +
                 "Administration. I am currently pursuing a future career in Software " + 
                 "Development and have a lot of expertise in multiple programming languages " +
                 "like Java, C/C++, Pyhon, etc. Outside of school, I love to play sports, " +
                 "ride my bike, and go hiking. I am also in a lot of clubs and RSOs. In " +
                 "addition, I also love to volunteer and have accumulated over 500 hours " +
                 "of community service.",
    your_img_url: "img/personal-image",
};

const dataabout = {
    aboutme: "I am a problem-solver with a passion for technology, organization, and " +
             "efficiency. My skills include project management, technical problem-solving, " +
             "communication, and customer service. I thrive in dynamic environments where I can " +
             "apply analytical thinking and adaptability to tackle challenges. With a strong " +
             "foundation in teamwork and leadership, I am always eager to learn, grow, and " +
             "contribute to meaningful projects.",
};
const worktimeline = [{
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

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const dataportfolio = [{
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
        title: "Personal Website",
        img: "https://picsum.photos/400/800/?grayscale",
        description: "3",
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
        title: "Connect Four Game",
        img: connect_four,
        description: "Developed a simple Connect Four console application that is Java-based." +
                     "It features turn-based gameplay, automatic win detection, an optional " +
                     "undo mechanism, and robust error handling. Built using Object-Oriented " +
                     "Programming principles, it follows the Strategy Pattern with an interface " +
                     "for flexibility.",
        link: "https://github.com/RHP1174/ConnectFour",
    },
];

const contactConfig = {
    description: "If you would like to contact me, feel free to do so below. Thank you!",
    // https://www.emailjs.com/docs/examples/reactjs/
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
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};