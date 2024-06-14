import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SobreMi from './pages/SobreMi/SobreMi'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreMi" element={<SobreMi />} />
        
      </Routes>
    </Router>
  );
}

export default App;