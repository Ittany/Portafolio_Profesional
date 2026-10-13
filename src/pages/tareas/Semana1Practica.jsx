// src/pages/tareas/Semana1Practica.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import brittanyImg from '../../assets/images/brittany.jpeg';
import '../../assets/styles/Semana1Practica.css';

const Semana1Practica = () => {
  return (
    <div className="sem1">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="sem1-card"
      >
        <div className="sem1-photo-wrap">
          <motion.img
            src={brittanyImg}
            alt="Brittany"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="sem1-photo"
          />
        </div>

        <h3 className="sem1-name">Brittany</h3>
        <p className="sem1-role">Ingeniería de Sistemas - UNCP</p>

        <div className="sem1-desc">
          <p>
            <span className="sem1-desc-strong">MI ROL:</span>{' '}
            <span className="sem1-role-tag">Full Stack Developer</span>
          </p>
          <p className="sem1-desc-p">
            Me apasiona conectar el mundo visual del{' '}
            <strong>Frontend</strong> con la lógica del{' '}
            <strong>Backend</strong>. Disfruto crear soluciones completas y
            escalables.
          </p>
        </div>

        <div className="sem1-links">
          <motion.a
            href="https://github.com/Ittany"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="sem1-link sem1-link--github"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/brittanygonzalesq/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="sem1-link sem1-link--linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </motion.a>

          <motion.a
            href="mailto:gonzalesbrittany802@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="sem1-link sem1-link--email"
            aria-label="Correo"
          >
            <FaEnvelope size={20} />
          </motion.a>
        </div>

        <div className="sem1-footer">
          Presentación para el reto semanal
        </div>
      </motion.div>
    </div>
  );
};

export default Semana1Practica;