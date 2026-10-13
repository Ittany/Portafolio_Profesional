// src/pages/tareas/Semana6Teoria.jsx
import { Link } from 'react-router-dom';
import {
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCode,
  FaMobileAlt,
  FaUsers,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import '../../assets/styles/Semana6Teoria.css';

const tecnologias = [
  { nombre: 'React', Icono: FaReact, color: '#61DAFB' },
  { nombre: 'JSX', Icono: FaCode, color: '#F7DF1E' },
  { nombre: 'TypeScript', Icono: SiTypescript, color: '#3178C6' },
  { nombre: 'Responsive', Icono: FaMobileAlt, color: '#1572B6' },
];

const ejercicios = [
  {
    id: 1,
    nombre: 'Ejercicio 01 · Layout responsivo',
    descripcion:
      '7 componentes funcionales con diseño adaptado a PC, tablet y móvil usando CSS puro.',
    url: 'https://semana6-react.vercel.app/',
  },
  {
    id: 2,
    nombre: 'Ejercicio 02 · Componentes anidados',
    descripcion:
      '4 componentes anidados que propagan un objeto con datos personales hasta el último nivel.',
    url: 'https://semana6-react.vercel.app/',
  },
  {
    id: 3,
    nombre: 'Ejercicio 03 · Inscripción a evento',
    descripcion:
      'Formulario con validación de campos y componentes reutilizables.',
    url: 'https://semana6-react.vercel.app/',
  },
];

const Semana6Teoria = () => {
  return (
    <div className="sem6t">
      <div className="sem6t-container">
        <Link to="/" className="sem6t-back">
          <FaArrowLeft /> Volver al inicio
        </Link>

        <span className="sem6t-eyebrow">Semana 6 · Ejercicios Calificados</span>
        <h1 className="sem6t-title">Componentes, JSX y Estilos en React</h1>
        <p className="sem6t-subtitle">
          Actividad individual centrada en la construcción de componentes
          funcionales en React, comunicación mediante props y diseño
          responsivo con CSS puro.
        </p>

        <div className="sem6t-actions">
          <a
            href="https://semana6-react.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="sem6t-btn sem6t-btn--primary"
          >
            <FaExternalLinkAlt /> Ver demo en vivo
          </a>
          <a
            href="https://github.com/Ittany/Semana6-React"
            target="_blank"
            rel="noopener noreferrer"
            className="sem6t-btn sem6t-btn--secondary"
          >
            <FaGithub /> Ver repositorio
          </a>
        </div>

        <section className="sem6t-section">
          <h2 className="sem6t-section-title">Tecnologías utilizadas</h2>
          <div className="sem6t-tech-grid">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem6t-tech-card">
                <Icono size={32} color={color} />
                <span className="sem6t-tech-name">{nombre}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sem6t-section">
          <h2 className="sem6t-section-title">Ejercicios desarrollados</h2>
          <div className="sem6t-exercises">
            {ejercicios.map((e) => (
              <a
                key={e.id}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sem6t-exercise-card"
              >
                <h3 className="sem6t-exercise-name">{e.nombre}</h3>
                <p className="sem6t-exercise-desc">{e.descripcion}</p>
                <span className="sem6t-exercise-cta">
                  <FaExternalLinkAlt /> Abrir ejercicio
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="sem6t-section">
          <h2 className="sem6t-section-title">
            <FaUsers /> Trabajo individual
          </h2>
          <div className="sem6t-team">
            <div className="sem6t-team-avatar">BG</div>
            <div>
              <p className="sem6t-team-name">Brittany Gonzales Quiñonez</p>
              <p className="sem6t-team-role">
                Desarrollo completo · 3 ejercicios Semana 6
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Semana6Teoria;