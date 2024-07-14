import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/file.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterlight from "../../assets/twitter-light.svg";
import twitterdark from  "../../assets/twitter-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubdark from "../../assets/github-dark.svg";
import linkedinlight from "../../assets/linkedin-light.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
   const {theme,toggleTheme} = useTheme();
   const themeIcon = theme === 'light'? sun:moon;
   const twitterIcon = theme === 'light'? twitterlight:twitterdark;
   const githubIcon = theme === 'light'? githublight:githubdark;
   const LinkedInIcon = theme === 'light'? linkedinlight:linkedindark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile pic of Bharat Hardi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Bharat
          <br />
          Hardi
        </h1>
        <h2>Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/bsh010" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/bharat-hardi-84b7a6245/" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>With a passion for developing React web Apps</p>
        <a href={resume} target="_blank" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
