const skillsList = [
    { title: "React", value: 75 },
    { title: "React Redux", value: 80},
    { title: "Angular", value: 80 },
    { title: "Angular Material", value: 80 },
    { title: "NodeJS", value: 80 },
    { title: "ExpressJS", value: 70 },
    { title: "Python Flask", value: 70 },
    { title: "Python Django Rest Framework", value: 70 },
    { title: "NextJS", value: 50 },
    { title: "Ionic", value: 70 },
    { title: "Typescript", value: 80 },
    { title: "Javscript", value: 80 },
    { title: "HTML5", value: 90 },
    { title: "CSS3", value: 80 },
    { title: "LESS", value: 80 },
    { title: "SCSS", value: 80 },
    { title: "SASS", value: 80 },
    { title: "BootStrap", value: 70 },
    { title: "Tailwind", value: 70 },
    { title: "lodash", value: 70 },
    { title: "Wireframes", value: 70 },
    { title: "Responsive Web Design", value: 70 },
    { title: "MySql", value: 60 },
    { title: "NoSql", value: 60 },
    { title: "MongoDB", value: 60 },
    { title: "PostgreSQL", value: 60 },
    { title: "Restful Web APIs", value: 70 },
    { title: "Swagger", value: 80 },
    { title: "Fullstack", value: 80 },
    { title: "JWT", value: 60 },
    { title: "Problem Solving", value: 70 },
    { title: "Agile", value: 70 },
    { title: "Miro", value: 70 },
    { title: "Magic Pod", value: 70 },
    { title: "Jasmine", value: 70 },
    { title: "Jest", value: 70 },
    { title: "Mocha", value: 70 },
    { title: "Unit Testing", value: 60 },
    { title: "Deployment", value: 70 },
    { title: "Docker", value: 60 },
    { title: "Browser Testing", value: 80 },
    { title: "Debugging", value: 80 },
    { title: "Time management", value: 80 },
    { title: "Material UI", value: 70 },
    { title: "Antd", value: 70 },
    { title: "Google Cloud Console", value: 70 },
    { title: "Firebase", value: 70 },
    { title: "AWS Amplify", value: 80 },
    { title: "Open AI", value: 80 },
    { title: "Git, Gitlab, Github", value: 80 },
    { title: "Jira, Bitbucket", value: 80 },
    { title: "CI/CD", value: 60 },
];
const projectList = [
    {
        id: 1,
        title: "CRM",
        technologies: ["ReactJS", "MUI",  "NodeJS", "ExpressJS", "MongoDB Atlas"],
        frontImage: "crm.png",
    },
    {
        id: 2,
        title: "Telecaster",
        technologies: ["Angular", "Python Flask", "Google Cloud Console(NDB)"],
        frontImage: "telecaster.png",
    },
    {
        id: 3,
        title: "Odoo12",
        technologies: ["HTML, CSS, XML, Javascript, Python"],
        frontImage: "odoo.png",
    },
    {
        id: 4,
        title: "Online Aution System",
        technologies: ["React JS", "ANTD", "Node JS", "Express JS", "Swagger", "MySQL"],
        frontImage: "oas.png",
    },
    {
        id: 5,
        title: "Hoikuen",
        technologies: ["Angular", "Strapi", "Postgresql"],
        frontImage: "hoikuen.png",
    },
    {
        id: 6,
        title: "SKC",
        technologies: ["Angular", "Strapi", "Postgresql"],
        frontImage: "skc.png",
    },
];

const experienceList = [
    {
        id: 0,
        position: "Senior Full Stack Developer",
        company: "JMS-Untied Co.Ltd, Japan",
        links: {
            website: "https://www.jms-united.co.jp/",
        },
        tasks: [
            'Designed and implemented innovative features to enhance business functionality, leveraging React.js on the frontend and Node.js on the backend.',
            'Analyzed, bug fixed and maintained existing web components to ensure optimal performance and reliability.',
            'Developed, tested, and maintained interactive web applications, focusing on user experience and seamless functionality',
            'Collaborated cross-functionally with product, design, and engineering teams to develop internal products, ensuring seamless integration of features',
            'Developed web API integrations with ChatGpt and Other Bots'
        ]
    },
    {
        id: 1,
        position: "Senior Developer",
        company: "METATEAM MYANMAR",
        links: {
            website: "https://metateammyanmar.com/en/",
        },
        tasks: [
            'Investigated and developed core features for a high-traffic website using Agile methodology that increased website traffic by 25%.',
            'Designed and implemented maintainable and reusable code to improve website performance and user experience.',
            'Fixed bugs reported by users and automated testing using Jest and Magic Pod.',
            'Developed responsive design for all web browsers that improved user engagement by 20%.',
            'Worked closely with team members to troubleshoot issues and code collaboratively.',
            'Reviewed code to ensure it adhered to best practices and was of high quality.'
        ]
    },
    {
        id: 2,
        position: "Junior Developer",
        company: "METATEAM MYANMAR",
        links: {
            website: "https://metateammyanmar.com/en/",
        },
        tasks: [
            'Successfully delivered Natural Disaster Guideline website on time and within budget and it become successful and include in japanese news.',
            'Developed a POS Ionic application that improved the checkout process and increased sales.',
            'Developed an Employee Management System Ionic application that streamlined employee onboarding and performance management.',
            'Developed a Job Search site that received positive user feedback and increased traffic.',
            'Developed multiple modules for Odoo 12, which enhanced the software functionality and usability.'
        ]
    },
];

export { skillsList, projectList, experienceList };
