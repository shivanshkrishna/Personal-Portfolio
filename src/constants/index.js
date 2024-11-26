export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Cara - Online Store",
    desc: "Cara is an intuitive online store UI built with HTML, CSS, and JavaScript. It offers a modern and responsive interface, providing users with a seamless shopping experience.",
    subdesc:
      "Developed using pure HTML, CSS, and JavaScript, Cara focuses on delivering a clean and easy-to-use UI for online shopping, with optimized performance for all devices.",
    href: "https://carastoreonline.netlify.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/css.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.svg",
      },
    ],
  },
  {
    title: "SK CARE - Online Appointment Booking Platform",
    desc: "SK CARE is a comprehensive online appointment booking platform that allows users to book appointments with various doctors registered at SK CARE. It streamlines the booking process for patients and doctors alike.",
    subdesc:
      "Built with the MERN stack, SK CARE offers a seamless interface for managing appointments, doctor profiles, and patient bookings, ensuring a hassle-free healthcare experience.",
    href: "https://hospital-management-system-sk.netlify.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/express.svg",
      },
      {
        id: 3,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/node.svg",
      },
    ],
  },
  {
    title: "DeskChat - Online Chat Application",
    desc: "DeskChat is a dynamic online chat application where users can engage in group chats or private conversations. It offers real-time communication with powerful features like user authentication and group creation.",
    subdesc:
      "Developed with the MERN stack, Zustand, and Socket.io, DeskChat provides a real-time and reliable messaging experience, focusing on performance and scalability.",
    href: "https://deskchat.onrender.com/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/express.svg",
      },
      {
        id: 3,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/node.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Teevr",
    pos: "Lead Web,App Developer",
    duration: "2024 - Present",
    title:
      "Teevr is an automotive company advancing in the world of automotives. I'm responsible for the development of the web and mobile applications.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Care For Good",
    pos: "Founder",
    duration: "2022 - 2024",
    title:
      "Started an initiative to combat substance abuse among the needy , also developed the tech infrastructure.",
    icon: "/assets/cfg.webp",
    animation: "clapping",
  },
  {
    id: 3,
    name: "CodSoft",
    pos: "Web Developer Intern",
    duration: "2019 - 2020",
    title:
      "Crafted a web application for a startup. I helped in the development of the web and mobile applications.",
    icon: "/assets/codsoft.webp",
    animation: "salute",
  },
];
