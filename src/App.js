import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './page/about';
import Footar from './page/footer';
import Header from './page/header';
import Index from './page/index';
import Pro from './page/project';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Pro />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Footer" element={<Footar />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
