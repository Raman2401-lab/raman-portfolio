import { FaLightbulb, FaPaintBrush,FaUsers, FaCode, FaReact, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { SiSpringboot, SiRazorpay, SiTailwindcss, SiFramer,SiJavascript } from "react-icons/si";

import profileImg from '../assets/Profile.jpg';
import projetImg from '../assets/Project.png';
import portfolioImg from '../assets/portfolioImg.png'


export const assets = {
    profileImg,
    projetImg,
    
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I enjoy creating simple and effective solutions using modern technologies.',
      color: 'text-purple'
    },
    {
      icon: FaUsers,
      title: "Team Player",
      description: "I enjoy collaborating with others to create impactful digital experiences."
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write clean, simple, and maintainable code that is easy to understand and useful for future development.',
      color: 'text-blue'
    },
    
  ];

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React.js','CSS','HTML-5']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Java','.NET',' Node.js']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MySQL', 'MongoDB', ]
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Using essential tools for version control, debugging, and efficient development workflows.',
    tags: ['Git & GitHub', 'STS', 'VS Code', 'MySQL Workbench']
  },
  {
    title: 'REST API Development',
    icon: FaCode,
    description: 'Designing and developing secure, scalable RESTful APIs for seamless communication between frontend and backend.',
    tags: ['REST', 'Postman', 'JSON']
  },
  {
  title: 'Adaptability',
  icon: FaUsers,
  description: 'Quickly adapting to new tools, technologies, and challenges with a strong learning mindset.',
  tags: ['Quick Learner', 'Flexibility', 'Growth Mindset']
  },
 
];

export const projects = [
  {
     title: "Tiffin Trail WebApp",
     description:"A full-stack meal subscription platform with secure login, role-based access, online payments, and a responsive React + Spring Boot setup.",
     image: projetImg,
     tech: ["React.js", "Spring Boot", "MySQL", "Razorpay"],
     icons: [FaReact, SiSpringboot, FaDatabase, SiRazorpay],
     demo: "#",
     code: "#",
     
  },
  {
     title: "Portfolio Website",
     description: "Showcasing my work through a responsive, React-powered portfolio styled with Tailwind CSS.",
     image: portfolioImg,
     tech: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
     icons: [FaReact, SiTailwindcss, SiJavascript],
     demo: "#",
     code: "#",
  }
];


