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
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Orders from "./pages/Orders"
import NotFound from "./pages/NotFound"

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
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>

  )
}

export default App
