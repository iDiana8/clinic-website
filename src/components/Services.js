const services = [
  { title: "Синтез", description: "Планирование и контроль этапов синтеза." },
  {
    title: "Диагностика и испытания",
    description: "Подбор тестов и анализ лабораторных результатов."
  },
  { title: "Ведение журналов", description: "Единый формат ведения данных и отчетов." },
  {
    title: "Внедрение технологий",
    description: "Интеграция новых методов в рабочий процесс."
  },
  {
    title: "Комплексные подходы",
    description: "Связка синтеза, диагностики и контроля качества."
  }
];

function Services() {
  return (
    <section id="services" className="section">
      <h2>Наши направления</h2>
      <div className="card-container">
        {services.map((service, index) => (
          <article className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
