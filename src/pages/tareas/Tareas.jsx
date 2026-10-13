// src/pages/tareas/Tareas.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBookOpen, FaCode } from 'react-icons/fa';
import '../../assets/styles/Tareas.css';

const semanas = [
  {
    n: 1,
    titulo: 'Tarjeta de presentación',
    desc: 'Diseño de una tarjeta personal con foto, rol profesional y enlaces de contacto.',
    ruta: '/Semana1Practica',
    activa: true,
  },
  {
    n: 2,
    titulo: 'Por definir',
    desc: 'Contenido de la práctica de la semana 2.',
    ruta: '/Semana2Practica',
    activa: false,
  },
  {
    n: 3,
    titulo: 'Por definir',
    desc: 'Contenido de la práctica de la semana 3.',
    ruta: '/Semana3Practica',
    activa: false,
  },
  {
    n: 4,
    titulo: 'Por definir',
    desc: 'Contenido de la práctica de la semana 4.',
    ruta: '/Semana4Practica',
    activa: false,
  },
  {
    n: 5,
    titulo: 'Por definir',
    desc: 'Contenido de la práctica de la semana 5.',
    ruta: '/Semana5Practica',
    activa: false,
  },
  {
    n: 6,
    titulo: 'Por definir',
    desc: 'Contenido de la práctica de la semana 6.',
    ruta: '/Semana6Practica',
    activa: false,
  },
];

const Tareas = () => {
  return (
    <section className="tareas">
      <div className="tareas-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tareas-header"
        >
          <span className="tareas-eyebrow">
            <FaBookOpen /> Clase práctica
          </span>
          <h1 className="tareas-title">Tareas por semana</h1>
          <div className="tareas-divider" />
          <p className="tareas-subtitle">
            Actividades desarrolladas semana a semana en la clase práctica.
            Haz clic en cualquiera para ver su contenido.
          </p>
        </motion.div>

        <div className="tareas-grid">
          {semanas.map((s, index) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={s.ruta}
                className={`tareas-card ${s.activa ? 'tareas-card--activa' : ''}`}
              >
                <div className="tareas-card-head">
                  <div className="tareas-card-number">0{s.n}</div>
                  <span className="tareas-card-badge">
                    <FaCode /> Semana {s.n}
                  </span>
                </div>

                <h3 className="tareas-card-title">{s.titulo}</h3>
                <p className="tareas-card-desc">{s.desc}</p>

                <div className="tareas-card-footer">
                  <span className="tareas-card-link">
                    Ver tarea <FaArrowRight />
                  </span>
                  {!s.activa && (
                    <span className="tareas-card-status">Próximamente</span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tareas;