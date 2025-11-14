import React, { useEffect } from "react";
import "./skills.css";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SkillProps = {
  name: string;
  x: string | number;
  y: string | number;
};

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-white text-white py-3 px-6 absolute shadow-white cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 2 }}
      style={{ backgroundColor: "rgb(79, 61, 153)" }}
    >
      {name}
    </motion.div>
  );
};

type MobileSkillProps = {
  name: string;
};

const MobileSkill: React.FC<MobileSkillProps> = ({ name }) => {
  return (
    <motion.span
      className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-blue-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.span>
  );
};

function Skills_page() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <>
      <div className="main-Skills">
        <h2 className="headpart">
          <span style={{ color: "white" }}>My&nbsp;</span>
          <span style={{ color: "rgb(203, 172, 249)" }}>Skills</span>
        </h2>

        <div className="circle-part w-full h-screen flex items-center justify-center rounded-full relative">
          {/* Center */}
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold text-white p-8 shadow-white cursor-pointer"
            style={{ backgroundColor: "rgb(79, 61, 153)" }}
            whileHover={{ scale: 1.05 }}
          >
            Developer
          </motion.div>

          {/* ---------------------- INNER RING ---------------------- */}
          <Skill name="Python" x="-10vw" y="-6vw" />
          <Skill name="JavaScript" x="10vw" y="-6vw" />
          <Skill name="TypeScript" x="-12vw" y="6vw" />
          <Skill name="SQL" x="12vw" y="6vw" />
          <Skill name="Java" x="0vw" y="-12vw" />
          <Skill name="C" x="-8vw" y="-14vw" />
          <Skill name="C++" x="8vw" y="-14vw" />
          <Skill name="Bash" x="-16vw" y="-3vw" />
          <Skill name="Linux" x="16vw" y="-3vw" />

          {/* ---------------------- MIDDLE RING ---------------------- */}
          <Skill name="Git" x="-20vw" y="-8vw" />
          <Skill name="GO" x="-22vw" y="2vw" />
          <Skill name="Swift" x="-20vw" y="10vw" />
          <Skill name="HTML" x="-28vw" y="-2vw" />
          <Skill name="TailwindCSS" x="-26vw" y="8vw" />
          <Skill name="React.js" x="-30vw" y="-6vw" />
          <Skill name="Flask" x="26vw" y="-4vw" />
          <Skill name="Django" x="-18vw" y="0vw" />
          <Skill name="Node.js" x="30vw" y="-8vw" />
          <Skill name="Express.js" x="28vw" y="2vw" />
          <Skill name="Next.js" x="24vw" y="10vw" />

          {/* ---------------------- AI & ML RING ---------------------- */}
          <Skill name="PyTorch" x="-8vw" y="16vw" />
          <Skill name="Transformers" x="8vw" y="16vw" />
          <Skill name="TensorFlow" x="16vw" y="14vw" />
          <Skill name="OpenCV" x="-16vw" y="14vw" />
          <Skill name="Beautiful Soup" x="-4vw" y="20vw" />

          {/* ---------------------- CLOUD / DATABASE RING ---------------------- */}
          <Skill name="MySQL" x="-22vw" y="14vw" />
          <Skill name="MongoDB" x="-30vw" y="12vw" />
          <Skill name="AWS (S3, RDS)" x="-25vw" y="18vw" />
          <Skill name="PostgreSQL" x="25vw" y="16vw" />
          <Skill name="GCP" x="30vw" y="12vw" />

          {/* ---------------------- TOOLS RING ---------------------- */}
          <Skill name="Docker" x="-20vw" y="-12vw" />
          <Skill name="Kubernetes" x="20vw" y="-12vw" />
          <Skill name="Jenkins" x="0vw" y="-20vw" />
          <Skill name="GitHub" x="0vw" y="-22vw" />
          <Skill name="Postman" x="12vw" y="-18vw" />
          <Skill name="Object-oriented design" x="-12vw" y="-18vw" />
          <Skill name="Test Automation" x="22vw" y="-16vw" />
          <Skill name="Data pipelines" x="-28vw" y="-14vw" />
          <Skill name="ETL Pipeline" x="28vw" y="-14vw" />
          <Skill name="Agile Methodology" x="-30vw" y="-10vw" />
          <Skill name="SDLC" x="30vw" y="-10vw" />
        </div>

        <div ref={ref} className="mobile-part">
          <div className="container mx-auto">
            <motion.main
              className="p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <div className="block p-4">
                {/* Languages */}
                <h3 className="text-xl font-semibold mb-2">Languages:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Python",
                    "JavaScript",
                    "TypeScript",
                    "SQL",
                    "Java",
                    "C",
                    "C++",
                    "Git",
                    "Bash",
                    "Linux",
                    "GO",
                    "Swift",
                  ].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>

                {/* Web Technologies */}
                <h3 className="text-xl font-semibold mb-2">Web Tech:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "HTML",
                    "TailwindCSS",
                    "React.js",
                    "Flask",
                    "Django",
                    "Node.js",
                    "Express.js",
                    "Next.js",
                  ].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>

                {/* AI & ML */}
                <h3 className="text-xl font-semibold mb-2">AI & ML:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "PyTorch",
                    "Beautiful Soup",
                    "Transformers",
                    "OpenCV",
                    "TensorFlow",
                  ].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>

                {/* Database & Cloud Platforms */}
                <h3 className="text-xl font-semibold mb-2">
                  Database & Cloud Platforms:
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["MySQL", "MongoDB", "AWS (S3, RDS)", "PostgreSQL"].map(
                    (skill, index) => (
                      <MobileSkill key={index} name={skill} />
                    )
                  )}
                </div>

                {/* Tools & Methodologies */}
                <h3 className="text-xl font-semibold mb-2">
                  Tools & Methodologies:
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Data pipelines",
                    "Data/ETL Pipeline",
                    "Agile Methodology",
                    "SDLC",
                    "Docker",
                    "Kubernetes",
                    "Jenkins",
                    "GitHub",
                    "Object-oriented design",
                    "Test Automation",
                    "Postman",
                  ].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills_page;
