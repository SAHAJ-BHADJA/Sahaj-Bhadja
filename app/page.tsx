"use client";

import { useEffect } from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Skills from "@/components/ui/Skills";
import WorkEx from "@/components/ui/WorkEx";
import SahajProj from "@/components/projects/Projects";

const Home = () => {
  useEffect(() => {
    // Add smooth scroll behavior when the component mounts
    document.documentElement.style.scrollBehavior = "smooth";

    // Cleanup the scroll behavior on component unmount if necessary
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const sections: { id: string; component: JSX.Element; scrollMarginTop?: string }[] =
    [
      {
        id: "about",
        component: <Hero />,
        scrollMarginTop: "100px",
      },
      { id: "grid", component: <Grid />, scrollMarginTop: "100px" },
      { id: "workex", component: <WorkEx />, scrollMarginTop: "100px" },
      { id: "skills", component: <Skills />, scrollMarginTop: "100px" },
      {
        id: "recentprojects",
        component: <RecentProjects />,
        scrollMarginTop: "100px",
      },
      { id: "approach", component: <Approach />, scrollMarginTop: "100px" },
      { id: "footer", component: <Footer />, scrollMarginTop: "100px" },
    ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {sections.map(({ id, component, scrollMarginTop }) => (
          <section
            key={id}
            id={id}
            style={
              scrollMarginTop ? { scrollMarginTop } : undefined
            }
          >
            {component}
          </section>
        ))}
      </div>
    </main>
  );
};

export default Home;
