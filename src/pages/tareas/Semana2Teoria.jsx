import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaUsers,
  FaCode,
  FaPalette,
} from 'react-icons/fa';
import '../../assets/styles/Semana2Teoria.css';

const tecnologias = [
  { nombre: 'HTML5', Icono: FaHtml5, color: '#E34F26' },
  { nombre: 'CSS3', Icono: FaCss3Alt, color: '#1572B6' },
  { nombre: 'JavaScript', Icono: FaJsSquare, color: '#F7DF1E' },
];

const paginas = [
  {
    id: 1,
    nombre: 'Page 01',
    descripcion:
      'Formulario con animación flotante en los campos, validación visual y drop-zone para imágenes con previsualización del archivo.',
    features: [
      'Text fields con label flotante',
      'Cambio de color en foco',
      'Drop-zone con drag & drop',
      'Ventana modal con iconos SVG',
    ],
  },
  {
    id: 2,
    nombre: 'Page 02',
    descripcion:
      'Formulario por pasos (wizard) con radio buttons y selector de color RGB interactivo mediante sliders y campos numéricos.',
    features: [
      'Stepper con 3 pasos',
      'Radio buttons personalizados',
      'Selector de color RGB',
      'Sliders sincronizados',
    ],
  },
  {
    id: 3,
    nombre: 'Page 03',
    descripcion:
      'Landing page responsiva tipo e-commerce deportivo con catálogo de productos, marcas destacadas y efectos hover.',
    features: [
      'Grid de productos',
      'Hover con opacidad',
      'Diseño 100% responsivo',
      'Flexbox + media queries',
    ],
    destacada: true,
  },
];

const integrantes = [
  'Asturimac Medina Richard Favio',
  'Brittany Gonzales Quiñonez',
  'Torres Ambrosio Katherine Medally',
  'Ramos Tacza Camilda',
];

const Semana1Teoria = () => {
  const [preview, setPreview] = useState('index');

  const urls = {
    index: 'https://favio-coder.github.io/PracticaCalificada01-DesarrolloWeb/',
    page01:
      'https://favio-coder.github.io/PracticaCalificada01-DesarrolloWeb/page01.html',
    page02:
      'https://favio-coder.github.io/PracticaCalificada01-DesarrolloWeb/page02.html',
    page03:
      'https://favio-coder.github.io/PracticaCalificada01-DesarrolloWeb/page03.html',
  };

  return (
    <div className="sem1t">
      <div className="sem1t-container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="sem1t-back">
            <FaArrowLeft /> Volver al inicio
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sem1t-header"
        >
          <span className="sem1t-eyebrow">Semana 1 · Teoría</span>
          <h1 className="sem1t-title">Práctica Calificada 01</h1>
          <p className="sem1t-subtitle">
            Desarrollo de una aplicación web multi-página utilizando
            únicamente HTML, CSS y JavaScript puro. El proyecto abarca
            formularios interactivos, componentes animados y diseño
            responsivo.
          </p>

          <div className="sem1t-actions">
            <a
              href="https://favio-coder.github.io/PracticaCalificada01-DesarrolloWeb/"
              target="_blank"
              rel="noopener noreferrer"
              className="sem1t-btn sem1t-btn--primary"
            >
              <FaExternalLinkAlt /> Ver demo en vivo
            </a>
            <a
              href="https://github.com/Favio-coder/PracticaCalificada01-DesarrolloWeb"
              target="_blank"
              rel="noopener noreferrer"
              className="sem1t-btn sem1t-btn--secondary"
            >
              <FaGithub /> Ver repositorio
            </a>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="sem1t-section"
        >
          <h2 className="sem1t-section-title">
            <FaExternalLinkAlt /> Previsualización
          </h2>

          <div className="sem1t-preview">
            <div className="sem1t-preview-tabs">
            {Object.keys(urls).map((key) => (                
                <button
                  key={key}
                  type="button"
                  onClick={() => setPreview(key)}
                  className={`sem1t-preview-tab ${
                    preview === key ? 'sem1t-preview-tab--active' : ''
                  }`}
                >
                  {key === 'index' ? 'Inicio' : `Page ${key.replace('page', '')}`}
                </button>
              ))}

              <a
                href={urls[preview]}
                target="_blank"
                rel="noopener noreferrer"
                className="sem1t-preview-external"
                aria-label="Abrir en pestaña nueva"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="sem1t-preview-frame-wrap">
              <iframe
                key={preview}
                src={urls[preview]}
                title={`Preview ${preview}`}
                className="sem1t-preview-frame"
                loading="lazy"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="sem1t-section"
        >
          <h2 className="sem1t-section-title">
            <FaCode /> Tecnologías utilizadas
          </h2>
          <div className="sem1t-tech-grid">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem1t-tech-card">
                <Icono size={32} color={color} />
                <span className="sem1t-tech-name">{nombre}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="sem1t-section"
        >
          <h2 className="sem1t-section-title">
            <FaPalette /> Estructura del proyecto
          </h2>

          <div className="sem1t-pages-grid">
            {paginas.map((p, index) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className={`sem1t-page-card ${
                  p.destacada ? 'sem1t-page-card--destacada' : ''
                }`}
              >
                {p.destacada && (
                  <span className="sem1t-page-badge">
                    Mi aporte principal
                  </span>
                )}

                <h3 className="sem1t-page-name">{p.nombre}</h3>
                <p className="sem1t-page-desc">{p.descripcion}</p>

                <ul className="sem1t-page-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="sem1t-section"
        >
          <h2 className="sem1t-section-title">
            <FaUsers /> Equipo de trabajo
          </h2>

          <div className="sem1t-team">
            {integrantes.map((nombre, i) => (
              <div key={nombre} className="sem1t-team-member">
                <div className="sem1t-team-avatar">
                  {nombre
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="sem1t-team-name">{nombre}</p>
                  <p className="sem1t-team-role">
                    {i === 0 ? 'Líder del proyecto' : 'Desarrollo frontend'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sem1t-footer"
        >
          <p className="sem1t-footer-text">
            Práctica Semana 2
          </p>
           </motion.footer>
      </div>
    </div>
  );
};

export default Semana1Teoria;