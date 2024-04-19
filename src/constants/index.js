import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    java,
    spring, 
    mysql,
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
    tcs,
    persistent,
    vitto,
    letflix,
    reactcart,
    glocify,
    weather,
    gcp,
    github,
    linkedin,
    twitter
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
      title: "Frontend Developer",
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
      name: "Java",
      icon: java,
    },
    // {
    //   name: "Spring",
    //   icon: spring,
    // },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "GCP",
      icon: gcp,
    },
  ];

  const socials = [
    { title: "github",
      icon: github,
      link: "https://github.com/Ajay-sys2-tech"
    },

    { title: "linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/ajay-yadav-735380176/"
    },

    { title: "twitter",
      icon: twitter,
      link: "https://twitter.com/AjayYadav_io"
    },

  ]
  
  const experiences = [
    {
      title: "Machine Learning Engineer Intern",
      company_name: "TCS",
      icon: tcs,
      iconBg: "#000000",
      date: "June 2022 - July 2022",
      points: [
        "Developed NLP functions for medical research data analysis.",
        "Collaborated with multidisciplinary team to refine algorithms.",
        "Demonstrated strong problem-solving skills in optimizing NLP algorithms.",
      ],
    },
    {
      title: "Software Engineer Trainee",
      company_name: "Persistent Systems",
      icon: persistent,
      iconBg: "#554b59",
      date: "Dec 2022 - May 2023",
      points: [
        "Mastered Java and Spring Boot for building robust applications.",
        "Specialized in Spring MVC, Spring Data, and Spring Security frameworks.",
        "Explored cloud platforms like AWS and GCP for enterprise applications.",
        "Developed proficiency in front-end technologies (HTML, CSS, JavaScript).",
        "Utilized Git for collaborative development and maintaining codebase integrity.",
        "Acquired knowledge in Docker for containerization.",
        "Applied theoretical concepts in real-world projects, refining problem-solving skills.",
      ],
    },
    {
      title: "Full Stack Engineer Intern",
      company_name: "Vitto Microfinance.AI",
      icon: vitto,
      iconBg: "#FFFFFF",
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
      title: "Software Engineer",
      company_name: "Persistent Systems",
      icon: persistent,
      iconBg: "#554b59",
      date: "Sept 2023 - Present",
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
      name: "Letflix",
      description:
        "A Movie Searching Website featuring sleek animations and a Dark Mode option for enhanced user experience. Designed with modern aesthetics, users can effortlessly search for movies, explore details, and toggle between light and dark themes for personalized viewing.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: letflix,
      source_code_link: "https://letflix-vert.vercel.app/",
    },
    {
      name: "E-commerce with Payment System",
      description:
        "An E-commerce platform with integrated Razorpay for secure online transactions. Developed intuitive user interface and robust backend functionality, ensuring seamless shopping experience and efficient order processing.",
      tags: [
        {
          name: "html/css",
          color: "blue-text-gradient",
        },
        {
          name: "handlebars",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: glocify,
      source_code_link: "https://glocify.onrender.com/",
    },
    {
      name: "Weather App",
      description:
        "A Weather Application enabling users to search and check weather conditions for any city worldwide. The app provides real-time weather updates. With a user-friendly interface and intuitive search functionality, this project showcases proficiency in app development and integration with weather APIs for dynamic data retrieval.",
      tags: [
        {
          name: "html/css",
          color: "blue-text-gradient",
        },
        {
          name: "third-party api",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://howstheweather.onrender.com/",
    },

    {
      name: "React Shopping Cart",
      description:
        "A React.js Shopping Cart for seamless product browsing, selection, and checkout. Allows users to add, view, and manage items in the cart dynamically.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
       
      ],
      image: reactcart,
      source_code_link: "https://react-shopping-cart-23.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, socials };