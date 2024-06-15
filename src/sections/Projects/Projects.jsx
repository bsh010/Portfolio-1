import React from "react";
import styles from "./ProjectsStyles.module.css"
import Viber from "../../assets/viberr.png"
import ProjectCard from "../../common/ProjectCard";
import freshburger from "../../assets/fresh-burger.png"
import hipster from "../../assets/hipsster.png"
import fitlift from "../../assets/fitlift.png"
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
         <ProjectCard src={Viber} link={""}
         h3 = "Viberr"
         p="streaming App"
         />
         <ProjectCard src={freshburger} link={""}
         h3 = "FreshBurger"
         p="Hamburger Restaurant"
         />
         <ProjectCard src={hipster} link={""}
         h3 = "Hipster"
         p="Glasses Shop"
         />
         <ProjectCard src={fitlift} link={""}
         h3 = "Hipster"
         p="fitness App"
         />
      </div>
    </section>
  )
}

export default Projects;
