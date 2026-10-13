// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import FondoBurbujas from './components/FondoBurbujas';

import Inicio from './pages/Inicio';
import NotFound from './pages/NotFound';

import Semana1Practica from './pages/tareas/Semana1Practica';
import Semana2PracticaGrupal from './pages/tareas/Semana2PracticaGrupal';
import Semana3Practica from './pages/tareas/Semana3Practica';
import Semana3PracticaGrupal from './pages/tareas/Semana3PracticaGrupal';
import Semana4Practica from './pages/tareas/Semana4Practica';
import Semana5Practica from './pages/tareas/Semana5Practica';

import Semana2Teoria from './pages/tareas/Semana2Teoria';
import Semana3Teoria from './pages/tareas/Semana3Teoria';
import Semana4Teoria from './pages/tareas/Semana4Teoria';
import Semana6Teoria from './pages/tareas/Semana6Teoria';

function App() {
  return (
    <BrowserRouter>
      <FondoBurbujas />
      <Navbar />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Inicio />} />

          {/* Prácticas */}
          <Route path="/Semana1Practica" element={<Semana1Practica />} />
          <Route
            path="/Semana2PracticaGrupal"
            element={<Semana2PracticaGrupal />}
          />
          <Route path="/Semana3Practica" element={<Semana3Practica />} />
          <Route
            path="/Semana3PracticaGrupal"
            element={<Semana3PracticaGrupal />}
          />
          <Route path="/Semana4Practica" element={<Semana4Practica />} />
          <Route path="/Semana5Practica" element={<Semana5Practica />} />

          {/* Teorías */}
          <Route path="/Semana2Teoria" element={<Semana2Teoria />} />
          <Route path="/Semana3Teoria" element={<Semana3Teoria />} />
          <Route path="/Semana4Teoria" element={<Semana4Teoria />} />
          <Route path="/Semana6Teoria" element={<Semana6Teoria />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;