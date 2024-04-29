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
    memories,
    letflix,
    reactcart,
    glocify,
    weather,
    emp,
    gcp,
    github,
    linkedin,
    twitter,
    ace,
    leetcode,
    gfg,
    hackerrank
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

  const achievements = [
    {
      title: "Google Certified Cloud Associate Engineer",
      image: ace,
      link: "https://drive.google.com/file/d/1LfGEiho0BM3f9o4AwvEY5sRxzllqA8ui/view?usp=sharing"
    },
   
    {
      title: "Solved 430+ DSA problmes",
      image: leetcode,
      link: "https://leetcode.com/ajay_yadav/"
    },
    {
      title: "Solved 100+ DSA problems",
      image: gfg,
      link: "https://www.geeksforgeeks.org/user/ajaycu23/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
    },
    {
      title: "6 ⭐ Problem Solver",
      image: hackerrank,
      link: "https://www.hackerrank.com/profile/Ajay_Kumar"
    },
  ]
  
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
      name: "Memories",
      description:
        "Memory Book is a social sharing platform enabling users to create and share memories from significant life events. Capture cherished moments and share them with friends and family, fostering connections and preserving precious memories.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "materialui",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "render",
          color: "green-text-gradient",
        },
        {
          name: "vercel",
          color: "blue-text-gradient",
        },
      ],
      image: memories,
      source_code_link: "https://memoriesbook.vercel.app/",
    },
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
      name: "EMP",
      description:
        "Collaborated with an ML engineer. Utilized Paillier scheme for homomorphic encryption to encrypt sensitive medical data, ensuring privacy. Leveraged AWS-S3 bucket for storage and executed a predictive model hosted on AWS Lambda functions, for breast cancer diagnosis. Upon completion, the system securely downloads and decrypts results, providing accurate predictions while maintaining data confidentiality.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
       
      ],
      image: emp,
      source_code_link: "https://drive.google.com/file/d/1PfNxv2OKBC0ZtAQZS8jpzVkN-mq_PPxo/view?usp=sharing",
    },

    {
      name: "React Shopping Cart",
      description:
        "Created a Shopping Cart Application using React.js, offering users a seamless shopping experience. The application allows users to browse products, add them to the cart, and manage quantities. With dynamic rendering and state management, users can easily view their selected items and proceed to checkout.",
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
  
  export { services, technologies, experiences, achievements, testimonials, projects, socials };