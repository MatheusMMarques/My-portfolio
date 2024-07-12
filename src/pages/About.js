import "../css/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf  } from '@fortawesome/free-regular-svg-icons'

const About = () => {
  return (
    <section className="about-container">
      <div>
        <div className="text">
          <h2 className="h2-content">
            <span className="minor-text">OI, ME CHAMO MATHEUS 👋</span>
            <span className="major-text">DESENVOLVEDOR <br /> <span className="icon-container">FRONT-END<a href="https://www.linkedin.com/in/matheus-marques-817a2b20b/"><FontAwesomeIcon className="icon" icon={faLinkedin} style={{ color: "#74C0FC", }}/></a><a href="https://github.com/MatheusMMarques"><FontAwesomeIcon className="icon" icon={faGithub} style={{ color: "#FFF", }} /></a><a href="https://drive.google.com/file/d/1NQOCvmlmpxOMn28cp9PjiI7PnX-Is5Zx/view?usp=sharing"><FontAwesomeIcon className="icon" icon={faFilePdf} style={{ color: "#FFF", }}/></a></span></span>
          </h2>
          <p className="about-me">
            TENHO 19 ANOS, ESTOU EM BUSCA DE MINHA PRIMEIRA OPORTUNIDADE<br/>E ESTUDO FRONT-END CERCA DE 2 ANOS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
