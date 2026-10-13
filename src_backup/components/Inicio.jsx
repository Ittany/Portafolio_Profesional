// src/components/Inicio.jsx
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
  FaCamera,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import brittanyImg from '../assets/brittany.jpeg';

const proyectos = [
  {
    id: 1,
    nombre: 'Practica02',
    imagen: 'https://via.placeholder.com/400x250/1e293b/ffffff?text=Practica02',
    github: 'https://github.com/Ittany/Practica02',
    lenguajes: [FaHtml5, FaCss3Alt, FaJsSquare],
    colores: ['#E34F26', '#1572B6', '#F7DF1E'],
  },
  {
    id: 2,
    nombre: 'Portafolio_UNCP',
    imagen: 'https://via.placeholder.com/400x250/0f172a/ffffff?text=Portafolio+UNCP',
    github: 'https://github.com/Ittany/Portafolio_UNCP',
    lenguajes: [FaReact, SiTailwindcss],
    colores: ['#61DAFB', '#06B6D4'],
  },
  {
    id: 3,
    nombre: 'Portafolio_Profesional',
    imagen: 'https://via.placeholder.com/400x250/111827/ffffff?text=Portafolio+Profesional',
    github: 'https://github.com/Ittany/Portafolio_Profesional',
    lenguajes: [FaReact, FaNodeJs, SiTailwindcss],
    colores: ['#61DAFB', '#68A063', '#06B6D4'],
  },
  {
    id: 4,
    nombre: 'Próximo Proyecto',
    imagen: 'https://via.placeholder.com/400x250/1f2937/ffffff?text=Próximamente',
    github: '#',
    lenguajes: [FaReact, SiTypescript],
    colores: ['#61DAFB', '#3178C6'],
  },
  {
    id: 5,
    nombre: 'Proyecto Futuro',
    imagen: 'https://via.placeholder.com/400x250/0b1120/ffffff?text=En+desarrollo',
    github: '#',
    lenguajes: [FaJsSquare, FaNodeJs],
    colores: ['#F7DF1E', '#68A063'],
  },
];

const AnimatedLetter = ({ char }) => {
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState(null);
  const timeoutRef = useRef(null);

  const pastelColors = [
    '#0BF42A', '#E40BF4', '#F4590B', '#F0F40B',
    '#F40BE0', '#130BF4', '#E727F5', '#F40B0B',
    '#2909C8', '#2EFFB6', '#D1FF47','#C02EFF', 
    '#FF2E8C', '#47F3FF', '#FFAF2E','#FFCB47',
    '#9CA7FF', '#169EDD', '#F863CE',
  ];

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const next = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    setColor(next);
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
    // El color se queda un momento y luego se desvanece lentamente
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
              // Movimiento hacia los lados (izq/der) + ligero tambaleo
              x: [0, -8, 8, -5, 5, 0],
              rotate: [0, -8, 8, -5, 5, 0],
              scale: [1, 1.15, 1.08, 1.12, 1.05, 1],
              color: color,
            }
          : {
              x: 0,
              rotate: 0,
              scale: 1,
              color: color || 'inherit',
            }
      }
      transition={
        hovered
          ? { duration: 0.6, ease: 'easeOut' }
          : { duration: 1.5, ease: 'easeOut' }
      }
      style={{
        color: color || 'inherit',
        transition: 'color 1.6s ease-out',
      }}
      className="inline-block cursor-pointer select-none"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

const AnimatedText = ({ text }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <AnimatedLetter key={i} char={char} />
      ))}
    </span>
  );
};

