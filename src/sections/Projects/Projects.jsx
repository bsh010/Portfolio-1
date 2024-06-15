import React from "react";
import styles from "./ProjectsStyles.module.css"
import logo from "../../assets/logo.png"
import ProjectCard from "../../common/ProjectCard";
import freshburger from "../../assets/fresh-burger.png"
import hipster from "../../assets/hipsster.png"
import fitlift from "../../assets/fitlift.png"
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
         <ProjectCard src={logo} link={"https://github.com/bsh010/Python-project"}
         h3 = "My Pass"
         p="password gen App"
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
