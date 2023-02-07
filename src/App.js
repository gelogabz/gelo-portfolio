import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {
  return (
    <main className="App">
      <Navbar />
      <section>
        <Routes>
          {/* <Route path='/gelo-first-react-app/' element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>
      </section>

      <Footer />
    </main>
  );
}

export default App;
