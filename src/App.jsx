import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home';
import SobreMi from './pages/SobreMi/SobreMi.jsx';
import Certificados from './pages/Certificados/Certificados.jsx';
import Tecnologias from './pages/Tecnologias/Tecnologias.jsx'
import Proyectos from './pages/Proyectos/Proyectos.jsx';
import Contacto from './pages/Contacto/Contacto.jsx';
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;