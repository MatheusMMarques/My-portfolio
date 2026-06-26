import '../css/Projects.css'
import Surfland from '../images/Surfland.png'
import MovieCatalog from '../images/MovieCatalog.png';
import Portfolio from '../images/Portfolio.png';

const practicalCases = [
  {
    type: 'Freelance',
    title: 'Funcionalidade de kits em fluxo de compra',
    context: 'Entrega freelance em uma operação real, envolvendo a adaptação de um fluxo para venda de produtos compostos por subitens e opções configuráveis.',
    solution: 'Atuei na adaptação do fluxo desde a página do produto até etapas posteriores da compra, conectando experiência do usuário, carrinho/checkout, pós-compra e visualização administrativa do pedido.',
    result: 'A solução ajudou a tornar o fluxo de venda mais claro e rastreável, preservando os dados necessários para o usuário e para a operação interna.',
    tags: ['Freelance', 'Sistema existente', 'Fluxo complexo', 'Regras de negócio', 'Frontend', 'Backend', 'Adaptação'],
    linkLabel: 'Case freelance',
  },
  {
    type: 'Case prático anonimizado',
    title: 'Estado de sessão em interface cacheada',
    context: 'Correção de inconsistências visuais em uma interface que exibia login, carrinho e perfil de forma diferente do estado real do usuário. A aplicação usava cache em partes da interface para melhorar performance, mas alguns elementos do topo podiam carregar informações antigas em fluxos de visitante, usuário logado e perfis diferentes.',
    solution: 'Investiguei cenários de navegação, login, troca de usuário e atualização de página. A análise separou conteúdo seguro para cache do que dependia da sessão atual, com validação em desktop, mobile e navegação anônima.',
    result: 'A interface passou a refletir corretamente o estado real do usuário, reduzindo inconsistências no menu, no carrinho e nos links de conta sem sacrificar performance.',
    tags: ['Frontend', 'Cache', 'Sessão', 'E-commerce', 'Debug', 'UX'],
    linkLabel: 'Case anonimizado',
  },
  {
    type: 'Case prático anonimizado',
    title: 'Diagnóstico fiscal em fluxo de checkout',
    context: 'Investigação e validação de um fluxo fiscal sensível dentro do checkout, envolvendo exibição de impostos, totalização do pedido e formas de pagamento. O cenário incluía variações de endereço, regras comerciais, entrega, pagamento e atualização dos totais.',
    solution: 'Reproduzi o fluxo completo de compra em ambiente controlado, validando produto, endereço, entrega, pagamento e totalização. Também comparei cenários para separar regra esperada de possíveis falhas reais no fluxo.',
    result: 'O comportamento fiscal foi validado com mais clareza e os pontos de inconsistência foram isolados, direcionando a análise para o ponto correto.',
    tags: ['Checkout', 'Regras de negócio', 'Fiscal', 'Debug', 'Validação', 'E-commerce'],
    linkLabel: 'Case anonimizado',
  },
  {
    type: 'Case prático anonimizado',
    title: 'Divergência de frete em integração externa',
    context: 'Investigação de divergência em valores de frete envolvendo integração com serviço externo, origem, destino e configuração da loja. A reprodução dependia de produto específico, origem de envio, CEP de destino, transportadora e credenciais válidas.',
    solution: 'Mapeei o fluxo de cotação ponta a ponta, identificando quais dados influenciavam o cálculo e quais informações precisavam bater entre loja e serviço externo. Também diferenciei evidência de bug real de divergência sem prova técnica.',
    result: 'A investigação deixou claro quais fatores poderiam alterar o valor final do frete e quais evidências seriam necessárias para confirmar uma falha.',
    tags: ['Integração', 'Frete', 'API', 'Investigação', 'Logs', 'E-commerce'],
    linkLabel: 'Case anonimizado',
  },
  {
    type: 'Case prático anonimizado',
    title: 'Visibilidade de recurso em painel administrativo',
    context: 'Correção de um problema em que usuários com perfis diferentes tinham acesso visual diferente a um mesmo recurso administrativo. O recurso existia, mas a listagem variava conforme o contexto associado ao usuário.',
    solution: 'Comparei usuários, vínculos, escopos e permissões aplicadas. A investigação mostrou que a diferença estava relacionada ao contexto do usuário, fazendo o painel listar apenas parte dos dados disponíveis.',
    result: 'O recurso passou a ser exibido corretamente para o usuário esperado, respeitando o escopo de acesso e facilitando a explicação para áreas não técnicas.',
    tags: ['Admin', 'Permissões', 'Escopo', 'Diagnóstico', 'Dados', 'Produto'],
    linkLabel: 'Case anonimizado',
  },
  {
    type: 'Case prático anonimizado',
    title: 'Produto sem estoque com ação incorreta na listagem',
    context: 'Ajuste de comportamento em cards de produto para evitar que itens indisponíveis exibissem uma chamada de ação incompatível com o estoque. A listagem incentivava interação com produtos que não poderiam ser comprados naquele momento.',
    solution: 'Analisei as condições que determinavam se uma variação estava disponível para compra, considerando estoque, disponibilidade comercial e comportamento esperado da vitrine. O ajuste manteve a navegação para o produto quando isso ainda fazia sentido.',
    result: 'Os cards passaram a comunicar melhor a indisponibilidade, evitando expectativa incorreta de compra e mantendo uma alternativa de interação adequada.',
    tags: ['Frontend', 'Catálogo', 'UX', 'Estoque', 'Regras de exibição', 'E-commerce'],
    linkLabel: 'Case anonimizado',
  },
  {
    type: 'Case prático anonimizado',
    title: 'Busca com comportamento diferente entre ambientes',
    context: 'Investigação de erro em busca de produtos que ocorria em produção, mas não era reproduzido da mesma forma em ambiente local. O problema podia envolver código da tela, dados, índice de busca, cache ou diferenças entre ambientes.',
    solution: 'Testei os mesmos termos em ambiente local, validei rotas envolvidas e comparei o comportamento esperado com o que ocorria em produção. A análise ajudou a separar hipóteses de frontend, backend, dados e indexação.',
    result: 'Mesmo sem reprodução direta em local, a investigação reduziu o campo de possibilidades e apontou caminhos técnicos mais prováveis para correção.',
    tags: ['Busca', 'Diagnóstico', 'Ambientes', 'Dados', 'Indexação', 'Debug'],
    linkLabel: 'Case anonimizado',
  },
  {
    type: 'Freelance',
    title: 'SEO técnico para múltiplas lojas',
    context: 'Implementação de melhorias técnicas de SEO em duas lojas do mesmo grupo, seguindo recomendações de indexação, estrutura de página e validação no Google Search Console.',
    solution: 'Apliquei ajustes como canonical, robots, noindex/nofollow em páginas específicas, breadcrumbs, dados estruturados e refatoração completa do sitemap para as duas lojas.',
    result: 'As melhorias foram implementadas nas duas operações e validadas diretamente no Google Search Console, conectando ajustes técnicos da aplicação com leitura externa pelos mecanismos de busca.',
    tags: ['Freelance', 'SEO técnico', 'Google Search Console', 'Sitemap', 'Dados estruturados', 'Indexação', 'Web'],
    linkLabel: 'Case freelance',
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
    linkLabel: 'Você está nele!',
    image: Portfolio,
  },
  {
    type: 'Projeto inicial',
    title: 'Catálogo de filmes',
    context: 'Projeto criado no início da minha jornada para praticar consumo de dados, listagem, busca e organização visual de cards.',
    solution: 'Interface de catálogo com listagem de filmes, busca e apresentação responsiva.',
    result: 'Mantido como registro de evolução técnica e visual em componentes, estado, renderização de listas e organização de interface.',
    tags: ['React', 'JavaScript', 'CSS', 'API', 'Responsivo'],
    link: 'https://catalogmovies.vercel.app',
    linkLabel: 'Ver projeto',
    image: MovieCatalog,
  },
  {
    type: 'Projeto inicial',
    title: 'Site de informações de surf',
    context: 'Projeto desenvolvido no início da minha jornada para praticar construção de landing page responsiva e organização visual de conteúdo.',
    solution: 'Página informativa com foco em layout, responsividade e apresentação em diferentes tamanhos de tela.',
    result: 'Mantido como registro de evolução em HTML, CSS, responsividade e composição visual.',
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
        <img src={project.image} alt={project.imageAlt || ""} />
      </div>
    )}

    <div className="project-main">
      <span className="project-type tag">{project.type}</span>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.context}</p>
    </div>

    <dl className="project-details">
      <div className="project-section">
        <dt>{variant === 'case' ? 'Atuação' : 'Solução'}</dt>
        <dd>{project.solution}</dd>
      </div>

      <div className="project-section">
        <dt>{variant === 'case' ? 'Resultado' : 'Resultado/aprendizado'}</dt>
        <dd>{project.result}</dd>
      </div>

      {project.note && (
        <div className="project-section project-section-note">
          <dt>Observação</dt>
          <dd>{project.note}</dd>
        </div>
      )}
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
      <div className="section-inner">
      <div className="projects-heading section-header">
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

        <section className="projects-block projects-block-secondary">
          <div className="projects-block-header">
            <h3>PROJETOS PESSOAIS E ESTUDOS</h3>
            <p>Projetos públicos ou próprios usados para praticar construção, interface, organização de código e evolução técnica.</p>
          </div>

          <div className="projects-grid projects-grid-personal">
            {personalProjects.map((project) => (
              <ProjectCard project={project} variant="personal" key={project.title} />
            ))}
          </div>
        </section>
      </div>
      </div>
    </section>
  )
}

export default Projects
