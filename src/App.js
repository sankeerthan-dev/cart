import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Accessories from './Pages/Accessories';
import Clothing from './Pages/Clothing'
import Home from './Pages/Home';
import ProductDetailedView from './Pages/ProductDetailedView'
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/clothing" element={<Clothing/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/product/:id" element={<ProductDetailedView/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
