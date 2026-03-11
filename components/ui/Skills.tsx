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
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold text-white p-8 shadow-white cursor-pointer"
            style={{ backgroundColor: "rgb(79, 61, 153)" }}
            whileHover={{ scale: 1.05 }}
          >
            Developer
          </motion.div>

          <Skill name="Python" x="-10vw" y="-6vw" />
          <Skill name="JavaScript" x="10vw" y="-6vw" />
          <Skill name="TypeScript" x="-12vw" y="6vw" />
          <Skill name="SQL" x="12vw" y="6vw" />
          <Skill name="Java" x="0vw" y="-12vw" />
          <Skill name="C++" x="8vw" y="-14vw" />

          <Skill name="React.js" x="-30vw" y="-6vw" />
          <Skill name="Next.js" x="24vw" y="10vw" />
          <Skill name="TailwindCSS" x="-26vw" y="8vw" />
          <Skill name="Flask" x="26vw" y="-4vw" />
          <Skill name="Django" x="-18vw" y="0vw" />
          <Skill name="Node.js" x="30vw" y="-8vw" />
          <Skill name="Express.js" x="28vw" y="2vw" />
          <Skill name="REST APIs" x="-22vw" y="2vw" />

          <Skill name="PyTorch" x="-8vw" y="16vw" />
          <Skill name="TensorFlow" x="16vw" y="14vw" />
          <Skill name="Transformers" x="8vw" y="16vw" />
          <Skill name="NLP" x="-16vw" y="14vw" />
          <Skill name="LLM Systems" x="30vw" y="-10vw" />
          <Skill name="Feature Engineering" x="-4vw" y="20vw" />
          <Skill name="Hyperparameter Tuning" x="24vw" y="16vw" />

          <Skill name="PostgreSQL" x="25vw" y="16vw" />
          <Skill name="MySQL" x="-22vw" y="14vw" />
          <Skill name="MongoDB" x="-30vw" y="12vw" />
          <Skill name="AWS (EC2, S3, RDS)" x="-25vw" y="18vw" />
          <Skill name="Microsoft Azure" x="30vw" y="12vw" />
          <Skill name="Docker" x="-20vw" y="-12vw" />
          <Skill name="Kubernetes" x="20vw" y="-12vw" />

          <Skill name="CI/CD" x="0vw" y="-20vw" />
          <Skill name="Distributed Systems" x="0vw" y="-22vw" />
          <Skill name="ETL Pipelines" x="-28vw" y="-14vw" />
          <Skill name="Performance Optimization" x="28vw" y="-14vw" />
          <Skill name="Agile" x="-30vw" y="-10vw" />
          <Skill name="System Design" x="12vw" y="-18vw" />
        </div>

        <div ref={ref} className="mobile-part">
          <div className="container mx-auto">
            <motion.main
              className="p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <div className="block p-4">
                <h3 className="text-xl font-semibold mb-2">Languages:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"].map(
                    (skill, index) => (
                      <MobileSkill key={index} name={skill} />
                    )
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">Backend & APIs:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Flask", "Django", "Node.js", "Express.js", "REST APIs"].map(
                    (skill, index) => (
                      <MobileSkill key={index} name={skill} />
                    )
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">Frontend:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React.js", "Next.js", "TailwindCSS"].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Databases:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["PostgreSQL", "MySQL", "MongoDB"].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Cloud & Infrastructure:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "AWS (EC2, S3, RDS)",
                    "Microsoft Azure",
                    "Docker",
                    "Kubernetes",
                  ].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">AI/ML:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "PyTorch",
                    "TensorFlow",
                    "Transformers",
                    "NLP",
                    "LLM Systems",
                    "Feature Engineering",
                    "Hyperparameter Tuning",
                  ].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Engineering Practices:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "CI/CD",
                    "Distributed Systems",
                    "ETL Pipelines",
                    "Performance Optimization",
                    "Agile",
                    "System Design",
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
