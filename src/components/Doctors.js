const doctors = [1, 2, 3];

function Doctors() {
  return (
    <section id="doctors" className="section light">
      <h2>Наши специалисты</h2>
      <div className="card-container">
        {doctors.map((item) => (
          <article className="card doctor-card" key={item}>
            <div className="photo-placeholder">Здесь нужно добавить фото</div>
            <h3>Имя Фамилия</h3>
            <p>Специализация</p>
            <p>Опыт работы, регалии и краткое описание.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Doctors;
