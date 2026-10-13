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
  FaKeyboard,
  FaCircleNotch,
  FaRandom,
  FaCodeBranch,
} from 'react-icons/fa';
import '../../assets/styles/Semana4Teoria.css';

const tecnologias = [
  { nombre: 'HTML5', Icono: FaHtml5, color: '#E34F26' },
  { nombre: 'CSS3', Icono: FaCss3Alt, color: '#1572B6' },
  { nombre: 'JavaScript', Icono: FaJsSquare, color: '#F7DF1E' },
];

const modulos = [
  {
    id: 1,
    nombre: 'Parte 1 · Ruleta',
    descripcion:
      'Ruleta dinámica generada en canvas con sectores de colores, selección aleatoria y control total por teclado.',
    features: [
      'Ruleta con triángulo indicador',
      'Elementos desde un textarea',
      'Persistencia en localStorage',
      'Atajos de teclado S / E / R / F',
    ],
    destacada: true,
  },
  {
    id: 2,
    nombre: 'Parte 2 · Sorteo de equipos',
    descripcion:
      'Generador aleatorio de equipos a partir de una lista de participantes, con título personalizable y exportación.',
    features: [
      'Hasta 100 participantes',
      'Cantidad de equipos o por equipo',
      'Animación de sorteo en vivo',
      'Exportar imagen / portapapeles',
    ],
  },
];

const atajos = [
  {
    tecla: 'SPACE',
    titulo: 'Girar ruleta',
    descripcion: 'Inicia el giro aleatorio y muestra el resultado en respuesta.',
  },
  {
    tecla: 'S',
    titulo: 'Ocultar seleccionado',
    descripcion:
      'Resalta en gris el último elemento sorteado en el textarea y lo excluye del siguiente giro.',
  },
  {
    tecla: 'E',
    titulo: 'Editar elementos',
    descripcion:
      'Habilita la edición del textarea permitiendo ingresar números o texto libre.',
  },
  {
    tecla: 'R',
    titulo: 'Reiniciar',
    descripcion:
      'Restaura los elementos ocultos, quita el resaltado y vuelve al estado inicial.',
  },
  {
    tecla: 'F',
    titulo: 'Pantalla completa',
    descripcion: 'Activa o desactiva el modo pantalla completa del navegador.',
  },
];

const integrantes = [
  {
    nombre: 'Brittany Gonzales Quiñonez',
    rol: 'Líder · Desarrollo de la ruleta',
  },
  { nombre: 'Integrante 2', rol: 'Desarrollo parte 2' },
  { nombre: 'Integrante 3', rol: 'Estilos y maquetación' },
  { nombre: 'Integrante 4', rol: 'Documentación' },
];

