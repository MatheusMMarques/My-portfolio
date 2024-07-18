import '../css/Projects.css'


import { useGitHubAutomatedRepos } from "github-automated-repos";



const Projects = () => {

  const data = useGitHubAutomatedRepos("MatheusMMarques", "attached");

  return (
    <section className='project-container'>
      <div className="title-projects">
        <h2>
          PROJETOS
        </h2>
      </div>
      <div className="projects">
        {

          data.map((item) => {

            return(
              <div className="project">
              <div className="img-project">
                <a href={item.homepage} target="_blank" rel="noopener noreferrer">
                  <img src={item.banner} className="image" />
                </a>
                <h6>{item.description }</h6>
                <h3>{item.name}</h3>
              </div>
            </div>

            )
        
          })
        }

      </div>
    </section>
  )
}

export default Projects



