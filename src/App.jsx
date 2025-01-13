import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import './App.css';

function App() {

  return (
    <> 
      <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      <Footer />
    </>
  );
}

export default App
