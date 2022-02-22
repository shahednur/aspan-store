import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header'
import ProductPage from './containers/ProductPage'
import ProductDetails from './containers/ProductDetails';
import Cart from './containers/Cart';
import Wishlist from './containers/Wishlist';
import Checkout from './containers/Checkout';

function App() {
  const [show, setShow] = useState(false)
  const [showWish, setShowWish] = useState(false)
  
  return (
    <div className="App">
      <Router>
        <Header setShow={setShow} show={show} showWish={showWish} setShowWish={setShowWish} />
        <Cart setShow={setShow} show={show} />
        <Wishlist setShowWish={setShowWish} showWish={showWish} />
        <Routes>
          <Route path="/" element={<ProductPage showWish={showWish} />} />
          <Route path="/product/:id" element={<ProductDetails />} showWish={showWish} />
          <Route path="/checkout" element={<Checkout />} showWish={showWish} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
