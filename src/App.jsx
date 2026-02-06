import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import CV from'./pages/CV';
import Portfolio from "./pages/projets/Portfolio"
import Pacman from "./pages/projets/Pacman"
import Cinehub from "./pages/projets/CinéHub"
import Lensymphony from "./pages/projets/LensSymphony"
import Rpg from "./pages/projets/Rpg"
import ChecklistApp from './pages/projets/ChecklistApp';
import AhdjinPCP from './pages/projets/AdhjinPCP';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/CV" element={<CV/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/portfolio" element={<Portfolio/>}/>
            <Route path="/projects/pacman" element={<Pacman/>}/>
            <Route path="/projects/cinehub" element={<Cinehub/>}/>
            <Route path="/projects/lensymphony" element={<Lensymphony/>}/>
            <Route path="/projects/rpg" element={<Rpg/>}/>
            <Route path="/projects/checklist_app" element={<ChecklistApp/>}/>
            <Route path="/projects/ahdjinpcp" element={<AhdjinPCP/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;