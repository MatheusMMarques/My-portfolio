import '../css/Projects.css'
import Surfland from '../images/Surfland.png'
import MovieCatalog from '../images/MovieCatalog.png';

const practicalCases = [
  {
    type: 'Case prático anonimizado',
    title: 'Melhoria de performance com cache',
    context: 'Páginas cacheadas precisavam carregar melhor sem misturar informações dinâmicas da aplicação.',
    solution: 'Apoio em melhorias de Edge Cache, separando conteúdo cacheável de dados de contexto e observando o comportamento em navegação real.',
    result: 'Contribuiu para melhorar a experiência de carregamento e reforçou aprendizado prático sobre cache, invalidação e front-end dinâmico.',
    tags: ['JavaScript', 'AWS CloudFront', 'Edge Cache', 'Performance', 'Front-end'],
    linkLabel: 'Case anonimizado',
  },
  {
    type: 'Case prático anonimizado',
    title: 'Investigação ponta a ponta de falhas',
    context: 'Comportamentos inconsistentes em fluxos reais exigiam reprodução de cenário e análise antes de qualquer correção.',
    solution: 'Mapeamento do fluxo, comparação entre comportamento esperado e atual, análise de dados e identificação de causa-raiz.',
    result: 'Relatos pouco claros viraram evidências técnicas, hipóteses testáveis e correções mais bem direcionadas.',
    tags: ['Logs', 'SQL', 'Debug', 'Causa-raiz', 'Análise'],
    linkLabel: 'Case anonimizado',
  },
];

const personalProjects = [
  {
    type: 'Projeto pessoal',
    title: 'Portfólio profissional em React',
    context: 'Evolução de uma versão antiga do meu portfólio, criada em uma fase inicial da carreira.',
    solution: 'Reestruturação da narrativa, criação de seções de experiência, stack por capacidades e reposicionamento para um perfil mais completo.',
    result: 'Projeto usado como registro prático de evolução técnica, posicionamento profissional e construção de interface com React.',
    tags: ['React', 'JavaScript', 'CSS', 'UI', 'Portfólio'],
    linkLabel: 'Sem link público',
  },
  {
    type: 'Projeto de estudo aplicado',
    title: 'Catálogo de filmes',
    context: 'Projeto criado para praticar consumo de dados, listagem, busca e organização visual de cards.',
    solution: 'Interface de catálogo com listagem de filmes, busca e apresentação responsiva.',
    result: 'Prática de componentes, estado, renderização de listas e organização de interface.',
    tags: ['React', 'JavaScript', 'CSS', 'API', 'Responsivo'],
    link: 'https://catalogmovies.vercel.app',
    linkLabel: 'Ver projeto',
    image: MovieCatalog,
  },
  {
    type: 'Projeto de estudo aplicado',
    title: 'Site de informações de surf',
    context: 'Projeto criado para praticar construção de landing page responsiva e organização visual de conteúdo.',
    solution: 'Página informativa com foco em layout, responsividade e apresentação em diferentes tamanhos de tela.',
    result: 'Primeira base prática em HTML, CSS, responsividade e composição visual.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsivo', 'UI'],
    link: 'https://surfland-project.vercel.app',
    linkLabel: 'Ver projeto',
    image: Surfland,
  },
];

const ProjectCard = ({ project, variant = 'project' }) => (
  <article className={`project-card portfolio-card project-card-${variant} ${project.image ? 'project-card-with-image' : 'project-card-textual'}`}>
    {project.image && (
      <div className="project-image">
        <img src={project.image} alt="" />
      </div>
    )}

    <div className="project-main">
      <span className="project-type tag">{project.type}</span>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.context}</p>
    </div>

    <dl className="project-details">
      <div className="project-section">
        <dt>Solução</dt>
        <dd>{project.solution}</dd>
      </div>

      <div className="project-section">
        <dt>Resultado/aprendizado</dt>
        <dd>{project.result}</dd>
      </div>
    </dl>

    <footer className="project-footer">
      <div className="project-tags tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>

      {project.link ? (
        <a className="project-link project-link-action" href={project.link} target="_blank" rel="noopener noreferrer">
          {project.linkLabel}
        </a>
      ) : (
        <span className="project-link project-link-muted">{project.linkLabel}</span>
      )}
    </footer>
  </article>
);

const Projects = () => {
  return (
    <section className='project-container section-container'>
      <div className="projects-heading section-header centered">
        <h2>CASES E PROJETOS</h2>
        <p>
          Projetos e cases que mostram raciocínio técnico, solução aplicada e evolução ao longo da prática.
        </p>
      </div>

      <div className="projects-blocks">
        <section className="projects-block">
          <div className="projects-block-header">
            <h3>CASES PRÁTICOS</h3>
            <p>Experiências reais, anonimizadas, com foco em contexto, decisão técnica e aprendizado aplicado.</p>
            <p className="projects-anonymization-note">
              Os cases práticos são descritos de forma anonimizada para preservar dados de clientes, regras internas e código proprietário. O foco é apresentar o raciocínio técnico, o tipo de problema enfrentado e a forma de condução da solução.
            </p>
          </div>

          <div className="projects-grid projects-grid-cases">
            {practicalCases.map((project) => (
              <ProjectCard project={project} variant="case" key={project.title} />
            ))}
          </div>
        </section>

        <section className="projects-block">
          <div className="projects-block-header">
            <h3>PROJETOS PESSOAIS</h3>
            <p>Projetos públicos ou próprios usados para praticar construção, interface, organização de código e evolução técnica.</p>
          </div>

          <div className="projects-grid projects-grid-personal">
            {personalProjects.map((project) => (
              <ProjectCard project={project} variant="personal" key={project.title} />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Projects