const Inicio = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const titles = [
    'Brittany',
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'React Developer',
  ];

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

  const radius = 190;

  const getIconPosition = (index) => {
    const angle = (index / icons.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  return (
    <>
      {/*SECCIÓN INICIO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16  font-sans gap-4"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:px-18">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex-1 text-center lg:max-w-2xl lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
                Disponible para nuevos proyectos
              </motion.div>

              <motion.h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                Hola, soy
                <br />
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  {text}
                </span>
                <span className="ml-1 text-cyan-500 animate-pulse">|</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mx-auto mb-9 max-w-xl text-base leading-8 text-slate-600 sm:text-lg md:text-xl lg:mx-0 dark:text-slate-300"
              >
                Desarrollo soluciones web modernas, intuitivas y funcionales,
                combinando frontend, backend y diseño de interfaces para crear
                experiencias digitales completas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4 lg:justify-start"
              >
                <motion.a
                  href="#proyectos"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Ver proyectos
                </motion.a>

                <motion.a
                  href="#contacto"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/60 px-8 py-3.5 font-semibold text-slate-700 backdrop-blur-md transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  Contáctame
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative flex h-[420px] w-[420px] max-w-full flex-shrink-0 items-center justify-center scale-[0.78] sm:scale-90 md:scale-100"
            >
              <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-cyan-400/30"
              />

              <div
                className="absolute h-[280px] w-[280px] rounded-full border-2 border-cyan-400/70"
                style={{
                  boxShadow:
                    '0 0 30px rgba(34, 211, 238, 0.20), inset 0 0 30px rgba(34, 211, 238, 0.05)',
                }}
              />

              <div className="absolute h-[235px] w-[235px] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent" />

              <motion.img
                src={brittanyImg}
                alt="Brittany"
                initial={{ scale: 0.8 }}
                animate={{
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  scale: { duration: 0.7 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute z-20 h-[210px] w-[210px] rounded-full border-4 border-white object-cover shadow-2xl dark:border-slate-800"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                className="absolute left-1/2 top-1/2 z-30 h-0 w-0"
              >
                {icons.map(({ Icon, color }, index) => {
                  const { x, y } = getIconPosition(index);
                  return (
                    <motion.div
                      key={index}
                      className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-120"
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

      {/* SECCIÓN SOBRE MÍ */}
      <section
        id="about"
        className="relative overflow-hidden px-4 py-24  sm:py-28"
      >
        {/* Decoración */}
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
              Conóceme
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl dark:text-white">
              Sobre mí
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          </motion.div>

          {/* Contenido principal */}
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Presentación */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-white/70 bg-white/55 p-7 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-9 dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-xl font-bold text-white shadow-lg shadow-cyan-500/20">
                  BG
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    Brittany Gonzales
                  </h3>
                  <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    Estudiante de Ingeniería de Sistemas
                  </p>
                </div>
              </div>

              <p className="mb-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                Soy estudiante de Ingeniería de Sistemas en la UNCP, interesada
                en el desarrollo de soluciones tecnológicas que combinen
                funcionalidad, diseño y una buena experiencia de usuario.
              </p>

              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                Me interesa especialmente el desarrollo web Full Stack,
                trabajando tanto en la construcción de interfaces como en la
                lógica y los servicios que permiten que una aplicación
                funcione de manera integral.
              </p>

              {/* Tecnologías */}
              <div className="mt-8 border-t border-slate-200/70 pt-6 dark:border-slate-700/50">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Tecnologías que utilizo
                </p>

                <div className="flex flex-wrap gap-2">
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
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tarjetas laterales */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              {/* Tarjeta 1 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-white/70 bg-white/55 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-500/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-500 transition-transform duration-300 group-hover:scale-110">
                  <FaReact />
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">
                  Desarrollo Web
                </h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Construcción de interfaces modernas y aplicaciones web
                  utilizando tecnologías frontend y backend.
                </p>
              </motion.div>

              {/* Tarjeta 2 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-white/70 bg-white/55 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-300/70 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-500 transition-transform duration-300 group-hover:scale-110">
                  <SiTailwindcss />
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">
                  Diseño de Interfaces
                </h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Interés por crear interfaces claras, responsive y centradas
                  en una experiencia de usuario intuitiva.
                </p>
              </motion.div>

              {/* Tarjeta 3 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-white/70 bg-white/55 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-300/70 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/40 sm:col-span-2 lg:col-span-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl text-indigo-500 transition-transform duration-300 group-hover:scale-110">
                  <FaPython />
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">
                  Aprendizaje continuo
                </h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Exploro nuevas tecnologías y herramientas para ampliar mis
                  conocimientos y mejorar mis soluciones.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN EXPERIENCIA / PROYECTOS */}
      <section
        id="experience"
     >
        <div className="relative z-10 px-4 py-24  sm:py-28">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
              Mi trabajo
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl dark:text-white">
              Experiencia & proyectos
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
              Algunos de los proyectos y trabajos en los que he aplicado mis
              conocimientos de desarrollo web y tecnologías de software.
            </p>
          </motion.div>

          {/* Grid de proyectos */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {proyectos.map((proyecto, index) => (
              <motion.article
                key={proyecto.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.55,
                }}
                whileHover={{ y: -7 }}
                className="group overflow-hidden rounded-3xl border border-white/70 bg-white/55 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-500/40"
              >
                {/* Imagen */}
                <div className="relative overflow-hidden p-3 pb-0">
                  <div className="relative overflow-hidden rounded-2xl bg-slate-900">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />

                    {/* Número */}
                    <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-slate-900/60 text-xs font-bold text-white backdrop-blur-md">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Información */}
                <div className="p-5">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                      {proyecto.nombre}
                    </h3>

                    <div className="flex shrink-0 gap-2">
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

                  <div className="flex items-center justify-between border-t border-slate-200/70 pt-4 dark:border-slate-700/50">
                    {proyecto.github !== '#' ? (
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                      >
                        <FaGithub size={17} />
                        Ver repositorio
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
                        En desarrollo
                      </span>
                    )}

                    <span className="text-xs font-medium text-slate-400 transition-colors group-hover:text-cyan-500">
                      Proyecto
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO= */}
      <section
        id="contacto"
        className="relative overflow-hiddenpx-4 py-24  sm:py-28"
      >
        {/* Decoración */}
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >

            <h2 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-6xl md:text-7xl dark:text-white">
              <AnimatedText text="Conectemos ideas" />
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
              ¿Tienes una idea, proyecto o simplemente quieres conversar?
              Puedes escribirme y estaré encantada de leerte.
            </p>
          </motion.div>

          {/* Contenedor principal */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem] border border-white/90 bg-white/60 shadow-2xl shadow-slate-900/5  dark:border-white/30 dark:bg-black/70"
          >
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              {/* información de contacto */}
              <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-white/20 to-blue-500/10 p-8 sm:p-10 lg:p-12 dark:from-cyan-500/10 dark:via-transparent dark:to-blue-500/10">
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-cyan-400/20" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-blue-400/20" />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Foto */}
                  <div className="mb-7 flex justify-center lg:justify-start">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-md" />

                      <img
                        src={brittanyImg}
                        alt="Brittany Gonzales"
                        className="relative h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl dark:border-slate-800"
                      />

                      <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-white bg-emerald-500 dark:border-slate-800" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white">
                    Brittany Gonzales
                  </h3>

                  <p className="mt-1 font-medium text-cyan-600 dark:text-cyan-400">
                    Ingeniería de Sistemas · UNCP
                  </p>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Estoy abierta a conocer nuevas ideas, proyectos y
                    oportunidades relacionadas con tecnología y desarrollo de
                    software.
                  </p>

                  {/* Redes */}
                  <div className="mt-8 space-y-3">
                    <a
                      href="mailto:gonzalesbrittany802@gmail.com"
                      className="group flex items-center gap-4 rounded-2xl border border-white/80 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg hover:shadow-red-500/10 dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-transform group-hover:scale-110">
                        <FaEnvelope />
                      </span>

                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-400">
                          Email
                        </p>
                        <p className="truncate text-sm font-semibold text-slate-700 dark:text-slate-200">
                          gonzalesbrittany802@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://github.com/Ittany"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/80 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/10 text-slate-800 transition-transform group-hover:scale-110 dark:bg-white/10 dark:text-white">
                        <FaGithub />
                      </span>

                      <div>
                        <p className="text-xs font-medium text-slate-400">
                          Código
                        </p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          GitHub
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/80 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition-transform group-hover:scale-110">
                        <FaLinkedinIn />
                      </span>

                      <div>
                        <p className="text-xs font-medium text-slate-400">
                          Perfil profesional
                        </p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          LinkedIn
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/*FORMULARIO */}
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="mb-7">
                  <p className="mb-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    ¿Tienes un proyecto?
                  </p>

                  <h3 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
                    Envíame un mensaje
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Completa el formulario y recibiré tu mensaje directamente
                    en mi correo.
                  </p>
                </div>

                <form
                  action="https://formsubmit.co/gonzalesbrittany802@gmail.com"
                  method="POST"
                  className="space-y-5"
                >
                  {/* Configuración FormSubmit */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nuevo mensaje desde tu portafolio"
                  />

                  <input
                    type="hidden"
                    name="_captcha"
                    value="false"
                  />

                  <input
                    type="hidden"
                    name="_template"
                    value="table"
                  />

                  {/* Nombre + correo */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                      >
                        Nombre
                      </label>

                      <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        className="w-full rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                      >
                        Correo
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="tu@correo.com"
                        className="w-full rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Asunto */}
                  <div>
                    <label
                      htmlFor="asunto"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                    >
                      Asunto
                    </label>

                    <input
                      id="asunto"
                      type="text"
                      name="asunto"
                      required
                      placeholder="¿Sobre qué quieres hablar?"
                      className="w-full rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                    >
                      Mensaje
                    </label>

                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows="6"
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white"
                    />
                  </div>

                  {/* Botón */}
                  <motion.button
                    type="submit"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
                  >
                    Enviar mensaje

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Inicio;