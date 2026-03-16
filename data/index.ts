export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#workex" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#recentprojects" },
  { name: "Contact", link: "#footer" },
];

export type SkillNode = {
  name: string;
  x: string | number;
  y: string | number;
};

export const skillNodes: SkillNode[] = [
  { name: "Python", x: "-10vw", y: "-6vw" },
  { name: "JavaScript", x: "10vw", y: "-6vw" },
  { name: "TypeScript", x: "-12vw", y: "6vw" },
  { name: "SQL", x: "12vw", y: "6vw" },
  { name: "Java", x: "0vw", y: "-12vw" },
  { name: "C++", x: "8vw", y: "-14vw" },

  { name: "React.js", x: "-30vw", y: "-6vw" },
  { name: "Next.js", x: "24vw", y: "10vw" },
  { name: "TailwindCSS", x: "-26vw", y: "8vw" },
  { name: "Flask", x: "26vw", y: "-4vw" },
  { name: "Django", x: "-18vw", y: "0vw" },
  { name: "Node.js", x: "30vw", y: "-8vw" },
  { name: "Express.js", x: "28vw", y: "2vw" },
  { name: "REST APIs", x: "-22vw", y: "2vw" },

  { name: "PyTorch", x: "-8vw", y: "16vw" },
  { name: "TensorFlow", x: "16vw", y: "14vw" },
  { name: "Transformers", x: "8vw", y: "16vw" },
  { name: "NLP", x: "-16vw", y: "14vw" },
  { name: "LLM Systems", x: "30vw", y: "-10vw" },
  { name: "Feature Engineering", x: "-4vw", y: "20vw" },
  { name: "Hyperparameter Tuning", x: "24vw", y: "16vw" },

  { name: "PostgreSQL", x: "25vw", y: "16vw" },
  { name: "MySQL", x: "-22vw", y: "14vw" },
  { name: "MongoDB", x: "-30vw", y: "12vw" },
  { name: "AWS (EC2, S3, RDS)", x: "-25vw", y: "18vw" },
  { name: "Microsoft Azure", x: "30vw", y: "12vw" },
  { name: "Docker", x: "-20vw", y: "-12vw" },
  { name: "Kubernetes", x: "20vw", y: "-12vw" },

  { name: "CI/CD", x: "0vw", y: "-20vw" },
  { name: "Distributed Systems", x: "0vw", y: "-22vw" },
  { name: "ETL Pipelines", x: "-28vw", y: "-14vw" },
  { name: "Performance Optimization", x: "28vw", y: "-14vw" },
  { name: "Agile", x: "-30vw", y: "-10vw" },
  { name: "System Design", x: "12vw", y: "-18vw" },
];

export const mobileSkillCategories: { label: string; skills: string[] }[] = [
  {
    label: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Backend & APIs",
    skills: ["Flask", "Django", "Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "TailwindCSS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["AWS (EC2, S3, RDS)", "Microsoft Azure", "Docker", "Kubernetes"],
  },
  {
    label: "AI/ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "NLP",
      "LLM Systems",
      "Feature Engineering",
      "Hyperparameter Tuning",
    ],
  },
  {
    label: "Engineering Practices",
    skills: [
      "CI/CD",
      "Distributed Systems",
      "ETL Pipelines",
      "Performance Optimization",
      "Agile",
      "System Design",
    ],
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Committed to clear communication and product focused solutions.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  {
    id: 5,
    title: "Currently building a SaaS AI Automation Product",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PixMod",
    des: "AI-powered SaaS platform using SAM for image segmentation (object removal, recoloring, background removal) and Stable Diffusion for generative tasks like restoration and inpainting. Integrated CLIP enables visual element-based image search, with Stripe for payments.",
    img: "/img/PixMod.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://pixmod.vercel.app/",
  },
  {
    id: 2,
    title: "Big Brain",
    des: "Designed and rolled out a semantic document retrieval system indexing 50K+ documents using transformer embeddings and FAISS/Pinecone, enabling contextual Q&A and summarization with sub-second retrieval latency.",
    img: "/img/BigBrain.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://big-brain-pied.vercel.app/",
  },
  {
    id: 3,
    title: "HMIS - Hospital Management Information System",
    des: "Architected a microservice-based healthcare platform integrating ABDM APIs, supporting 100+ daily appointment workflows and reducing patient record retrieval time by 2x.",
    img: "/img/hims.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://hims-rouge.vercel.app/",
  },
  {
    id: 4,
    title: "FinNexus - Personalized Banking System",
    des: "Personalized banking system for managing accounts, transactions of debit and credit cards, loans, and other banking tasks.",
    img: "/img/FinNexus.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://fin-nexus.vercel.app/",
  },
  {
    id: 5,
    title: "CPU Scheduler",
    des: "Operating System project for simulating CPU scheduling algorithms like FCFS, SJF, SRTF, RR, Priority and Multilevel Queue.",
    img: "/img/CPU.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://cpu-scheduler-amber.vercel.app/",
  },
  {
    id: 6,
    title: "Quantum Resistant Blockchain Technology",
    des: "Proposed a quantum-resistant blockchain framework using FALCON digital signatures and the DPoSB consensus algorithm. DPoSB ensures decentralization by monitoring node behavior and using Borda Count for fair witness node selection, maintaining security and transparency.",
    img: "/img/Quantum.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://ieeexplore.ieee.org/document/10677253",
  },
  {
    id: 7,
    title: "CaptionCraft - Image Caption Generator",
    des: "Benchmarked BLIP, GIT, and ViT-GPT2 on a 10K-image/100K-caption dataset, improving caption quality from 81% to 96%, and built Flask inference APIs for scalable real-time caption generation.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/sahajbhadja",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sahajbhadja",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/sahaj_bhadja",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sahaj-bhadja",
  },
];
