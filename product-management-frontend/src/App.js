import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProducts from './components/ListProducts';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';

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
              <Route path="/updateproduct/:id" element={<UpdateProduct />} />
              <Route path="/deleteproduct/:id" element={<DeleteProduct />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
      </Router>
    </div>
  );
}

export default App;
