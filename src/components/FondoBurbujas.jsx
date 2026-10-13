import {useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const FondoBurbujas = () => {
  const [init, setInit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: darkMode ? '#17131C' : '#F8F5FA' },
      },
      fpsLimit: 60,
      particles: {
        color: { value: darkMode ? '#B99ACF' : '#C5A5D8' },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'top',
          outModes: { default: 'out' },
        },
        number: {
          density: { enable: true, area: 800 },
          value: darkMode ? 25 : 15,
        },
        opacity: {
          value: darkMode ? 0.45 : 0.35,
          animation: { enable: true, speed: 0.5, sync: false },
        },
        shape: { type: 'circle' },
        size: {
          value: { min: darkMode ? 25 : 15, max: darkMode ? 30 : 40 },
          animation: { enable: true, speed: 1, sync: false },
        },
        bounce: {
          horizontal: { value: 1 },
          vertical: { value: 1 },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'bubble' },
        },
        modes: {
          bubble: {
            distance: 250,
            size: 50,
            duration: 2,
            opacity: darkMode ? 0.9 : 0.75,
          },
        },
      },
      detectRetina: true,
    }),
    [darkMode]
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
};

export default FondoBurbujas;