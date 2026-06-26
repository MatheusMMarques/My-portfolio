import "../css/Skills.css";

const stackGroups = [
  {
    title: "Backend e produto",
    category: "Base da aplicação",
    description: "Atuação em regras de negócio, manutenção evolutiva, APIs e integrações conectadas ao comportamento do produto.",
    tags: ["PHP", "Symfony", "APIs REST", "Integrações", "Regras de negócio", "E-commerce"],
  },
  {
    title: "Frontend e interface",
    category: "Experiência de uso",
    description: "Construção e ajuste de telas, templates e interações para melhorar fluxos de uso e clareza da interface.",
    tags: ["JavaScript", "React", "Twig", "HTML", "CSS", "AJAX", "jQuery"],
  },
  {
    title: "Dados e diagnóstico",
    category: "Diagnóstico",
    description: "Consultas, análise de comportamento, leitura de logs e investigação de inconsistências para chegar à causa provável.",
    tags: ["SQL", "MySQL", "Logs", "Debug", "Causa-raiz", "Dados operacionais"],
  },
  {
    title: "Ambiente e entrega",
    category: "Fluxo de trabalho",
    description: "Uso de ambiente local, versionamento e validação para entregar ajustes com rastreabilidade e menor risco.",
    tags: ["Docker", "Git", "Bitbucket", "Validação", "Deploy", "Rastreabilidade"],
  },
  {
    title: "Manutenção e evolução",
    category: "Sistemas existentes",
    description: "Leitura de sistemas existentes, reprodução de cenários, correções pontuais e cuidado com regressões.",
    tags: ["Manutenção", "Troubleshooting", "Regressão", "Performance", "Sistemas existentes"],
  },
  {
    title: "Documentação e rastreabilidade",
    category: "Base de apoio",
    description: "Registro de decisões, fluxos, ambientes, validações e instruções para facilitar manutenção, testes e continuidade do trabalho.",
    tags: ["Confluence", "Jira", "Documentação", "Sandbox", "Evidências", "Processos"],
  },
  {
    title: "Adaptação de stack",
    category: "Evolução técnica",
    featured: true,
    description: "Aprendizado conforme o contexto do projeto, priorizando entender padrões existentes antes de propor mudanças.",
    tags: ["Novas stacks", "Leitura de código", "Contexto do produto", "Padrões existentes", "Aprendizado guiado"],
  },
];

const Skills = () => {
  return (
    <section className="skills-container section-container">
      <div className="section-inner">
      <div className="skills-content section-header">
        <h2>STACK E CAPACIDADES</h2>
        <p>
          Tecnologias, ferramentas e práticas que uso para desenvolver, investigar e evoluir aplicações em contexto real.
        </p>
      </div>

      <div className="stack-grid content-grid">
        {stackGroups.map((group) => (
          <article className={`stack-card portfolio-card ${group.featured ? "stack-card-evolution" : ""}`} key={group.title}>
            <div className="stack-card-header">
              <span className="stack-category">{group.category}</span>
              <h3>{group.title}</h3>
            </div>
            <p>{group.description}</p>
            <div className="stack-tags tag-list">
              {group.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Skills;
