import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Chefs from "./pages/Chefs"
import Contact from "./pages/Contact"

import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BookTable from "./pages/BookTable"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { CartProvider } from "./context/CartContext"

function App() {

  return (
    <>

      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/chefs" element={<Chefs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookTable />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>

  )
}

export default App
