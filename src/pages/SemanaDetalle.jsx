import { useNavigate } from 'react-router-dom';
import '../assets/styles/SemanaDetalle.css';

const SemanaDetalle = ({ semana, tipo }) => {
  const navigate = useNavigate();

  return (
    <section className="semana">
      <div className="semana-container">
        <span className="semana-badge">
          {tipo} · Semana {semana}
        </span>

        <h1 className="semana-title">
          Semana {semana}
        </h1>

        <p className="semana-desc">
          Aquí irá el contenido de la {tipo.toLowerCase()} de la semana {semana}.
          Reemplaza este placeholder con lo que corresponda.
        </p>

        <button className="semana-btn" onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>
    </section>
  );
};

export default SemanaDetalle;