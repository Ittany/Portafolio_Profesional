// src/pages/Inicio.jsx
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaPython,
  FaVuejs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import '../assets/styles/Inicio.css'
import brittanyImg from '../assets/images/brittany.jpeg';

const proyectos = [
  {
    id: 1,
    nombre: 'Posgrado en Contabilidad',
    imagen:
      'https://raw.githubusercontent.com/Ittany/Aplicacion-web-para-Posgrado/main/imagenes%20(12).png',
    github: 'https://github.com/Ittany/Aplicacion-web-para-Posgrado',
    lenguajes: [FaHtml5, FaCss3Alt, FaJsSquare],
    colores: ['#E34F26', '#1572B6', '#F7DF1E'],
  },
  {
    id: 2,
    nombre: 'Mishi Cat · Adopción',
    imagen:
      'https://raw.githubusercontent.com/Ittany/Aplicacion-web-para-adoptar-mascotas/main/imagen1%20(5).png',
    github: 'https://github.com/Ittany/Aplicacion-web-para-adoptar-mascotas',
    lenguajes: [FaHtml5, FaCss3Alt, FaJsSquare],
    colores: ['#E34F26', '#1572B6', '#F7DF1E'],
  },
  {
    id: 3,
    nombre: 'MR Melamina · Muebles',
    github: 'https://github.com/Ittany/Muebles',
    demo: 'https://ittany.github.io/Muebles/',
    lenguajes: [FaHtml5, FaCss3Alt, FaJsSquare],
    colores: ['#E34F26', '#1572B6', '#F7DF1E'],
    destacado: true,
  },
];

const titles = [
  'Brittany',
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'React Developer',
];

const icons = [
  { Icon: FaReact, color: '#61DAFB' },
  { Icon: FaNodeJs, color: '#68A063' },
  { Icon: SiNextdotjs, color: '#111827' },
  { Icon: FaJsSquare, color: '#F7DF1E' },
  { Icon: SiTailwindcss, color: '#06B6D4' },
  { Icon: FaPython, color: '#3776AB' },
  { Icon: FaVuejs, color: '#4FC08D' },
  { Icon: SiTypescript, color: '#3178C6' },
];

const pastelColors = [
  '#F472B6', '#EC4899', '#DB2777', '#F9A8D4',
  '#A78BFA', '#8B5CF6', '#C084FC', '#E879F9',
  '#F0ABFC', '#FDA4AF', '#FB7185', '#FBCFE8',
  '#FF6EC7', '#FF9ECD', '#D946EF', '#C026D3',
  '#A855F7', '#9333EA', '#E11D48',
];

