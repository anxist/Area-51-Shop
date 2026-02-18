import React from "react";
import './css/index.css'
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import FaqQ from "./components//Faq";
import Cart from "./components/Cart";


export default App;
export function App() {
  return (
      <Routes>
        <Route path="/" element={<Home title="Главная" />} />
        <Route path="/faqQ" element={<FaqQ title="Вопросы" />} />
          <Route path="/cart" element={<Cart title="Корзина" />} />
      </Routes>
  )
}
