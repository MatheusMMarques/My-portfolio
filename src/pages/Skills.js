import "../css/Skills.css";

const stackGroups = [
  {
    title: "Backend e regras de negócio",
    description: "Atuação em serviços, endpoints, regras de negócio, integrações e manutenção evolutiva.",
    tags: ["PHP", "Symfony", "APIs REST", "Webhooks", "Python", "SQL"],
  },
  {
    title: "Front-end e interfaces",
    description: "Construção e ajuste de interfaces, templates, componentes, fluxos de tela, comportamento dinâmico e experiência do usuário.",
    tags: ["JavaScript", "jQuery", "HTML", "CSS", "AJAX", "Bootstrap", "Twig", "Vue.js"],
  },
  {
    title: "Dados, busca e investigação",
    description: "Consultas, leitura de logs, análise de inconsistências e apoio na identificação de causa-raiz.",
    tags: ["MySQL", "Elasticsearch", "SQL", "Logs", "Dados operacionais"],
  },
  {
    title: "Infra, ambiente e entrega",
    description: "Uso de ferramentas de desenvolvimento, versionamento, ambiente local, rastreabilidade e apoio em melhorias de performance.",
    tags: ["Docker", "AWS S3", "CloudFront", "Edge Cache", "Git", "Bitbucket", "Jira"],
  },
  {
    title: "Qualidade e resolução de problemas",
    description: "Transformação de cenários confusos em testes reproduzíveis, hipóteses técnicas e correções aplicáveis.",
    tags: ["Troubleshooting", "Causa-raiz", "Reprodução de cenários", "Validação", "Regressão"],
  },
  {
    title: "Aprendizado contínuo",
    description: "Aprofundamento em tecnologias que ampliam meu repertório e ajudam a responder melhor ao contexto do produto.",
    tags: ["Laravel", "React", "Angular", "Python", "Novas stacks"],
  },
];

const Skills = () => {
  return (
    <section className="skills-container">
      <div className="skills-content">
        <h2>STACK E CAPACIDADES</h2>
        <p>
          Tecnologias, ferramentas e práticas que uso para desenvolver, analisar e evoluir aplicações.
        </p>
      </div>

      <div className="stack-grid">
        {stackGroups.map((group) => (
          <article className="stack-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="stack-tags">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