const AnimatedLetter = ({ char }) => {
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState(null);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const next = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    setColor(next);
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
    timeoutRef.current = setTimeout(() => setColor(null), 1200);
  };

  return (
    <motion.span
      onHoverStart={handleEnter}
      onHoverEnd={handleLeave}
      onTap={handleEnter}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={
        hovered
          ? {
              x: [0, -8, 8, -5, 5, 0],
              rotate: [0, -8, 8, -5, 5, 0],
              scale: [1, 1.15, 1.08, 1.12, 1.05, 1],
              color,
            }
          : { x: 0, rotate: 0, scale: 1, color: color || 'inherit' }
      }
      transition={
        hovered
          ? { duration: 0.6, ease: 'easeOut' }
          : { duration: 1.5, ease: 'easeOut' }
      }
      style={{ color: color || 'inherit', transition: 'color 1.6s ease-out' }}
      className="inline-block cursor-pointer select-none"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

const AnimatedText = ({ text }) => (
  <span className="inline-block">
    {text.split('').map((char, i) => (
      <AnimatedLetter key={i} char={char} />
    ))}
  </span>
);

const Inicio = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const handleTyping = useCallback(() => {
    const currentTitle = titles[loopNum % titles.length];

    if (isDeleting) {
      setText(currentTitle.substring(0, text.length - 1));
      setTypingSpeed(40);
    } else {
      setText(currentTitle.substring(0, text.length + 1));
      setTypingSpeed(120);
    }

    if (!isDeleting && text === currentTitle) {
      setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

  const radius = 190;

  const getIconPosition = (index) => {
    const angle = (index / icons.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  return (
    <div className="inicio">
      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-blob-left" />
        <div className="hero-blob-right" />

        <div className="hero-container">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="hero-content"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="hero-badge"
              >
                <span className="hero-badge-dot" />
                Disponible para nuevos proyectos
              </motion.div>

              <motion.h1 className="hero-title">
                Hola, soy
                <br />
                <span className="hero-title-gradient">{text}</span>
                <span className="hero-cursor">|</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="hero-subtitle"
              >
                Desarrollo soluciones web modernas, intuitivas y funcionales,
                combinando frontend, backend y diseño de interfaces para crear
                experiencias digitales completas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="hero-buttons"
              >
                <motion.a
                  href="#experience"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-primary"
                >
                  Ver proyectos
                </motion.a>

                <motion.a
                  href="#contacto"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-secondary"
                >
                  Contáctame
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="hero-visual"
            >
              <div className="avatar-glow" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="avatar-ring-dashed"
              />

              <div className="avatar-ring-solid" />
              <div className="avatar-bg" />

              <motion.img
                src={brittanyImg}
                alt="Brittany"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1, y: [0, -10, 0] }}
                transition={{
                  scale: { duration: 0.7 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="avatar-img"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                className="orbit-wrapper"
              >
                {icons.map(({ Icon, color }, index) => {
                  const { x, y } = getIconPosition(index);
                  return (
                    <motion.div
                      key={index}
                      className="orbit-icon"
                      style={{ x: x - 28, y: y - 28 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.25 }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 26,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <Icon size={30} color={color} />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="about" className="about">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="section-eyebrow">Conóceme</span>
            <h2 className="section-title">Sobre mí</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="about-card"
            >
              <div className="about-header">
                <div className="about-avatar">BG</div>
                <div>
                  <h3 className="about-name">Brittany Gonzales</h3>
                  <p className="about-role">
                    Estudiante de Ingeniería de Sistemas
                  </p>
                </div>
              </div>

              <p className="about-text">
                Soy estudiante de Ingeniería de Sistemas en la UNCP, interesada
                en el desarrollo de soluciones tecnológicas que combinen
                funcionalidad, diseño y una buena experiencia de usuario.
              </p>

              <p className="about-text">
                Me interesa especialmente el desarrollo web Full Stack,
                trabajando tanto en la construcción de interfaces como en la
                lógica y los servicios que permiten que una aplicación
                funcione de manera integral.
              </p>

              <div className="tech-section">
                <p className="tech-label">Tecnologías que utilizo</p>
                <div className="tech-tags">
                  {[
                    'React',
                    'JavaScript',
                    'Node.js',
                    'Python',
                    'Tailwind CSS',
                    'TypeScript',
                    'SQL',
                    'Git',
                  ].map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="about-side"
            >
              <motion.div whileHover={{ y: -4 }} className="feature-card">
                <div className="feature-icon">
                  <FaReact />
                </div>
                <h3 className="feature-title">Desarrollo Web</h3>
                <p className="feature-text">
                  Construcción de interfaces modernas y aplicaciones web
                  utilizando tecnologías frontend y backend.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="feature-card">
                <div className="feature-icon">
                  <SiTailwindcss />
                </div>
                <h3 className="feature-title">Diseño de Interfaces</h3>
                <p className="feature-text">
                  Interés por crear interfaces claras, responsive y centradas
                  en una experiencia de usuario intuitiva.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="feature-card feature-card-wide"
              >
                <div className="feature-icon">
                  <FaPython />
                </div>
                <h3 className="feature-title">Aprendizaje continuo</h3>
                <p className="feature-text">
                  Exploro nuevas tecnologías y herramientas para ampliar mis
                  conocimientos y mejorar mis soluciones.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="experience" className="projects">
        <div className="projects-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="section-eyebrow">Mi trabajo</span>
            <h2 className="section-title">Experiencia & proyectos</h2>
            <div className="section-divider" />
            <p className="projects-subtitle">
              Algunos de los proyectos y trabajos en los que he aplicado mis
              conocimientos de desarrollo web y tecnologías de software.
            </p>
          </motion.div>

          <div className="projects-grid">
            {proyectos.map((proyecto, index) => {
              if (proyecto.destacado && proyecto.demo) {
                return (
                  <motion.article
                    key={proyecto.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55 }}
                    className="project-featured"
                  >
                    <div className="project-featured-header">
                      <div>
                        <span className="project-featured-tag">
                          Landing comercial
                        </span>
                        <h3 className="project-featured-name">
                          {proyecto.nombre}
                        </h3>
                      </div>

                      <div className="project-featured-actions">
                        <a
                          href={proyecto.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-featured-btn project-featured-btn--ghost"
                        >
                          <FaGithub size={14} /> Repositorio
                        </a>
                        <a
                          href={proyecto.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-featured-btn project-featured-btn--primary"
                        >
                          Ver demo
                        </a>
                      </div>
                    </div>

                    <div className="project-featured-preview">
                      <div className="project-featured-bar">
                        <span className="project-featured-dot" />
                        <span className="project-featured-dot" />
                        <span className="project-featured-dot" />
                        <span className="project-featured-url">
                          ittany.github.io/Muebles
                        </span>
                      </div>

                      <iframe
                        src={proyecto.demo}
                        title={proyecto.nombre}
                        loading="lazy"
                        className="project-featured-frame"
                      />
                    </div>
                  </motion.article>
                );
              }

              return (
                <motion.article
                  key={proyecto.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  whileHover={{ y: -7 }}
                  className="project-card"
                >
                  <div className="project-image-wrap">
                    <div className="project-image-inner">
                      <img
                        src={proyecto.imagen}
                        alt={proyecto.nombre}
                        className="project-image"
                      />
                      <div className="project-overlay" />
                      <span className="project-number">0{index + 1}</span>
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-head">
                      <h3 className="project-name">{proyecto.nombre}</h3>
                      <div className="project-tech">
                        {proyecto.lenguajes.map((Icono, i) => (
                          <Icono
                            key={i}
                            size={18}
                            color={proyecto.colores[i]}
                            title="Tecnología"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="project-footer">
                      <div className="project-links">
                        {proyecto.github && (
                          <a
                            href={proyecto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FaGithub size={15} />
                            Repositorio
                          </a>
                        )}
                      </div>
                      <span className="project-tag">Proyecto</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contact">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="contact-title">
              <AnimatedText text="Conectemos ideas" />
            </h2>
            <p className="contact-subtitle">
              ¿Tienes una idea, proyecto o simplemente quieres conversar?
              Puedes escribirme y estaré encantada de leerte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="contact-wrapper"
          >
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-info-ring-1" />
                <div className="contact-info-ring-2" />

                <div className="contact-info-inner">
                  <div className="contact-photo-wrap">
                    <div className="contact-photo-inner">
                      <div className="contact-photo-glow" />
                      <img
                        src={brittanyImg}
                        alt="Brittany Gonzales"
                        className="contact-photo"
                      />
                      <span className="contact-photo-status" />
                    </div>
                  </div>

                  <h3 className="contact-name">Brittany Gonzales</h3>
                  <p className="contact-role">Ingeniería de Sistemas · UNCP</p>

                  <p className="contact-bio">
                    Estoy abierta a conocer nuevas ideas, proyectos y
                    oportunidades relacionadas con tecnología y desarrollo de
                    software.
                  </p>

                  <div className="contact-links">
                    <a
                      href="mailto:gonzalesbrittany802@gmail.com"
                      className="contact-link"
                    >
                      <span className="contact-link-icon">
                        <FaEnvelope />
                      </span>
                      <div className="contact-link-text">
                        <p className="contact-link-label">Email</p>
                        <p className="contact-link-value">
                          gonzalesbrittany802@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://github.com/Ittany"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <span className="contact-link-icon">
                        <FaGithub />
                      </span>
                      <div className="contact-link-text">
                        <p className="contact-link-label">Código</p>
                        <p className="contact-link-value">GitHub</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <span className="contact-link-icon">
                        <FaLinkedinIn />
                      </span>
                      <div className="contact-link-text">
                        <p className="contact-link-label">
                          Perfil profesional
                        </p>
                        <p className="contact-link-value">LinkedIn</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrap">
                <div className="contact-form-head">
                  <p className="contact-form-eyebrow">
                    ¿Tienes un proyecto?
                  </p>
                  <h3 className="contact-form-title">Envíame un mensaje</h3>
                  <p className="contact-form-desc">
                    Completa el formulario y recibiré tu mensaje directamente
                    en mi correo.
                  </p>
                </div>

                <form
                  action="https://formsubmit.co/gonzalesbrittany802@gmail.com"
                  method="POST"
                  className="contact-form"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nuevo mensaje desde tu portafolio"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="nombre" className="form-label">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="form-label">
                        Correo
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="tu@correo.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="asunto" className="form-label">
                      Asunto
                    </label>
                    <input
                      id="asunto"
                      type="text"
                      name="asunto"
                      required
                      placeholder="¿Sobre qué quieres hablar?"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="mensaje" className="form-label">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows="6"
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="form-textarea"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-submit"
                  >
                    Enviar mensaje
                    <span className="btn-submit-arrow">→</span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;