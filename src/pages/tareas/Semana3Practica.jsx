// src/pages/tareas/Semana3Practica.jsx
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaBootstrap,
  FaMobileAlt,
  FaUniversalAccess,
  FaSearch,
  FaCode,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import '../../assets/styles/Semana3Practica.css';

const tecnologias = [
  { nombre: 'Bootstrap 5', Icono: FaBootstrap, color: '#7952B3' },
  { nombre: 'Tailwind CSS', Icono: SiTailwindcss, color: '#06B6D4' },
  { nombre: 'HTML5', Icono: FaCode, color: '#E34F26' },
  { nombre: 'Responsive', Icono: FaMobileAlt, color: '#c95d80' },
  { nombre: 'ARIA', Icono: FaUniversalAccess, color: '#8b5cf6' },
  { nombre: 'SEO', Icono: FaSearch, color: '#22c55e' },
];

const integrantes = ['Brittany Gonzales Quiñonez'];

const Semana3Practica = () => {
  return (
    <div className="sem3p">
      <div className="sem3p-container">
        <Link to="/" className="sem3p-back">
          <FaArrowLeft /> Volver al inicio
        </Link>

        <header className="sem3p-header">
          <span className="sem3p-eyebrow">Semana 3 · Práctica</span>
          <h1 className="sem3p-title">
            Bootstrap 5 + Tailwind CSS
          </h1>
          <p className="sem3p-subtitle">
            MyLibro: sitio de libros juveniles con navbar responsive, hero
            tipográfico, cards y formulario, combinando Bootstrap y Tailwind.
          </p>

          <div className="sem3p-actions">
            <a
              href="https://ittany.github.io/Sitio-Web-Libros/"
              target="_blank"
              rel="noopener noreferrer"
              className="sem3p-btn sem3p-btn--primary"
            >
              <FaExternalLinkAlt /> Ver en vivo
            </a>
            <a
              href="https://github.com/Ittany/Sitio-Web-Libros"
              target="_blank"
              rel="noopener noreferrer"
              className="sem3p-btn sem3p-btn--secondary"
            >
              <FaGithub /> Código
            </a>
          </div>
        </header>

        <section className="sem3p-section">
          <div className="sem3p-preview">
            <div className="sem3p-preview-bar">
              <span className="sem3p-preview-dot" />
              <span className="sem3p-preview-dot" />
              <span className="sem3p-preview-dot" />
              <span className="sem3p-preview-url">
                ittany.github.io/Sitio-Web-Libros
              </span>
              <a
                href="https://ittany.github.io/Sitio-Web-Libros/"
                target="_blank"
                rel="noopener noreferrer"
                className="sem3p-preview-open"
                aria-label="Abrir en pestaña nueva"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="sem3p-preview-frame-wrap">
              <iframe
                src="https://ittany.github.io/Sitio-Web-Libros/"
                title="Preview Sitio-Web-Libros"
                className="sem3p-preview-frame"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="sem3p-section">
          <div className="sem3p-stack">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem3p-stack-item">
                <Icono size={22} color={color} />
                <span>{nombre}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sem3p-section">
          <div className="sem3p-team">
            {integrantes.map((nombre) => (
              <div key={nombre} className="sem3p-team-member">
                <div className="sem3p-team-avatar">
                  {nombre
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="sem3p-team-name">{nombre}</p>
                  <p className="sem3p-team-role">Desarrollo completo</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="sem3p-footer">
          <a
            href="https://github.com/Ittany/Sitio-Web-Libros"
            target="_blank"
            rel="noopener noreferrer"
            className="sem3p-btn sem3p-btn--secondary"
          >
            <FaGithub /> Repositorio
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Semana3Practica;