import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito";
import "./App.css"
import Navbar from "./Components/Home/Navbar/Navbar";
import Footer from "./Components/Home/Footer/Footer";
import ProductosHome from "./Components/Home/Productos/ProductosHome";
import Envios from "./Components/Envios/Envios";

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/Productos" element={<ProductosHome/>}/>
        <Route path="/Envios" element={<Envios/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
    
  );
}

export default App;
