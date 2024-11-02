import styles from "./ProjectsStyles.module.css"
import logo from "../../assets/logo.png"
import ProjectCard from "../../common/ProjectCard";
import fitlift from "../../assets/fitlift.png"
import chatimg from "../../assets/chatapp.jpg"
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
         <ProjectCard src={logo} link={"https://github.com/bsh010/Python-project"}
         h3 = "My Pass"
         p="password gen App"
         />
         <ProjectCard src={fitlift} link={"https://fitness-app-bsh.netlify.app/"}
         h3 = "BeFit"
         p="Fitness App"
         />
         <ProjectCard src={chatimg} link={"https://chat-app-00e3.onrender.com"}
         h3 = "Chat Us"
         p="Chat App"
         />
      </div>
    </section>
  )
}

export default Projects;
