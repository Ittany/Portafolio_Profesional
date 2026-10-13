// src/pages/tareas/Semana5Practica.jsx
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGithub,
  FaReact,
  FaCode,
  FaLayerGroup,
  FaExchangeAlt,
  FaPalette,
  FaCube,
  FaSitemap,
  FaCss3Alt,
} from 'react-icons/fa';
import '../../assets/styles/Semana5Practica.css';

const tecnologias = [
  { nombre: 'React', Icono: FaReact, color: '#61DAFB' },
  { nombre: 'Vite', Icono: FaCode, color: '#8b5cf6' },
  { nombre: 'JSX', Icono: FaCube, color: '#F7DF1E' },
  { nombre: 'CSS Modules', Icono: FaCss3Alt, color: '#1572B6' },
  { nombre: 'Props', Icono: FaExchangeAlt, color: '#c95d80' },
  { nombre: 'Componentes', Icono: FaSitemap, color: '#22c55e' },
];

const conceptos = [
  {
    Icono: FaLayerGroup,
    titulo: 'Arquitectura modular',
    descripcion:
      'App.jsx como orquestador. Componentes con una sola responsabilidad: Header, Navbar, Hero, Section, DetailCard, FilterBar, Footer.',
  },
  {
    Icono: FaExchangeAlt,
    titulo: 'Props y children',
    descripcion:
      'Datos enviados por atributos y contenido anidado con la prop children de React.',
  },
  {
    Icono: FaPalette,
    titulo: 'CSS Modules',
    descripcion:
      'Estilos encapsulados por componente usando .module.css. App.css solo con variables globales.',
  },
  {
    Icono: FaSitemap,
    titulo: 'Client-Side Rendering',
    descripcion:
      'Virtual DOM, bundle generado por Vite, Hot Module Replacement y árbol de componentes en React DevTools.',
  },
];

const integrantes = [
  {
    nombre: 'Brittany Gonzales Quiñonez',
    rol: 'Desarrollo completo',
  },
];

const Semana5Practica = () => {
  return (
    <div className="sem5p">
      <div className="sem5p-container">
        <Link to="/" className="sem5p-back">
          <FaArrowLeft /> Volver al inicio
        </Link>

        <header className="sem5p-header">
          <span className="sem5p-eyebrow">Semana 5 · Práctica</span>
          <h1 className="sem5p-title">
            Mimi Detalles · React + Vite
          </h1>
          <p className="sem5p-subtitle">
            Aplicación React con arquitectura modular de componentes, props y
            children, y estilos encapsulados con CSS Modules. Tienda de
            detalles hechos a mano con catálogo filtrable.
          </p>

          <div className="sem5p-actions">
            <a
              href="https://github.com/Ittany/mimidetalles"
              target="_blank"
              rel="noopener noreferrer"
              className="sem5p-btn sem5p-btn--primary"
            >
              <FaGithub /> Ver repositorio
            </a>
          </div>
        </header>

        <section className="sem5p-section">
          <a
            href="https://github.com/Ittany/mimidetalles"
            target="_blank"
            rel="noopener noreferrer"
            className="sem5p-monitor-link"
          >
            <div className="sem5p-monitor">
              <div className="sem5p-monitor-bar">
                <span className="sem5p-monitor-dot" />
                <span className="sem5p-monitor-dot" />
                <span className="sem5p-monitor-dot" />
                <span className="sem5p-monitor-url">
                  github.com/Ittany/mimidetalles
                </span>
              </div>

              <div className="sem5p-monitor-body">
                <FaReact size={64} color="#61DAFB" />
                <span className="sem5p-monitor-hint">
                  Click para abrir el repositorio
                </span>
              </div>

              <div className="sem5p-monitor-base" />
              <div className="sem5p-monitor-foot" />
            </div>
          </a>
        </section>

        <section className="sem5p-section">
          <div className="sem5p-stack">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem5p-stack-item">
                <Icono size={22} color={color} />
                <span>{nombre}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sem5p-section">
          <h2 className="sem5p-section-title">
            <FaCode /> Conceptos aplicados
          </h2>

          <div className="sem5p-concepts">
            {conceptos.map(({ Icono, titulo, descripcion }) => (
              <div key={titulo} className="sem5p-concept-card">
                <div className="sem5p-concept-icon">
                  <Icono />
                </div>
                <h3 className="sem5p-concept-title">{titulo}</h3>
                <p className="sem5p-concept-text">{descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sem5p-section">
          <div className="sem5p-team">
            {integrantes.map((p) => (
              <div key={p.nombre} className="sem5p-team-member">
                <div className="sem5p-team-avatar">
                  {p.nombre
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="sem5p-team-name">{p.nombre}</p>
                  <p className="sem5p-team-role">{p.rol}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="sem5p-footer">
          <a
            href="https://github.com/Ittany/mimidetalles"
            target="_blank"
            rel="noopener noreferrer"
            className="sem5p-btn sem5p-btn--secondary"
          >
            <FaGithub /> Repositorio
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Semana5Practica;