import "../css/Experience.css";

const experienceItems = [
  {
    title: "Ambientes reais",
    text: "Atuação com cuidado sobre impacto, clareza na entrega e atenção ao comportamento esperado da aplicação.",
  },
  {
    title: "Análise de causa",
    text: "Leitura de cenários, reprodução de comportamentos, uso de logs e comparação entre o esperado e o que acontece na prática.",
  },
  {
    title: "Full stack na prática",
    text: "Correções e melhorias envolvendo interface, regras de negócio, banco de dados, APIs, integrações e fluxos de uso.",
  },
  {
    title: "Adaptação técnica",
    text: "Entrada em código desconhecido, leitura dos padrões existentes e aprendizado da tecnologia necessária para avançar com segurança.",
  },
  {
    title: "Comunicação e contexto",
    text: "Organização de evidências, hipóteses, solução aplicada e próximos passos em uma explicação clara para diferentes contextos.",
  },
];

const featuredExperience = experienceItems.find((item) => item.title === "Full stack na prática");
const supportingExperiences = experienceItems.filter((item) => item.title !== "Full stack na prática");
const orderedExperienceItems = featuredExperience
  ? [featuredExperience, ...supportingExperiences]
  : experienceItems;

const Experience = () => {
  return (
    <section id="experience" className="page-section experience experience-container section-container">
      <div className="experience-content section-inner">
        <div className="experience-heading section-header">
          <h2>EXPERIÊNCIA PRÁTICA</h2>
          <p>
            Atuação em diferentes camadas da aplicação, conectando contexto de negócio, código e entrega.
          </p>
        </div>

        <div className="experience-grid">
          {orderedExperienceItems.map((item, index) => (
            <article
              className={`experience-card portfolio-card ${index === 0 ? "experience-card-featured" : ""}`}
              key={item.title}
            >
              <span className="experience-card-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
