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

function App() {
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
