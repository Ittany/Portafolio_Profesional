// src/pages/tareas/Semana3PracticaGrupal.jsx
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaBootstrap,
  FaMobileAlt,
  FaUniversalAccess,
  FaCode,
  FaLayerGroup,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import '../../assets/styles/Semana3PracticaGrupal.css';

const tecnologias = [
  { nombre: 'Bootstrap 5', Icono: FaBootstrap, color: '#7952B3' },
  { nombre: 'Tailwind CSS', Icono: SiTailwindcss, color: '#06B6D4' },
  { nombre: 'HTML5', Icono: FaCode, color: '#E34F26' },
  { nombre: 'Grid 12 col', Icono: FaLayerGroup, color: '#264de4' },
  { nombre: 'Responsive', Icono: FaMobileAlt, color: '#c95d80' },
  { nombre: 'Accesibilidad', Icono: FaUniversalAccess, color: '#8b5cf6' },
];

const integrantes = [
  {
    nombre: 'Richard Favio Asturimac Medina',
    rol: 'Grid de tarjetas y formulario',
  },
  {
    nombre: 'Brittany Gonzales Quiñonez',
    rol: 'Setup, SEO y navbar',
  },
];

const Semana3PracticaGrupal = () => {
  return (
    <div className="sem3pg">
      <div className="sem3pg-container">
        <Link to="/" className="sem3pg-back">
          <FaArrowLeft /> Volver al inicio
        </Link>

        <header className="sem3pg-header">
          <span className="sem3pg-eyebrow">Semana 3 · Práctica grupal</span>
          <h1 className="sem3pg-title">
            GYM Huancayo · Bootstrap + Tailwind
          </h1>
          <p className="sem3pg-subtitle">
            Landing de gimnasio con navbar responsive, hero tipográfico,
            grid de tarjetas y formulario accesible. Trabajo colaborativo
            con ramas individuales y Pull Requests.
          </p>

          <div className="sem3pg-actions">
            <a
              href="https://favio-coder.github.io/Grupo03-Semana3-Gimnasio/"
              target="_blank"
              rel="noopener noreferrer"
              className="sem3pg-btn sem3pg-btn--primary"
            >
              <FaExternalLinkAlt /> Ver en vivo
            </a>
            <a
              href="https://github.com/Favio-coder/Grupo03-Semana3-Gimnasio"
              target="_blank"
              rel="noopener noreferrer"
              className="sem3pg-btn sem3pg-btn--secondary"
            >
              <FaGithub /> Código
            </a>
          </div>
        </header>

        <section className="sem3pg-section">
          <div className="sem3pg-preview">
            <div className="sem3pg-preview-bar">
              <span className="sem3pg-preview-dot" />
              <span className="sem3pg-preview-dot" />
              <span className="sem3pg-preview-dot" />
              <span className="sem3pg-preview-url">
                favio-coder.github.io/Grupo03-Semana3-Gimnasio
              </span>
              <a
                href="https://favio-coder.github.io/Grupo03-Semana3-Gimnasio/"
                target="_blank"
                rel="noopener noreferrer"
                className="sem3pg-preview-open"
                aria-label="Abrir en pestaña nueva"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="sem3pg-preview-frame-wrap">
              <iframe
                src="https://favio-coder.github.io/Grupo03-Semana3-Gimnasio/"
                title="Preview GYM Huancayo"
                className="sem3pg-preview-frame"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="sem3pg-section">
          <div className="sem3pg-stack">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem3pg-stack-item">
                <Icono size={22} color={color} />
                <span>{nombre}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sem3pg-section">
          <div className="sem3pg-team">
            {integrantes.map((p) => (
              <div key={p.nombre} className="sem3pg-team-member">
                <div className="sem3pg-team-avatar">
                  {p.nombre
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="sem3pg-team-name">{p.nombre}</p>
                  <p className="sem3pg-team-role">{p.rol}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="sem3pg-footer">
          <a
            href="https://github.com/Favio-coder/Grupo03-Semana3-Gimnasio"
            target="_blank"
            rel="noopener noreferrer"
            className="sem3pg-btn sem3pg-btn--secondary"
          >
            <FaGithub /> Repositorio
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Semana3PracticaGrupal;