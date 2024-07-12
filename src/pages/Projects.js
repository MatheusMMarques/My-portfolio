import '../css/Projects.css'
import Surfland from '../images/Surfland.png'
import MovieCatalog from '../images/MovieCatalog.png';
import EmBreve from '../images/EmBreve.png';

const Projects = () => {
  return (
    <section className='project-container'>
      <div className="title-projects">
        <h2>
          PROJETOS
        </h2>
      </div>
      <div className="projects">
        <div className="project">
          <div className="img-project">
            <a href="https://surfland-project.vercel.app" target="_blank" rel="noopener noreferrer">
              <img src={Surfland} className="image" />
            </a>
              <h6>ESTUDO DE FUNCIONALIDADES</h6>
              <h3>SITE DE INFORMAÇÕES DE SURF</h3>
          </div>
        </div>
        <div className="project">
          <div className="img-project">
            <a href="https://catalogmovies.vercel.app" target="_blank" rel="noopener noreferrer">
              <img src={MovieCatalog} className="image" />
            </a>
            <h6>ESTUDO DE FUNCIONALIDADES</h6>
            <h3>CATÁLOGO DE FILMES</h3>
          </div>
        </div>
        <div className="project">
          <div className="img-project">
            <img src={EmBreve} className="image" />
            <h6>PROJETO ACADÊMICO SENDO DESENVOLVIDO</h6>
            <h3>EM BREVE</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
