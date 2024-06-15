import styles from "./SkillsStyles.module.css";
import checkmarkicon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkicon} skill="HTML" />
        <SkillList src={checkmarkicon} skill="CSS" />
        <SkillList src={checkmarkicon} skill="JavaScript" />
        <SkillList src={checkmarkicon} skill="React" />
        <SkillList src={checkmarkicon} skill="Tailwind" />
        <SkillList src={checkmarkicon} skill="Nodejs" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkicon} skill="C" />
        <SkillList src={checkmarkicon} skill="C++" />
        <SkillList src={checkmarkicon} skill="Python" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
