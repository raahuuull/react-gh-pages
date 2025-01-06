import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  FaPython,
  FaTerminal,
  FaDatabase,
  FaDocker,
  // FaKubernetes,
  FaJenkins,
  FaGit,
  FaGithub,
  FaGitlab,
  FaAws,
  // FaMicrosoft,
  FaLinux,
  FaWindows,
  FaApple,
  // FaCloud,
  FaCode,
} from "react-icons/fa";
import {
  SiTerraform,
  SiHelm,
  SiPrometheus,
  SiGrafana,
  SiSonarqube,
  SiVmware,
  // SiAzure,
  SiSnowflake,
  // SiDynamodb,
  SiMysql,
  SiAnsible,
  SiAmazondynamodb,
  // SiMacos,
} from "react-icons/si";

export const skills = {
  title: "My Skills",
  description: "I have expertise in the following technologies and tools:",

  skillList: [
    // Scripting Languages
    { icon: <FaPython />, name: "Python" },
    { icon: <FaTerminal />, name: "Bash" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <FaCode />, name: "Groovy" },
    { icon: <FaTerminal />, name: "PowerShell" },

    // Databases
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaDatabase />, name: "RDS" },
    { icon: <SiAmazondynamodb />, name: "DynamoDB" },
    { icon: <SiSnowflake />, name: "Snowflake" },

    // DevOps Tools
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaCode />, name: "Kubernetes" }, //not correct
    { icon: <SiHelm />, name: "Helm" },
    { icon: <FaJenkins />, name: "Jenkins" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub Actions" },
    { icon: <FaGitlab />, name: "GitLab CI" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <SiAnsible />, name: "Ansible" },
    { icon: <SiPrometheus />, name: "Prometheus" },
    { icon: <SiGrafana />, name: "Grafana" },
    { icon: <SiSonarqube />, name: "SonarQube" },
    { icon: <FaCode />, name: "Agile" },
    { icon: <FaCode />, name: "Scrum" },
    { icon: <FaCode />, name: "YAML" },

    // Cloud
    { icon: <FaAws />, name: "AWS" },
    // { icon: <SiAzure />, name: "Azure" },
    { icon: <SiVmware />, name: "VMware" },

    // Operating Systems
    { icon: <FaLinux />, name: "Linux (Ubuntu, Amazon Linux)" },
    { icon: <FaWindows />, name: "Windows Server" },
    { icon: <FaApple />, name: "MacOS" },

    // Soft Skills
    { icon: <FaCode />, name: "Communication" },
    { icon: <FaCode />, name: "Team Collaboration" },
    { icon: <FaCode />, name: "Problem-solving" },
    { icon: <FaCode />, name: "Time Management" },
    { icon: <FaCode />, name: "Digital Literacy" },
    { icon: <FaCode />, name: "Leadership" },
  ],
};

export const emailDetails = {
  "Service ID": " ", //Service ID
  "Template ID": " ", //Template ID
  "Public Key": " ", //Public Key
};

export const phoneRegex = /^(\+\d{1,3}[-\s]?)?(\d{3}[-\s]?\d{3}[-\s]?\d{4})$/;

export const user = {
  firstName: "Rahul",
  lastName: "Bandharam",
  fullName: "Rahul Bandharam",
  designation: "DevOps Engineer",

  email: "rahul.bandharam1@gmail.com",
  phone: "+1-4377715152",
  yearsOfExperience: "3",
  address: "Toronto, Canada",
  bio: "I bridge development and operations, streamlining processes and ensuring seamless deployment of scalable, high-performance applications.",
  stats: [
    { num: 3, text: "Years of Experience" },
    { num: 4, text: "Project Completed" },
    { num: skills.skillList.length, text: "Technology mastered" },
  ],
  resumeURL: "Resume.pdf",
  hireme: "",
  socialsLinks: [
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/rahulbandharam/",
      title: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      path: "https://github.com/raahuuull",
      title: "GitHub",
    },
    {
      icon: <FaEnvelope />,
      path: "mailto:rahul.bandharam1@gmail.com",
      title: "Email",
    },
  ],
};

