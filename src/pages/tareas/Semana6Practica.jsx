// src/pages/tareas/Semana6Practica.jsx
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGithub,
  FaReact,
  FaCode,
  FaLayerGroup,
  FaExchangeAlt,
  FaRoute,
  FaCloudDownloadAlt,
  FaForm,
  FaExclamationTriangle,
  FaBell,
} from 'react-icons/fa';
import '../../assets/styles/Semana6Practica.css';

const tecnologias = [
  { nombre: 'React', Icono: FaReact, color: '#61DAFB' },
  { nombre: 'React Router', Icono: FaRoute, color: '#CA4245' },
  { nombre: 'Axios', Icono: FaCloudDownloadAlt, color: '#5A29E4' },
  { nombre: 'Vite', Icono: FaCode, color: '#8b5cf6' },
  { nombre: 'Async/Await', Icono: FaExchangeAlt, color: '#c95d80' },
  { nombre: 'SweetAlert2', Icono: FaBell, color: '#22c55e' },
];

const conceptos = [
  {
    Icono: FaRoute,
    titulo: 'Routing con React Router',
    descripcion:
      'BrowserRouter, Routes, Route y NavLink. Páginas Home, Catálogo, Pedidos y NotFound (404).',
  },
  {
    Icono: FaCloudDownloadAlt,
    titulo: 'Consumo de API',
    descripcion:
      'Axios con async/await en un custom hook useFetch. Estados loading, data y error con cleanup.',
  },
  {
    Icono: FaLayerGroup,
    titulo: 'Renderizado condicional e iterativo',
    descripcion:
      'Listado con .map() y key única. Loader y mensaje de error según el estado de la petición.',
  },
  {
    Icono: FaForm,
    titulo: 'Formulario controlado',
    descripcion:
      'Inputs con useState, validación en tiempo real y envío POST con async/await.',
  },
  {
    Icono: FaBell,
    titulo: 'Alertas y feedback',
    descripcion:
      'SweetAlert2 para confirmar envíos exitosos y avisar de errores de validación.',
  },
  {
    Icono: FaExclamationTriangle,
    titulo: 'Manejo de errores',
    descripcion:
      'Try/catch en cada petición con AbortController para evitar actualizaciones tras desmontar.',
  },
];

const integrantes = [
  {
    nombre: 'Brittany Gonzales Quiñonez',
    rol: 'Desarrollo completo',
  },
];

const Semana6Practica = () => {
  return (
    <div className="sem6p">
      <div className="sem6p-container">
        <Link to="/" className="sem6p-back">
          <FaArrowLeft /> Volver al inicio
        </Link>

        <header className="sem6p-header">
          <span className="sem6p-eyebrow">Semana 6 · Práctica</span>
          <h1 className="sem6p-title">
            El Ramo Huancayo · SPA React
          </h1>
          <p className="sem6p-subtitle">
            Florería con catálogo de arreglos florales, filtros, formulario de
            pedidos y ruta 404. Aplicación SPA con React Router, Axios y
            renderizado condicional.
          </p>

          <div className="sem6p-actions">
            <a
              href="https://github.com/Ittany/Floreria-Huancayo"
              target="_blank"
              rel="noopener noreferrer"
              className="sem6p-btn sem6p-btn--primary"
            >
              <FaGithub /> Ver repositorio
            </a>
          </div>
        </header>

        <section className="sem6p-section">
          <a
            href="https://github.com/Ittany/Floreria-Huancayo"
            target="_blank"
            rel="noopener noreferrer"
            className="sem6p-monitor-link"
          >
            <div className="sem6p-monitor">
              <div className="sem6p-monitor-bar">
                <span className="sem6p-monitor-dot" />
                <span className="sem6p-monitor-dot" />
                <span className="sem6p-monitor-dot" />
                <span className="sem6p-monitor-url">
                  github.com/Ittany/Floreria-Huancayo
                </span>
              </div>

              <div className="sem6p-monitor-body">
                <FaReact size={64} color="#61DAFB" />
                <span className="sem6p-monitor-hint">
                  Click para abrir el repositorio
                </span>
              </div>

              <div className="sem6p-monitor-base" />
              <div className="sem6p-monitor-foot" />
            </div>
          </a>
        </section>

        <section className="sem6p-section">
          <div className="sem6p-stack">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem6p-stack-item">
                <Icono size={22} color={color} />
                <span>{nombre}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sem6p-section">
          <h2 className="sem6p-section-title">
            <FaCode /> Conceptos aplicados
          </h2>

          <div className="sem6p-concepts">
            {conceptos.map(({ Icono, titulo, descripcion }) => (
              <div key={titulo} className="sem6p-concept-card">
                <div className="sem6p-concept-icon">
                  <Icono />
                </div>
                <h3 className="sem6p-concept-title">{titulo}</h3>
                <p className="sem6p-concept-text">{descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sem6p-section">
          <div className="sem6p-team">
            {integrantes.map((p) => (
              <div key={p.nombre} className="sem6p-team-member">
                <div className="sem6p-team-avatar">
                  {p.nombre
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="sem6p-team-name">{p.nombre}</p>
                  <p className="sem6p-team-role">{p.rol}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="sem6p-footer">
          <a
            href="https://github.com/Ittany/Floreria-Huancayo"
            target="_blank"
            rel="noopener noreferrer"
            className="sem6p-btn sem6p-btn--secondary"
          >
            <FaGithub /> Repositorio
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Semana6Practica;