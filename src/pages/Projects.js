import '../css/Projects.css'
import Surfland from '../images/Surfland.png'
import MovieCatalog from '../images/MovieCatalog.png';

const projectCases = [
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

const Projects = () => {
  return (
    <section className='project-container'>
      <div className="projects-heading">
        <h2>CASES E PROJETOS</h2>
        <p>
          Projetos e cases que mostram raciocínio técnico, solução aplicada e evolução ao longo da prática.
        </p>
      </div>

      <div className="projects-grid">
        {projectCases.map((project) => (
          <article className="project-card" key={project.title}>
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt="" />
              </div>
            )}

            <span className="project-type">{project.type}</span>
            <h3>{project.title}</h3>

            <div className="project-section">
              <h4>Contexto</h4>
              <p>{project.context}</p>
            </div>

            <div className="project-section">
              <h4>Solução</h4>
              <p>{project.solution}</p>
            </div>

            <div className="project-section">
              <h4>Resultado/aprendizado</h4>
              <p>{project.result}</p>
            </div>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {project.link ? (
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                {project.linkLabel}
              </a>
            ) : (
              <span className="project-link project-link-muted">{project.linkLabel}</span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
