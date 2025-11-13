import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Chefs from "./pages/Chefs"
import Contact from "./pages/Contact"
import Book from "./pages/Book"

import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </BrowserRouter>
      
    </>

  )
}

export default App
