import "../css/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matheus-marquesdrs/',
    icon: faLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/MatheusMMarques',
    icon: faGithub,
  },
  {
    label: 'Currículo',
    href: '/Matheus_Marques_Curriculo.pdf',
    icon: faFilePdf,
  },
];

const About = () => {
  return (
    <section className="about-container">
      <div className="about-shell">
        <div className="hero-copy">
          <span className="hero-eyebrow">OI, ME CHAMO MATHEUS</span>

          <h2 className="hero-title">
            <span>DESENVOLVEDOR</span>
            <span>FULL STACK</span>
          </h2>

          <p className="about-me">
            Desenvolvedor com atuação prática em aplicações web, integrações e evolução de produto.
            Entro em contextos novos com autonomia, entendo o problema e construo caminhos viáveis para entregar.
          </p>

          <div className="hero-actions" aria-label="Links profissionais">
            {socialLinks.map((link) => (
              <a className="hero-action" href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                <FontAwesomeIcon className="hero-action-icon" icon={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
