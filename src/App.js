import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import ShopPage from './Pages/ShopPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
