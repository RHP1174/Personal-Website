import airline from './assets/images/airline_management.png';

const logotext = "RHP";
const meta = {
    title: "Raj Patel",
    description: "I’m Raj Patel data scientist _ Full stack devloper, a student at Univerity of Washington",
};

const introdata = {
    title: "I’m Raj Patel,",
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
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
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
        title: "Project 1",
        img: "https://picsum.photos/400/700/?grayscale",
        description: "1",
        link: "#",
    },
    {
        title: "Project 1",
        img: "https://picsum.photos/400/800/?grayscale",
        description: "3",
        link: "#",
    },
    {
        title: "Project 1",
        img: "https://picsum.photos/400/?grayscale",
        description: "5",
        link: "#",
    },
    {
        title: "Project 1",
        img: airline,
        description: "Developed an airline management app in Java with user accounts, flight " + 
                     "searches, and reservations. Built a SQL-backed system ensuring data " + 
                     "consistency and secure authentication with salted password hashing.",
        link: "https://github.com/RHP1174/FlightApp",
    },
    {
        title: "Project 1",
        img: "https://picsum.photos/400/300/?grayscale",
        description: "4",
        link: "#",
    },
    {
        title: "Project 1",
        img: "https://picsum.photos/400/700/?grayscale",
        description: "6",
        link: "#",
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