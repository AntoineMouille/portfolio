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
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/CV" element={<CV/>}/>
            <Route path="/portfolio/contact" element={<Contact />} />
            <Route path="/portfolio/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;