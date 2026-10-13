// src/pages/tareas/Semana4Practica.jsx
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPaintBrush,
  FaBolt,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import '../../assets/styles/Semana4Practica.css';

const tecnologias = [
  { nombre: 'HTML5', Icono: FaHtml5, color: '#E34F26' },
  { nombre: 'CSS3', Icono: FaCss3Alt, color: '#1572B6' },
  { nombre: 'JavaScript', Icono: FaJsSquare, color: '#F7DF1E' },
  { nombre: 'TypeScript', Icono: SiTypescript, color: '#3178C6' },
  { nombre: 'Canvas API', Icono: FaPaintBrush, color: '#c95d80' },
  { nombre: 'Performance', Icono: FaBolt, color: '#8b5cf6' },
];

const integrantes = ['Brittany Gonzales Quiñonez'];

const Semana4Practica = () => {
  return (
    <div className="sem4p">
      <div className="sem4p-container">
        <Link to="/" className="sem4p-back">
          <FaArrowLeft /> Volver al inicio
        </Link>

        <header className="sem4p-header">
          <span className="sem4p-eyebrow">Semana 4 · Práctica</span>
          <h1 className="sem4p-title">
            JavaScript, Canvas y Animaciones
          </h1>
          <p className="sem4p-subtitle">
            Educanding: landing de cursos con manipulación del DOM, closures,
            IIFE, Canvas API, sistema de partículas y panel de diagnóstico de
            rendimiento en tiempo real.
          </p>

          <div className="sem4p-actions">
            <a
              href="https://ittany.github.io/Cursos_Venta/"
              target="_blank"
              rel="noopener noreferrer"
              className="sem4p-btn sem4p-btn--primary"
            >
              <FaExternalLinkAlt /> Ver en vivo
            </a>
            <a
              href="https://github.com/Ittany/Cursos_Venta"
              target="_blank"
              rel="noopener noreferrer"
              className="sem4p-btn sem4p-btn--secondary"
            >
              <FaGithub /> Código
            </a>
          </div>
        </header>

        <section className="sem4p-section">
          <div className="sem4p-preview">
            <div className="sem4p-preview-bar">
              <span className="sem4p-preview-dot" />
              <span className="sem4p-preview-dot" />
              <span className="sem4p-preview-dot" />
              <span className="sem4p-preview-url">
                ittany.github.io/Cursos_Venta
              </span>
              <a
                href="https://ittany.github.io/Cursos_Venta/"
                target="_blank"
                rel="noopener noreferrer"
                className="sem4p-preview-open"
                aria-label="Abrir en pestaña nueva"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="sem4p-preview-frame-wrap">
              <iframe
                src="https://ittany.github.io/Cursos_Venta/"
                title="Preview Cursos Venta"
                className="sem4p-preview-frame"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="sem4p-section">
          <div className="sem4p-stack">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem4p-stack-item">
                <Icono size={22} color={color} />
                <span>{nombre}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sem4p-section">
          <div className="sem4p-team">
            {integrantes.map((nombre) => (
              <div key={nombre} className="sem4p-team-member">
                <div className="sem4p-team-avatar">
                  {nombre
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="sem4p-team-name">{nombre}</p>
                  <p className="sem4p-team-role">Desarrollo completo</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="sem4p-footer">
          <a
            href="https://github.com/Ittany/Cursos_Venta"
            target="_blank"
            rel="noopener noreferrer"
            className="sem4p-btn sem4p-btn--secondary"
          >
            <FaGithub /> Repositorio
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Semana4Practica;