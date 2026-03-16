import React, { useEffect } from "react";
import "./skills.css";
import { motion, useAnimation } from "framer-motion";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import { mobileSkillCategories, skillNodes } from "@/data";

type SkillProps = {
  name: string;
  x: string | number;
  y: string | number;
};

const Skill: React.FC<SkillProps> = ({ name, x, y }) => (
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

type MobileSkillProps = {
  name: string;
};

const MobileSkill: React.FC<MobileSkillProps> = ({ name }) => (
  <motion.span
    className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-blue-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {name}
  </motion.span>
);

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

          {skillNodes.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              x={skill.x}
              y={skill.y}
            />
          ))}
        </div>

        <div ref={ref} className="mobile-part">
          <div className="container mx-auto">
            <motion.main
              className="p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <div className="block p-4">
                {mobileSkillCategories.map((category) => (
                  <section key={category.label} className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {category.label}:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <MobileSkill key={skill} name={skill} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </motion.main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills_page;
