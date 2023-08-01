import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProducts from './components/ListProducts';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<ListProducts />} />
              <Route path="/listproducts" element={<ListProducts />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/viewproduct/:id" element={<ViewProduct />} />
            </Routes>
            <Footer />
          </div>
      </Router>
    </div>
  );
}

export default App;
