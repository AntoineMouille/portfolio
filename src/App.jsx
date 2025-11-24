import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import CV from'./pages/CV';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main className="flex-grow ">
          <Routes>
            <Route path="/portoflio" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/CV" element={<CV/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;