export const personalInfo = {
    name: "Abhishek Kumar Gupta",
    email: "iamabhi1373@gmail.com",
    phone: "+91-6386565531",
    linkedin: "https://linkedin.com/in/abhishekgupta",
    github: "https://github.com/abhishek",
    title: "Software Engineer",
    subtitles: [
      "Software Engineer", 
      "AI/ML Specialist", 
      "Competitive Programmer", 
      "Problem Solver"
    ]
  };
  
  export const achievements = [
    {
      platform: "LeetCode",
      icon: "code",
      problemsSolved: 545,
      rating: 1530,
      description: "Problems Solved",
      color: "cyber-green"
    },
    {
      platform: "CodeChef",
      icon: "utensils", 
      rating: 1470,
      rank: 370,
      description: "Rating (2-star)",
      color: "cyber-blue"
    },
    {
      platform: "Codeforces",
      icon: "fighter-jet",
      rating: 1351,
      rank: 1208,
      description: "Rating (Pupil)",
      color: "cyber-purple"
    }
  ];
  
  export const competitionWins = {
    ideathonWins: 2,
    codeRelayWins: 1,
    totalWinnings: 16000,
    prizes: ["₹12,500", "₹2,500", "₹1,000"]
  };
  
  export const projects = [
    {
      id: 1,
      title: "LLaMA-3.1 Chatbot",
      description: "Developed a lightweight, friendly chatbot using LLaMA-3.1-8B-Instruct with llama.cpp and Gradio. Deployed via Gradio on Hugging Face Spaces with CPU optimization and secure token handling.",
      technologies: ["LLaMA-3.1", "Gradio", "Hugging Face", "CI/CD"],
      icon: "robot",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      title: "Coffee Shop AI Assistant",
      description: "React Native chatbot app simulating real-time coffee shop customer service, integrating LLMs via LangChain with RAG and Pinecone for personalized responses. Built a Recommendation Engine and integrated Slack for real-time staff alerts.",
      technologies: ["React Native", "LangChain", "Pinecone", "OpenAI API", "Flask"],
      icon: "coffee",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "Deep Learning OCR System",
      description: "Implemented a RCNN-powered OCR application with EasyOCR, KerasOCR and TrOCR to enhance handwritten text recognition. Improved accuracy by 81% across 27+ documents, then applied VisionOCR cloud server achieving 97.33% accuracy.",
      technologies: ["Python", "TensorFlow", "OCR", "Flask", "Streamlit"],
      icon: "eye",
      accuracy: 97.33,
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Fake News Detection AI",
      description: "Fine-tuned a DistilBERT model on the Kaggle Fake and Real News dataset, achieving over 92% accuracy in binary classification. Built and deployed a real-time fake news detection app using Gradio with safetensors.",
      technologies: ["Python", "PyTorch", "DistilBERT", "Hugging Face", "Gradio"],
      icon: "shield-alt",
      accuracy: 92,
      gradient: "from-red-500 to-pink-500"
    }
  ];
  
  export const skills = {
    programming: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C/C++", level: 80 }
    ],
    machineLearning: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-Learn", level: 95 },
      { name: "OpenCV", level: 80 }
    ],
    cloudPlatforms: [
      { name: "Microsoft Azure", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Hugging Face", level: 90 }
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "Linux/Unix", level: 85 },
      { name: "Docker", level: 75 }
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