// export const projects = [
//   {
//     num: "01",
//     category: "Frontend",
//     title: "Pig Game",
//     description:
//       "The Pig Game is a two-player dice game. Players take turns rolling a dice to accumulate points, and the first player to reach 100 points wins. It's a simple yet engaging browser-based game to demonstrate basic web development and DOM manipulation skills.",
//     stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
//     image: "/project-image/piggame.png",
//     live: " ",
//     github: " ",
//   },
//   {
//     num: "02",
//     category: "Frontend",
//     title: "HireSphere",
//     description:
//       "A fully responsive Job Portal web application. The app supports CRUD operations (Create, Read, Update, Delete) for job listings.",
//     stack: [{ name: "React" }, { name: "Tailwind" }, { name: "JSON Server" }],
//     image: "/project-image/hiresphere.png",
//     live: " ",
//     github: " ",
//   },
//   {
//     num: "03",
//     category: "Frontend",
//     title: "Port A1",
//     description: "A landing page for portfolio website.",
//     stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
//     image: "/project-image/porta1.png",
//     live: " ",
//     github: " ",
//   },
//   {
//     num: "04",
//     category: "Frontend",
//     title: "Omni Banklit",
//     description: "A landing page for bank website.",
//     stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
//     image: "/project-image/omnibanklit.png",
//     live: " ",
//     github: " ",
//   },
// ];
export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

export const projects = [
  {
    num: "01",
    category: "certificate",
    title: "Certified Kubernetes Administrator (CKA)",
    description: "idk",
    stack: [],
    image: "/project-image/CKA.png",
    live: "https://www.credly.com/badges/3c79927c-0af8-4ac4-b305-59f6fe3ecb93/public_url",
    github: "",
  },
  {
    num: "02",
    category: "certificate",
    title: "Certified Kubernetes Application Developer (CKAD)",
    description: "idk",
    stack: [],
    image: "/project-image/CKAD.png",
    live: "https://www.credly.com/badges/456f6fd2-03f4-4b85-b7a1-2e3bc482f838/public_url",
    github: "",
  },
  {
    num: "03",
    category: "certificate",
    title: "AWS Certified Cloud Practitioner Foundational",
    description: "idk",
    stack: [],
    image: "/project-image/AWS.png",
    live: "https://www.credly.com/badges/2f882995-8771-469c-b576-61d69c2c5a90",
    github: "",
  },
];

export const experience = {
  icon: "",
  title: "My Experience",
  description: `I have total of ${user.yearsOfExperience} years of experience in IT.`,
  items: [
    {
      company: "Technology Markerting and Sourcing (TMS)",
      position: "Associate DevOps Engineer",
      duration: "June 2022 – Present",
    },
    {
      company: "Technology Markerting and Sourcing (TMS)",
      position: "Junior DevOps Engineer",
      duration: "Nov 2021 – June 2022",
    },
  ],
};

export const eduction = {
  icon: "",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Loyalist College, Toronto, Canada",
      degree: "Post Graduate Diploma in Project Management",
      duration: "Jan 2021 - Aug 2021",
    },
    {
      institution: "George Brown College, Toronto, Canada ",
      degree:
        "Post Graduate Diploma in Mobile Application Development and Strategy",
      duration: "Jan 2020 - Dec 2020",
    },
    {
      institution:
        "Jawaharlal Nehru Technological University, Hyderabad, India",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "Aug 2015 - July 2019",
    },
  ],
};

export const about = {
  title: "About me",
  description:
    "If you're looking for someone who combines technical expertise, problem-solving abilities, and a strong sense of ownership, I'm confident I’d be a valuable addition to your team.",
  info: [
    {
      fieldName: "Name",
      fieldValue: user.fullName,
    },
    {
      fieldName: "Email",
      fieldValue: user.email,
    },
    {
      fieldName: "Phone",
      fieldValue: user.phone,
    },
    {
      fieldName: "Experience",
      fieldValue: `${user.yearsOfExperience}+ Years`,
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

export const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: user.phone },
  { icon: <FaEnvelope />, title: "Email", description: user.email },
  { icon: <FaMapMarkerAlt />, title: "Address", description: user.address },
];

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Certification",
    path: "/work",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

// export const services = [
//   {
//     num: "01",
//     title: "Web Devlopment",
//     description: "Lorem ipsum dolor sit amet",
//     href: "",
//   },
//   {
//     num: "02",
//     title: "UI/UX Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem enim commodi pariatur ",
//     href: "",
//   },
//   {
//     num: "03",
//     title: "Logo Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem enim commodi pariatur ",
//     href: "",
//   },
//   {
//     num: "04",
//     title: "SED",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem enim commodi pariatur ",
//     href: "",
//   },
// ];
