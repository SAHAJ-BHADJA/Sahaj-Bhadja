import { useRef, useEffect } from "react";
import "./WorkEx.css";
import { motion, useInView, useScroll, useAnimation } from "framer-motion";
import LiIcon from "./LiIcon";

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string[];
}

const experienceData: DetailsProps[] = [
  {
    position: "Software Engineer",
    company: "USC Dornsife",
    companyLink: "https://dornsife.usc.edu/",
    time: "September 2025 - Present",
    address: "Los Angeles, CA",
    work: [
      "Architected a multi-tenant AI education platform using Azure SQL and Blob Storage with row-level security and normalized schemas for 500+ users, reducing dashboard latency from 1.2s to 350ms.",
      "Restructured a fault-tolerant asynchronous LLM orchestration system using FastAPI background workers, processing 1K+ AI jobs with failure isolation and improving throughput by 3x under concurrent workloads.",
    ],
  },
  {
    position: "Software Engineer Intern",
    company: "Grad8",
    companyLink: "https://www.grad8.com/",
    time: "June 2025 - August 2025",
    address: "Los Angeles, CA",
    work: [
      "Engineered an AI-powered grading platform leveraging multimodal LLMs (GPT-4o, Claude 3.7, Qwen-VL) and OCR to evaluate text and handwritten submissions.",
      "Designed a concurrent batch-processing pipeline with secure PDF/DOCX/ZIP ingestion via AWS RDS and REST APIs for fault-tolerant high-throughput execution.",
      "Implemented a production backend on AWS serving 150+ instructors and 10K+ grading requests/day, reducing feedback turnaround time by 60%.",
    ],
  },
  {
    position: "Software Developer Engineer (SecureSync)",
    company: "Aasma Technology Solutions",
    companyLink: "https://aasmatech.com/",
    time: "August 2023 - July 2024",
    address: "Ahmedabad, Gujarat, India",
    work: [
      "Formulated cross-platform data-sharing software with microservice architecture and Jenkins (Blue Ocean) pipelines for VM testing, executables, and integration/unit tests (PyTest, Mockito).",
      "Troubleshot and streamlined large-scale API integrations with OOP, AWS Glue, and S3, improving response times by 30% while boosting ETL pipeline efficiency by 68%.",
    ],
  },
  {
    position: "Full Stack Developer Intern (VibrantChem)",
    company: "Aasma Technology Solutions",
    companyLink: "https://aasmatech.com/",
    time: "May 2023 - August 2023",
    address: "Ahmedabad, Gujarat, India",
    work: [
      "Developed a MERN-based resource management platform with WebSockets, RESTful APIs, and microservice architecture, supporting synchronization of 2M+ records across locations.",
      "Deployed Azure SQL with Jenkins for automated testing, reducing resource wastage by 42% and increasing lead conversions by 15%.",
    ],
  },
  {
    position: "Web Developer Intern",
    company: "LST Capitals",
    companyLink: "https://lstcapital.in/",
    time: "November 2022 - January 2023",
    address: "Surat, Gujarat, India",
    work: [
      "Engineered a cross-platform data-pipeline framework using Databricks, Flask API, and Firebase to enable real-time analytics on 50K+ records.",
      "Integrated a PCI-compliant payment infrastructure supporting cards, UPI, wallets, and PayPal with real-time analytics, refund/dispute automation, and fraud detection.",
    ],
  },
];

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Southern California",
    location: "Los Angeles, CA",
    duration: "August 2024 - May 2026",
    details:
      "GPA: 3.75/4 | Coursework: Analysis of Algorithms, Database Systems, Web Technologies, Advanced NLP",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Pandit Deendayal Energy University",
    location: "Gandhinagar, India",
    duration: "November 2020 - May 2024",
    details:
      "GPA: 3.88/4 | Coursework: Software Engineering, Operating Systems, Object-Oriented Programming, Data Retrieval",
  },
];

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 capitalize block"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-[rgb(226,226,182)]">
          {time} | {address}
        </span>
        <ul className="font-medium w-full list-disc list-outside ml-5 space-y-1">
          {work.map((item, index) => (
            <li key={`${company}-${index}`}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const WorkEx: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="main-exp">
        <h1 className="font-bold text-5xl w-full text-center">
          <span style={{ color: "white" }}>My&nbsp;</span>
          <span style={{ color: "rgb(203, 172, 249)" }}>Experience</span>
        </h1>
        <div ref={ref} className="exp-part w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="line-part absolute left-9 top-1 w-[4px] h-full bg-white origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {experienceData.map((item) => (
              <Details key={`${item.company}-${item.position}`} {...item} />
            ))}
          </ul>
        </div>

        <div id="education" className="w-[75%] mx-auto mt-24">
          <h2 className="font-bold text-4xl text-center mb-10">
            <span style={{ color: "white" }}>My&nbsp;</span>
            <span style={{ color: "rgb(203, 172, 249)" }}>Education</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((item) => (
              <div
                key={item.school}
                className="rounded-2xl border border-white/10 bg-[#10132E] p-6"
              >
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <p className="text-purple mt-1">{item.school}</p>
                <p className="text-white-200 mt-1">
                  {item.duration} | {item.location}
                </p>
                <p className="text-white-100 mt-3">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkEx;
