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

const Experience = () => {
  return (
    <section id="experience" className="page-section experience experience-container">
      <div className="experience-content">
        <div className="experience-heading">
          <h2>EXPERIÊNCIA PRÁTICA</h2>
          <p>
            Atuação em diferentes camadas da aplicação, conectando contexto de negócio, código e entrega.
          </p>
        </div>

        <div className="experience-grid">
          {experienceItems.map((item) => (
            <article className="experience-card" key={item.title}>
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
