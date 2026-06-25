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
            <span className="minor-text">OI, ME CHAMO MATHEUS</span>
            <span className="major-text">
              DESENVOLVEDOR <br />
              <span className="icon-container">
                FULL STACK
                <a href="https://www.linkedin.com/in/matheus-marquesdrs/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon" icon={faLinkedin} style={{ color: "#74C0FC", }}/>
                </a>
                <a href="https://github.com/MatheusMMarques" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon" icon={faGithub} style={{ color: "#FFF", }} />
                </a>
                <a href="/Matheus_Marques_Curriculo.pdf" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon" icon={faFilePdf} style={{ color: "#FFF", }}/>
                </a>
              </span>
            </span>
          </h2>
          <p className="about-me">
            Desenvolvedor com atuação prática em aplicações web, integrações e evolução de produto.
            Entro em contextos novos com autonomia, entendo o problema e construo caminhos viáveis para entregar.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
