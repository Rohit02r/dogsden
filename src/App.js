import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Sell from './components/pages/Sell';
import Adoption from './components/pages/Adoption';
import About from './components/pages/About';
import Navbar from './components/pages/Navbar';
import DogDetails from './components/DogDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import WatsappArrow from './components/WatsappArrow';




function App() {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Adoption' element={<Adoption />} />
          <Route path="/dog/:breed" element={<DogDetails />} />
          <Route path='/Sell' element={<Sell />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <WatsappArrow/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
