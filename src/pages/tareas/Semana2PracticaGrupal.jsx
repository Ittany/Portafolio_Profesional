// src/pages/tareas/Semana2Practica.jsx
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaLayerGroup,
  FaUniversalAccess,
  FaSearch,
  FaCode,
} from 'react-icons/fa';
import '../../assets/styles/Semana2PracticaGrupal.css';

const tecnologias = [
  { nombre: 'HTML5', Icono: FaHtml5, color: '#E34F26' },
  { nombre: 'CSS3', Icono: FaCss3Alt, color: '#1572B6' },
  { nombre: 'Grid', Icono: FaLayerGroup, color: '#264de4' },
  { nombre: 'Flexbox', Icono: FaCode, color: '#61DAFB' },
  { nombre: 'ARIA', Icono: FaUniversalAccess, color: '#c95d80' },
  { nombre: 'SEO', Icono: FaSearch, color: '#22c55e' },
];

const integrantes = [
  'Asturimac Medina Richard Favio',
  'Brittany Gonzales Quiñonez',
];

const Semana2Practica = () => {
  return (
    <div className="sem2p">
      <div className="sem2p-container">
        <Link to="/" className="sem2p-back">
          <FaArrowLeft /> Volver al inicio
        </Link>

        <header className="sem2p-header">
          <span className="sem2p-eyebrow">Semana 2 · Práctica</span>
          <h1 className="sem2p-title">
            HTML5, Grid, Flexbox y SEO
          </h1>
          <p className="sem2p-subtitle">
              Implementar una estructura HTML5 semántica con atributos ARIA,
              maquetar un layout híbrido (CSS Grid + Flexbox) con tipografía
              fluida, aplicar diseño responsivo avanzado con Container
              Queries, y validar accesibilidad, SEO y compatibilidad cruzada.
              Simulando una página web de su preferencia.
          </p>

          <div className="sem2p-actions">
            <a
              href="https://favio-coder.github.io/Asturimac-Gonzales-Sem02/"
              target="_blank"
              rel="noopener noreferrer"
              className="sem2p-btn sem2p-btn--primary"
            >
              <FaExternalLinkAlt /> Ver en vivo
            </a>
            <a
              href="https://github.com/Favio-coder/Asturimac-Gonzales-Sem02"
              target="_blank"
              rel="noopener noreferrer"
              className="sem2p-btn sem2p-btn--secondary"
            >
              <FaGithub /> Código
            </a>
          </div>
        </header>

        <section className="sem2p-section">
          <div className="sem2p-preview">
            <div className="sem2p-preview-bar">
              <span className="sem2p-preview-dot" />
              <span className="sem2p-preview-dot" />
              <span className="sem2p-preview-dot" />
              <span className="sem2p-preview-url">
                favio-coder.github.io/Asturimac-Gonzales-Sem02
              </span>
              <a
                href="https://favio-coder.github.io/Asturimac-Gonzales-Sem02/"
                target="_blank"
                rel="noopener noreferrer"
                className="sem2p-preview-open"
                aria-label="Abrir en pestaña nueva"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="sem2p-preview-frame-wrap">
              <iframe
                src="https://favio-coder.github.io/Asturimac-Gonzales-Sem02/"
                title="Preview Asturimac-Gonzales-Sem02"
                className="sem2p-preview-frame"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="sem2p-section">
          <div className="sem2p-stack">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem2p-stack-item">
                <Icono size={22} color={color} />
                <span>{nombre}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sem2p-section">
          <div className="sem2p-team">
            {integrantes.map((nombre) => (
              <div key={nombre} className="sem2p-team-member">
                <div className="sem2p-team-avatar">
                  {nombre
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <p className="sem2p-team-name">{nombre}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="sem2p-footer">
          <a
            href="https://github.com/Favio-coder/Asturimac-Gonzales-Sem02"
            target="_blank"
            rel="noopener noreferrer"
            className="sem2p-btn sem2p-btn--secondary"
          >
            <FaGithub /> Repositorio
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Semana2Practica;