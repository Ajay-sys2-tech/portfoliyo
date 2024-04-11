import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Engineer Intern",
      company_name: "TCS",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2022 - July 2022",
      points: [
        "Engaged in a transformative internship experience at Tata Consultancy Services (TCS) as a Machine Learning Intern, contributing to a cutting-edge medical research project.",
        "Leveraged my expertise in machine learning to develop and implement functions focused on Natural Language Processing (NLP), enhancing data analysis capabilities for medical research purposes.",
        "Collaborated closely with a multidisciplinary team of researchers and developers to refine algorithms and methodologies, ensuring the accuracy and efficacy of NLP-based solutions.",
        "Actively participated in project discussions and brainstorming sessions, contributing innovative ideas and insights to drive project progress and success.",
      ],
    },
    {
      title: "Software Engineer Trainee",
      company_name: "Persistent Systems",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - May 2023",
      points: [
        "Gained industry experience at Persistent Systems, exploring diverse technologies.",
        "Mastered Java and Spring Boot for building robust applications.",
        "Specialized in Spring MVC, Spring Data, and Spring Security frameworks.",
        "Explored cloud platforms like AWS and GCP for enterprise applications.",
        "Developed proficiency in front-end technologies (HTML, CSS, JavaScript).",
        "Utilized Git for collaborative development and maintaining codebase integrity.",
        "Acquired knowledge in Docker for containerization.",
        "Learned Kubernetes for container orchestration.",
        "Applied theoretical concepts in real-world projects, refining problem-solving skills.",
      ],
    },
    {
      title: "Full Stack Engineer Intern",
      company_name: "Vitto Microfinance.AI",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2023 - Sept 2023",
      points: [
       "During my immersive Full Stack internship in a dynamic fintech startup, I spearheaded various projects leveraging the PERN stack",
       "Optimized API for paginated data, cutting call time by 50%.",
       "Upgraded UI for enhanced user experience.",
       "Implemented CSV export for streamlined data analysis across admin pages.",
       "Developed bulk customized notification feature, boosting user engagement by 25% and retention by 15%.",
       "Migrated 40% of API from JavaScript to TypeScript, improving maintainability and typing.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };