export const personalInfo = {
    name: "Abhishek Kumar Gupta",
    email: "iamabhi1373@gmail.com",
    phone: "+91-6386565531",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-gupta-627985251/",
    github: "https://github.com/iamabhi1373",
    title: "AI/ML Engineer",
    subtitles: [
      "AI/ML Engineer", 
      "Data Science Specialist", 
      "Competitive Programmer", 
      "Full-Stack Developer"
    ]
  };
  
  export const achievements = [
    {
      platform: "LeetCode",
      icon: "code",
      problemsSolved: 585,
      rating: 1530,
      description: "Problems Solved",
      color: "cyber-green",
      username: "iamabhi1373",
      profileUrl: "https://leetcode.com/iamabhi1373"
    },
    {
      platform: "CodeChef",
      icon: "utensils", 
      rating: 1470,
      rank: 370,
      description: "Rating (2-star) | Best Rank: 370",
      color: "cyber-blue",
      username: "iamabhi1373",
      profileUrl: "https://www.codechef.com/users/iamabhi1373"
    },
    {
      platform: "Codeforces",
      icon: "fighter-jet",
      rating: 1539,
      rank: 664,
      description: "Rating (Specialist) | Best Rank: 664",
      color: "cyber-purple",
      username: "iamabhi1373",
      profileUrl: "https://codeforces.com/profile/iamabhi1373"
    }
  ];
  
  export const competitionWins = {
    ideathonWins: 2,
    codeRelayWins: 1,
    totalWinnings: 16000,
    prizes: ["₹12,500", "₹2,500", "₹1,000"],
    description: "2× Ideathon Winner + 1× CodeRelay Winner"
  };

  export const experience = [
    {
      title: "Summer Intern, Data Analytics Lab",
      company: "IIIT Allahabad (IIITA)",
      period: "May 2025 – July 2025",
      description: "Worked under Dr. Manish Kumar on Alzheimer's disease prediction using federated learning.",
      icon: "university"
    },
    {
      title: "Amazon ML Summer School 2025",
      company: "Amazon (Remote)",
      period: "Aug 2025 (Current)",
      description: "Selected among the top 3,000 out of 60,000+ applicants for Amazon's ML School.",
      icon: "graduation-cap"
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Deep Learning-based OCR System for Handwritten Text Recognition and Language Translation",
      description: "Implemented an OCR and translation pipeline, increasing handwritten text recognition accuracy from 81% to 97.33% using cloud-based Vision OCR. Deployed via Streamlit with Google Translation API for real-time language translation.",
      technologies: ["Python", "TensorFlow", "Flask", "API", "Streamlit"],
      icon: "language",
      accuracy: 97.33,
      gradient: "from-green-500 to-teal-500",
      liveUrl: "https://abhishekocr.streamlit.app/",
      githubUrl: "https://github.com/iamabhi1373/ocr-translation-app"
    },
    {
      id: 2,
      title: "Alzheimer's Disease Prediction using Federated Learning",
      description: "Developed federated learning model for Alzheimer's disease prediction using Enhanced CNN technique across 6 clients for 25 rounds, across IID and non-IID datasets achieving 94.6% accuracy while preserving patient privacy. Deployed using Streamlit and hosted on Hugging Face Spaces for accessible medical diagnostics.",
      technologies: ["Python", "Enhanced-CNN", "Streamlit", "Hugging Face Spaces"],
      icon: "brain",
      accuracy: 94.6,
      gradient: "from-purple-500 to-pink-500",
      liveUrl: "https://huggingface.co/spaces/iamabhi1373/alzheimer-disease-prediction",
      githubUrl: "https://github.com/iamabhi1373/alzheimer-disease-prediction"
    },
    {
      id: 3,
      title: "Gmail Automation Agent",
      description: "Developed a Python-based tool integrating Gemini API with Gmail to automatically generate and send personalized emails. Implemented features like customization and bulk emailing to reduce manual effort.",
      technologies: ["Python", "Gemini API", "Gmail"],
      icon: "envelope",
      gradient: "from-red-500 to-orange-500",
      githubUrl: "https://github.com/iamabhi1373/gmail-agent"
    },
    {
      id: 4,
      title: "TriLLM Arena - AI Model Comparison Platform",
      description: "Built a modern web app enabling real-time comparison of responses from three leading AI providers (OpenAI, DeepSeek, Gemini) through a unified interface. Focused on performance, responsive design, and intuitive user experience with parallel API calls and token usage tracking.",
      technologies: ["React", "Node.js", "Express", "OpenAI API", "DeepSeek API", "Gemini API"],
      icon: "balance-scale",
      gradient: "from-blue-500 to-purple-500",
      liveUrl: "https://tri-provider-playground-89da5i6j9-abhisheks-projects-079e00d3.vercel.app/",
      githubUrl: "https://github.com/iamabhi1373/tri-provider-playground"
    },
    {
      id: 5,
      title: "Restaurant RAG Application",
      description: "Developed an interactive app for managing restaurant menus and customer feedback with Retrieval-Augmented Generation (RAG). Implemented custom vector search using Pinecone to enable intelligent recommendations and query-based insights.",
      technologies: ["Python", "Streamlit", "Gemini API", "RAG", "Pinecone", "LLMs"],
      icon: "utensils",
      gradient: "from-orange-500 to-red-500",
      githubUrl: "https://github.com/iamabhi1373/resturant-chatbot"
    },
    {
      id: 6,
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features cyberpunk-themed design with smooth animations, interactive elements, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      icon: "globe",
      gradient: "from-cyan-500 to-blue-500",
      liveUrl: "https://abhishek-portfolio-abhisheks-projects-079e00d3.vercel.app/",
      githubUrl: "https://github.com/iamabhi1373/abhishek-portfolio"
    }
  ];
  
  export const skills = {
    programming: [
      { name: "Java", level: 90 },
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "C/C++", level: 80 }
    ],
    aiml: [
      { name: "Generative AI", level: 90 },
      { name: "Machine Learning", level: 88 },
      { name: "Deep Learning", level: 85 }
    ]
  };
  
  export const education = {
    degree: "B.Tech (Hons) in Computer Science Engineering",
    specialization: "IoT Specialization",
    university: "Manipal University Jaipur",
    location: "Jaipur, India",
    period: "Aug 2022 – May 2026",
    courses: [
      "Data Structures and Algorithms",
      "Operating Systems", 
      "RDBMS",
      "Object-Oriented Programming",
      "Computer Networks",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Natural Language Processing",
      "Deep Learning"
    ]
  };