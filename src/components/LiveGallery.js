import { useMemo, useState } from "react";

const items = [
  { id: 1, title: "Фото 01", color: "#efe7dc" },
  { id: 2, title: "Фото 02", color: "#d7ccc0" },
  { id: 3, title: "Фото 03", color: "#c8b8a3" },
  { id: 4, title: "Фото 04", color: "#e8d9bc" },
  { id: 5, title: "Фото 05", color: "#c4b69e" },
  { id: 6, title: "Фото 06", color: "#91846f" },
  { id: 7, title: "Фото 07", color: "#9d695f" },
  { id: 8, title: "Фото 08", color: "#6f7f65" }
];

function LiveGallery() {
  const [activeItem, setActiveItem] = useState(null);
  const loop = useMemo(() => [...items, ...items], []);

  return (
    <section id="gallery" className="section">
      <h2>Галерея</h2>
      <div className="gallery-row">
        <div className="gallery-track">
          {loop.map((item, index) => (
            <button
              type="button"
              className="gallery-cell"
              key={`${item.id}-${index}`}
              onClick={() => setActiveItem(item)}
            >
              <span
                className="gallery-cell-media"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              <span className="gallery-cell-title">{item.title}</span>
              <span className="gallery-cell-note">Здесь нужно добавить фото</span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="gallery-modal" role="dialog" aria-modal="true">
          <div className="gallery-modal-content">
            <button
              type="button"
              className="gallery-close"
              onClick={() => setActiveItem(null)}
            >
              Закрыть
            </button>
            <div
              className="gallery-modal-media"
              style={{ backgroundColor: activeItem.color }}
              aria-hidden="true"
            />
            <h3>{activeItem.title}</h3>
            <p>Здесь нужно добавить полноразмерное фото и описание.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default LiveGallery;
