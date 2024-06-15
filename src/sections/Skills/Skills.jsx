import styles from "./SkillsStyles.module.css";
import checkmarkicondark from "../../assets/checkmark-dark.svg";
import checkmarkiconlight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import {useTheme} from "../../common/ThemeContext";
function Skills() {
  const {theme} = useTheme();
  const checkmarkicon = theme === 'light'?checkmarkiconlight : checkmarkicondark;
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
