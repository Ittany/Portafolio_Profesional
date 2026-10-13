// src/pages/tareas/Semana2Teoria.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaHtml5,
  FaCss3Alt,
  FaCodeBranch,
  FaUsers,
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaLeaf,
  FaShoppingCart,
  FaLayerGroup,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import '../../assets/styles/Semana3Teoria.css';

const tecnologias = [
  { nombre: 'HTML5', Icono: FaHtml5, color: '#E34F26' },
  { nombre: 'Tailwind CSS', Icono: SiTailwindcss, color: '#06B6D4' },
  { nombre: 'CSS3', Icono: FaCss3Alt, color: '#1572B6' },
];

const paginas = [
  {
    id: 1,
    nombre: 'Page 01',
    descripcion:
      'Vista dividida en grid de 2 columnas con listas de mensajes estilo bandeja de entrada, adaptada a 3 breakpoints responsivos.',
    features: [
      'Grid 2 columnas · 1 fila',
      'Listas tipo inbox',
      'Iconos SVG nativos',
      'Responsive 700 / 1400 px',
    ],
  },
  {
    id: 2,
    nombre: 'Page 02',
    descripcion:
      'Cards informativas con imágenes y datos de las 10 playas y 10 ciudades más importantes del Perú, con simetría matemática.',
    features: [
      'Cards de 200 × 120 px',
      'Layout con flexbox',
      'Hover de botones gris claro',
      'Grid responsivo',
    ],
  },
  {
    id: 3,
    nombre: 'Page 03',
    descripcion:
      'Landing e-commerce de plantas con navbar, hero, catálogo de productos, footer completo y efectos hover con opacidad aumentada.',
    features: [
      'Navbar + hero + catálogo',
      'Hover con +15% opacidad',
      'Responsive flex + media queries',
      '4 breakpoints: 480/900/1200',
    ],
    destacada: true,
  },
];

const integrantes = [
  {
    nombre: 'Brittany Gonzales Quiñonez',
    rol: 'Líder · Autora del repo · Merge final',
  },
  { nombre: 'Integrante 2', rol: 'Desarrollo frontend' },
  { nombre: 'Integrante 3', rol: 'Desarrollo frontend' },
];

