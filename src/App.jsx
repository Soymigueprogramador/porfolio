import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import SobreMi from './pages/SobreMi/SobreMi';
//import Certificados from './Certificados';
//import Proyectos from './Proyectos';
//import Contacto from './Contacto';
//import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        {/* <Route path="/certificados" element={<Certificados />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </Router>
  );
}

export default App;