const Semana4Teoria = () => {
  const [preview, setPreview] = useState('index');

  const urls = {
    index: 'https://favio-coder.github.io/Sem4-PracticaCalificada/',
    parte1:
      'https://favio-coder.github.io/Sem4-PracticaCalificada/parte1/index.html',
    parte2:
      'https://favio-coder.github.io/Sem4-PracticaCalificada/parte2/index.html',
  };

  return (
    <div className="sem4t">
      <div className="sem4t-container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="sem4t-back">
            <FaArrowLeft /> Volver al inicio
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sem4t-header"
        >
          <span className="sem4t-eyebrow">Semana 4 · Teoría</span>
          <h1 className="sem4t-title">Práctica Calificada 03</h1>
          <p className="sem4t-subtitle">
            Aula virtual interactiva desarrollada con HTML, CSS y JavaScript
            puro, sin librerías externas. El proyecto integra una ruleta
            aleatoria totalmente controlable por teclado y un sistema de
            sorteo de equipos con exportación de resultados.
          </p>

          <div className="sem4t-actions">
            <a
              href="https://favio-coder.github.io/Sem4-PracticaCalificada/"
              target="_blank"
              rel="noopener noreferrer"
              className="sem4t-btn sem4t-btn--primary"
            >
              <FaExternalLinkAlt /> Ver demo en vivo
            </a>
            <a
              href="https://github.com/Favio-coder/Sem4-PracticaCalificada"
              target="_blank"
              rel="noopener noreferrer"
              className="sem4t-btn sem4t-btn--secondary"
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
          className="sem4t-section"
        >
          <h2 className="sem4t-section-title">
            <FaExternalLinkAlt /> Previsualización
          </h2>

          <div className="sem4t-preview">
            <div className="sem4t-preview-tabs">
              {Object.keys(urls).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPreview(key)}
                  className={`sem4t-preview-tab ${
                    preview === key ? 'sem4t-preview-tab--active' : ''
                  }`}
                >
                  {key === 'index'
                    ? 'Inicio'
                    : key === 'parte1'
                    ? 'Ruleta'
                    : 'Sorteo'}
                </button>
              ))}

              <a
                href={urls[preview]}
                target="_blank"
                rel="noopener noreferrer"
                className="sem4t-preview-external"
                aria-label="Abrir en pestaña nueva"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="sem4t-preview-frame-wrap">
              <iframe
                key={preview}
                src={urls[preview]}
                title={`Preview ${preview}`}
                className="sem4t-preview-frame"
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
          className="sem4t-section"
        >
          <h2 className="sem4t-section-title">
            <FaCode /> Tecnologías utilizadas
          </h2>
          <div className="sem4t-tech-grid">
            {tecnologias.map(({ nombre, Icono, color }) => (
              <div key={nombre} className="sem4t-tech-card">
                <Icono size={32} color={color} />
                <span className="sem4t-tech-name">{nombre}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="sem4t-section"
        >
          <h2 className="sem4t-section-title">
            <FaPalette /> Módulos del proyecto
          </h2>

          <div className="sem4t-modules-grid">
            {modulos.map((m, index) => (
              <motion.article
                key={m.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`sem4t-module-card ${
                  m.destacada ? 'sem4t-module-card--destacada' : ''
                }`}
              >
                {m.destacada && (
                  <span className="sem4t-module-badge">Mi aporte principal</span>
                )}

                <h3 className="sem4t-module-name">{m.nombre}</h3>
                <p className="sem4t-module-desc">{m.descripcion}</p>

                <ul className="sem4t-module-features">
                  {m.features.map((f) => (
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
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="sem4t-section"
        >
          <h2 className="sem4t-section-title">
            <FaKeyboard /> Atajos de teclado implementados
          </h2>

          <div className="sem4t-shortcuts">
            {atajos.map((a) => (
              <div key={a.tecla} className="sem4t-shortcut">
                <kbd className="sem4t-kbd">{a.tecla}</kbd>
                <div className="sem4t-shortcut-body">
                  <h3 className="sem4t-shortcut-title">{a.titulo}</h3>
                  <p className="sem4t-shortcut-text">{a.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="sem4t-section"
        >
          <h2 className="sem4t-section-title">
            <FaCodeBranch /> Mi rol en el proyecto
          </h2>

          <div className="sem4t-role">
            <div className="sem4t-role-card">
              <div className="sem4t-role-icon">
                <FaCircleNotch />
              </div>
              <h3 className="sem4t-role-title">Ruleta aleatoria</h3>
              <p className="sem4t-role-text">
                Diseñé el canvas con sectores de colores, el triángulo
                indicador y la animación de giro respetando los 5 colores
                base repetidos por ciclo.
              </p>
            </div>

            <div className="sem4t-role-card">
              <div className="sem4t-role-icon">
                <FaKeyboard />
              </div>
              <h3 className="sem4t-role-title">Control por teclado</h3>
              <p className="sem4t-role-text">
                Implementé los atajos <code>S</code>, <code>E</code>,{' '}
                <code>R</code> y <code>F</code> que permiten ocultar el
                seleccionado, editar, reiniciar y alternar pantalla completa.
              </p>
            </div>

            <div className="sem4t-role-card">
              <div className="sem4t-role-icon">
                <FaRandom />
              </div>
              <h3 className="sem4t-role-title">Persistencia y estado</h3>
              <p className="sem4t-role-text">
                Sincronicé el textarea con la ruleta en tiempo real y guardé
                la lista de elementos en <code>localStorage</code> para
                conservarla entre sesiones.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="sem4t-section"
        >
          <h2 className="sem4t-section-title">
            <FaUsers /> Equipo de trabajo
          </h2>

          <div className="sem4t-team">
            {integrantes.map((persona) => (
              <div key={persona.nombre} className="sem4t-team-member">
                <div className="sem4t-team-avatar">
                  {persona.nombre
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="sem4t-team-name">{persona.nombre}</p>
                  <p className="sem4t-team-role">{persona.rol}</p>
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
          className="sem4t-footer"
        >
          <p className="sem4t-footer-text">
            Semana 4
          </p>

        </motion.footer>
      </div>
    </div>
  );
};

export default Semana4Teoria;