import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';

import './App.css'

const App = () => {
    const isAuth = false;
    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/register" element={isAuth ? <Home /> : <Register />} />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
};

export default App;
