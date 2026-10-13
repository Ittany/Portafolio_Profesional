import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const practicasCalificadas = [
  { link: '/Semana2Teoria', text: 'Práctica Calificada 01' },
  { link: '/Semana3Teoria', text: 'Práctica Calificada 02' },
  { link: '/Semana4Teoria', text: 'Práctica Calificada 03' },
  { link: '/Semana6Teoria', text: 'Práctica Calificada 04' },
];

const semanasPractica = [
  { link: '/Semana1Practica', text: 'Semana 1 Práctica' },
  { link: '/Semana2PracticaGrupal', text: 'Semana 2 · Grupal' },
  { link: '/Semana3Practica', text: 'Semana 3 · Individual' },
  { link: '/Semana3PracticaGrupal', text: 'Semana 3 · Grupal' },
  { link: '/Semana4Practica', text: 'Semana 4 Práctica' },
  { link: '/Semana5Practica', text: 'Semana 5 Práctica' },
  { link: '/Semana6Practica', text: 'Semana 6 Práctica' },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [shadow, setShadow] = useState(false);

  const links = [
    { id: 1, text: 'Inicio', type: 'home', link: 'home' },
    { id: 2, text: 'Sobre mí', type: 'section', link: 'about' },
    { id: 3, text: 'Experiencia', type: 'section', link: 'experience' },
    {
      id: 4,
      text: 'Prácticas Calificadas',
      type: 'dropdown',
      submenu: practicasCalificadas,
    },
    {
      id: 5,
      text: 'Tareas',
      type: 'dropdown',
      submenu: semanasPractica,
    },
    { id: 6, text: 'Contáctame', type: 'section', link: 'contacto' },
  ];

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 50);
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleSectionNavigation = (section) => {
    closeMenus();
    if (window.location.pathname === '/') {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.18, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15 } },
  };

  return (
    <motion.nav
      className="navbar"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`navbar-container ${
          shadow ? 'navbar-container--shadow' : ''
        }`}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" onClick={closeMenus} className="navbar-logo">
            <span className="navbar-logo-primary">PORTAFOLIO</span>
            <span className="navbar-logo-secondary">.ITTANY</span>
          </Link>

          {/* Desktop */}
          <div className="navbar-desktop">
            <ul className="navbar-links">
              {links.map((item) => {
                if (item.type === 'home') {
                  return (
                    <li key={item.id}>
                      <Link
                        to="/"
                        onClick={closeMenus}
                        className="navbar-link"
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                }

                if (item.type === 'section') {
                  return (
                    <li key={item.id}>
                      <Link
                        to={`/#${item.link}`}
                        onClick={() => handleSectionNavigation(item.link)}
                        className="navbar-link"
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                }

                if (item.type === 'dropdown') {
                  const isOpen = openDropdown === item.id;
                  return (
                    <li key={item.id} className="navbar-dropdown">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.id)}
                        className="navbar-dropdown-toggle"
                      >
                        {item.text}
                        <FaChevronDown
                          className={`navbar-dropdown-chevron ${
                            isOpen ? 'navbar-dropdown-chevron--open' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="navbar-dropdown-wrap"
                          >
                            <div className="navbar-dropdown-menu">
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.link}
                                  to={sub.link}
                                  onClick={closeMenus}
                                  className="navbar-dropdown-item"
                                >
                                  {sub.text}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return null;
              })}
            </ul>

            <button
              onClick={toggleDarkMode}
              className="navbar-darkmode-btn"
              aria-label="Cambiar modo oscuro"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="navbar-mobile-controls">
            <button
              onClick={toggleDarkMode}
              className="navbar-mobile-btn"
              aria-label="Cambiar modo oscuro"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="navbar-mobile-btn"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="navbar-mobile-menu"
            >
              <div className="navbar-mobile-inner">
                <div className="navbar-mobile-links">
                  {links.map((item) => {
                    if (item.type === 'home') {
                      return (
                        <Link
                          key={item.id}
                          to="/"
                          onClick={closeMenus}
                          className="navbar-mobile-link"
                        >
                          {item.text}
                        </Link>
                      );
                    }

                    if (item.type === 'section') {
                      return (
                        <Link
                          key={item.id}
                          to={`/#${item.link}`}
                          onClick={() => handleSectionNavigation(item.link)}
                          className="navbar-mobile-link"
                        >
                          {item.text}
                        </Link>
                      );
                    }

                    if (item.type === 'dropdown') {
                      const isOpen = openDropdown === item.id;
                      return (
                        <div key={item.id}>
                          <button
                            type="button"
                            onClick={() => toggleDropdown(item.id)}
                            className="navbar-mobile-dropdown-toggle"
                          >
                            <span>{item.text}</span>
                            <FaChevronDown
                              className={`navbar-dropdown-chevron ${
                                isOpen ? 'navbar-dropdown-chevron--open' : ''
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="navbar-mobile-submenu">
                                  {item.submenu.map((sub) => (
                                    <Link
                                      key={sub.link}
                                      to={sub.link}
                                      onClick={closeMenus}
                                      className="navbar-mobile-sublink"
                                    >
                                      {sub.text}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;