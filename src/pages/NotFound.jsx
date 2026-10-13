// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaSearch } from 'react-icons/fa';
import '../assets/styles/NotFound.css';

const NotFound = () => {
  return (
    <section className="nf">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="nf-card"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
          className="nf-code"
        >
          404
        </motion.h1>

        <h2 className="nf-title">Página no encontrada</h2>

        <p className="nf-desc">
          Parece que la página que buscas no existe o fue movida.
          Puedes regresar al inicio o explorar mis proyectos.
        </p>

        <div className="nf-actions">
          <Link to="/" className="nf-btn nf-btn--primary">
            <FaHome /> Ir al inicio
          </Link>
          <Link to="/tareas" className="nf-btn nf-btn--secondary">
            <FaSearch /> Ver tareas
          </Link>
        </div>

        <div className="nf-decor nf-decor-1" />
        <div className="nf-decor nf-decor-2" />
      </motion.div>
    </section>
  );
};

export default NotFound;