const Semana2Teoria = () => {
  const [preview, setPreview] = useState('index');

  const urls = {
    index: 'https://ittany.github.io/Practica02/',
    page01: 'https://ittany.github.io/Practica02/page1/page01.html',
    page02: 'https://ittany.github.io/Practica02/page2/page02.html',
    page03: 'https://ittany.github.io/Practica02/page3/page03.html',
  };

  return (
    <div className="sem2t">
      <div className="sem2t-container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="sem2t-back">
            <FaArrowLeft /> Volver al inicio
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sem2t-header"
        >
          <span className="sem2t-eyebrow">Semana 2 · Teoría</span>
          <h1 className="sem2t-title">Práctica Calificada 02</h1>
          <p className="sem2t-subtitle">
            Aplicación web multi-página construida íntegramente con HTML y
            Tailwind CSS. El proyecto aborda listas tipo bandeja de entrada,
            cards informativos con simetría matemática y una tienda de
            plantas con diseño responsivo de 4 breakpoints.
          </p>

          <div className="sem2t-actions">
            <a
              href="https://ittany.github.io/Practica02/"
              target="_blank"
              rel="noopener noreferrer"
              className="sem2t-btn sem2t-btn--primary"
            >
              <FaExternalLinkAlt /> Ver demo en vivo
            </a>
            <a
              href="https://github.com/Ittany/Practica02"
              target="_blank"
              rel="noopener noreferrer"
              className="sem2t-btn sem2t-btn--secondary"
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
          className="sem2t-section"
        >
          <h2 className="sem2t-section-title">
            <FaExternalLinkAlt /> Previsualización
          </h2>

          <div className="sem2t-preview">
            <div className="sem2t-preview-tabs">
              {Object.keys(urls).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPreview(key)}
                  className={`sem2t-preview-tab ${
                    preview === key ? 'sem2t-preview-tab--active' : ''
                  }`}
                >
                  {key === 'index' ? 'Inicio' : `Page ${key.replace('page', '')}`}
                </button>
              ))}

              <a
                href={urls[preview]}
                target="_blank"
                rel="noopener noreferrer"
                className="sem2t-preview-external"
                aria-label="Abrir en pestaña nueva"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="sem2t-preview-frame-wrap">
              <iframe
                key={preview}
                src={urls[preview]}
                title={`Preview ${preview}`}
                className="sem2t-preview-frame"
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
          className="sem2t-section"
        >
          <h2 className="sem2t-section-title">
            <FaCode /> Tecnologías utilizadas
          </h2>
          <div className="sem2t-tech-grid">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem2t-tech-card">
                <Icono size={32} color={color} />
                <span className="sem2t-tech-name">{nombre}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="sem2t-section"
        >
          <h2 className="sem2t-section-title">
            <FaPalette /> Estructura del proyecto
          </h2>

          <div className="sem2t-pages-grid">
            {paginas.map((p, index) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`sem2t-page-card ${
                  p.destacada ? 'sem2t-page-card--destacada' : ''
                }`}
              >
                {p.destacada && (
                  <span className="sem2t-page-badge">Mi aporte principal</span>
                )}

                <h3 className="sem2t-page-name">{p.nombre}</h3>
                <p className="sem2t-page-desc">{p.descripcion}</p>

                <ul className="sem2t-page-features">
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
          className="sem2t-section"
        >
          <h2 className="sem2t-section-title">
            <FaLayerGroup /> Mi rol en el proyecto
          </h2>

          <div className="sem2t-role">
            <div className="sem2t-role-card">
              <div className="sem2t-role-icon">
                <FaCodeBranch />
              </div>
              <h3 className="sem2t-role-title">Creación del repositorio</h3>
              <p className="sem2t-role-text">
                Inicialicé el proyecto en GitHub, configuré las ramas de cada
                integrante y gestioné los permisos de colaboración.
              </p>
            </div>

            <div className="sem2t-role-card">
              <div className="sem2t-role-icon">
                <FaLeaf />
              </div>
              <h3 className="sem2t-role-title">Desarrollo de Page 03</h3>
              <p className="sem2t-role-text">
                Diseñé la tienda de plantas completa: navbar, hero, catálogo
                de productos, footer y efectos hover con opacidad progresiva.
              </p>
            </div>

            <div className="sem2t-role-card">
              <div className="sem2t-role-icon">
                <FaShoppingCart />
              </div>
              <h3 className="sem2t-role-title">Integración final</h3>
              <p className="sem2t-role-text">
                Realicé el <code>git pull</code> de cada rama, resolví
                conflictos y ejecuté el merge final hacia <code>main</code>.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="sem2t-section"
        >
          <h2 className="sem2t-section-title">
            <FaMobileAlt /> Enfoque de desarrollo
          </h2>

          <div className="sem2t-focus-grid">
            <div className="sem2t-focus-card">
              <h3 className="sem2t-focus-title">Tailwind utility-first</h3>
              <p className="sem2t-focus-text">
                Uso de clases utilitarias para maquetación rápida y
                consistente, sin CSS personalizado adicional.
              </p>
            </div>
            <div className="sem2t-focus-card">
              <h3 className="sem2t-focus-title">Diseño responsivo</h3>
              <p className="sem2t-focus-text">
                Breakpoints específicos en 480px, 900px y 1200px según los
                requerimientos de cada página.
              </p>
            </div>
            <div className="sem2t-focus-card">
              <h3 className="sem2t-focus-title">Trabajo colaborativo</h3>
              <p className="sem2t-focus-text">
                Flujo con ramas por integrante, commits descriptivos y merge
                final coordinado por el líder del equipo.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="sem2t-section"
        >
          <h2 className="sem2t-section-title">
            <FaUsers /> Equipo de trabajo
          </h2>

          <div className="sem2t-team">
            {integrantes.map((persona) => (
              <div key={persona.nombre} className="sem2t-team-member">
                <div className="sem2t-team-avatar">
                  {persona.nombre
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="sem2t-team-name">{persona.nombre}</p>
                  <p className="sem2t-team-role">{persona.rol}</p>
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
          className="sem2t-footer"
        >
          <p className="sem2t-footer-text">
            Proyecto semana 3
          </p>

        </motion.footer>
      </div>
    </div>
  );
};

export default Semana2Teoria;