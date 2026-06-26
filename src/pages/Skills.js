import "../css/Skills.css";

const stackGroups = [
  {
    title: "Backend e regras de negócio",
    category: "Base de produto",
    description: "Atuação em serviços, endpoints, regras de negócio, integrações e manutenção evolutiva.",
    tags: ["PHP", "Symfony", "APIs REST", "Webhooks", "Python", "SQL"],
  },
  {
    title: "Front-end e interfaces",
    category: "Experiência de uso",
    description: "Construção e ajuste de interfaces, templates, componentes, fluxos de tela, comportamento dinâmico e experiência do usuário.",
    tags: ["JavaScript", "jQuery", "HTML", "CSS", "AJAX", "Bootstrap", "Twig", "Vue.js"],
  },
  {
    title: "Dados, busca e investigação",
    category: "Diagnóstico",
    description: "Consultas, leitura de logs, análise de inconsistências e apoio na identificação de causa-raiz.",
    tags: ["MySQL", "Elasticsearch", "SQL", "Logs", "Dados operacionais"],
  },
  {
    title: "Infra, ambiente e entrega",
    category: "Operação",
    description: "Uso de ferramentas de desenvolvimento, versionamento, ambiente local, rastreabilidade e apoio em melhorias de performance.",
    tags: ["Docker", "AWS S3", "CloudFront", "Edge Cache", "Git", "Bitbucket", "Jira"],
  },
  {
    title: "Qualidade e resolução de problemas",
    category: "Confiabilidade",
    description: "Transformação de cenários confusos em testes reproduzíveis, hipóteses técnicas e correções aplicáveis.",
    tags: ["Troubleshooting", "Causa-raiz", "Reprodução de cenários", "Validação", "Regressão"],
  },
  {
    title: "Aprendizado contínuo",
    category: "Evolução",
    featured: true,
    description: "Aprofundamento em tecnologias que ampliam meu repertório e ajudam a responder melhor ao contexto do produto.",
    tags: ["Laravel", "React", "Angular", "Python", "Novas stacks"],
  },
];

const Skills = () => {
  return (
    <section className="skills-container section-container">
      <div className="skills-content section-header centered">
        <h2>STACK E CAPACIDADES</h2>
        <p>
          Tecnologias, ferramentas e práticas que uso para desenvolver, analisar e evoluir aplicações.
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
    </section>
  );
}

export default Skills;
