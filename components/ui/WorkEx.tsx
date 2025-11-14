import { useRef, useEffect } from "react";
import "./WorkEx.css";
import { motion, useInView, useScroll, useAnimation } from "framer-motion";
import LiIcon from "./LiIcon";

// Define the type for the Details component props
interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string | string[];
}

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
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 capitalize"
          >
            <br />@{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-[rgb(226,226,182)]">
          {time} | {address}
        </span>
        {Array.isArray(work) ? (
          <ul className="font-medium w-full list-disc list-outside ml-5 space-y-1">
            {work.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="font-medium w-full">{work}</p>
        )}
      </motion.div>
    </li>
  );
};

// WorkEx component
const WorkEx: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="main-exp" id="experience">
        <h1 className="font-bold text-8x1 w-full text-center">
          <span style={{ color: "white" }}>My&nbsp;</span>
          <span style={{ color: "rgb(203, 172, 249)" }}>Experience</span>
        </h1>
        <div ref={ref} className="exp-part w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="line-part absolute left-9 top-1 w-[4px] h-full bg-white origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              position="Software Engineer Intern"
              company="Grad8"
              companyLink="https://www.grad8.com/"
              time="June 2025 - PRESENT"
              address="Los Angeles, CA"
              work={[
                "Engineered an AI-powered grading platform using multimodal LLMs (GPT-4o, Claude 3.7, Qwen-VL) + OCR to score handwritten/text submissions; added batch grading, multithreading, and secure file ingestion with AWS RDS + FastAPI for high-throughput processing.",
                "Developed rubric-generation dashboards and deployed a production backend on AWS serving 150+ instructors and 10K+ grading requests/day, cutting grading turnaround time by 60%.",
              ]}
            />
            <Details
              position="ML Research Assistant"
              company="USC AD Labs"
              companyLink="https://sites.google.com/usc.edu/autodrivelab/"
              time="January 2025 - PRESENT"
              address="Los Angeles, CA"
              work={[
                "Implemented a GPT-style Decision Transformer for offline RL in autonomous driving—leveraged return-to-go, state, and action embeddings for long-horizon planning without value-bootstrapping and built end-to-end pipelines from trajectory logs to HD map vectors with discretized action spaces.",
                "Architected a spatial-temporal encoder merging HD-map geometry (road layout, lane direction) with ego-agent context (past trajectories) via multi-head attention in closed-loop planning performance and exploring LLMs.",
              ]}
            />
            <Details
              position="Software Developer Engineer"
              company="Aasma Technology Solutions"
              companyLink="https://aasmatech.com/"
              time="August 2023 - July 2024"
              address="Ahemdabad, Gujarat, India"
              work={[
                "Formulated cross-platform data-sharing software with microservice architecture; built pipelines in Jenkins (Blue  Ocean) to automate VM testing, executables, and integration/unit tests (PyTest, Mockito), working with Microsoft/GitHub team in Agile Scrum meetings.",
                "Troubleshot and optimized large-scale API integrations with OOP, AWS Glue, and S3, improving response times by 30%. Led team of 10 for ETL workflows, boosting pipeline efficiency 68% and cutting technical debt 20%.",
              ]}
            />
            <Details
              position="Full Stack Develoepr Inter"
              company="Aasma Technology Solutions"
              companyLink="https://aasmatech.com/"
              time="May 2023 – August 2023"
              address="Ahmedabad, Gujarat, India"
              work={[
                "Developed a MERN-based resource management platform (CRM) with WebSockets, RESTful APIs, and a  microservice architecture, addressing large-scale challenges in code review syncing 2M+ records across locations.",
                "Deployed Azure SQL with Jenkins for automated testing, leveraging Google Analytics to reduce resource wastage by 42%, increase lead conversions by 15%, and expand market reach.",
              ]}
            />
            <Details
              position="Data Analyst - Research Fellowship"
              company="PDEU"
              companyLink="https://pdeu.ac.in/"
              time="May 2023- August 2023"
              address="Ahmedabad, Gujarat, India"
              work={[
                "Designed and implemented a malicious URL detection system on a dataset of 650K+ URLs, applying advanced statistical feature engineering and machine learning models (Gaussian NB, Random Forest) alongside deep learning architectures (RNN, LSTM, Bi-LSTM, GRU, CNN).",
                "Achieved 96%+ detection accuracy, building a feature-rich pipeline with 21 behavioral indicators (e.g., IP presence, URL length, suspicious keywords) and generating actionable insights into phishing and malware trends.",
              ]}
            />
            <Details
              position="Web Developer Intern"
              company="LST Capitals"
              companyLink="https://lstcapital.in/"
              time="November 2022 - January 2023"
              address="Surat, Gujarat, India"
              work={[
                "Engineered cross-platform (MacOS & AndroidOS) data-pipeline framework using Databricks, Flask API, and Firebase to enable real-time analytics on 50K+ records with automated testing and integrated Web3 support.",
                "Integrated a full-stack, PCI-compliant payment infrastructure supporting multi-currency cards, UPI, wallets, and PayPal with real-time analytics, refund/dispute automation, fraud detection, and webhook-driven.",
              ]}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkEx;
