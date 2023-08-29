import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';

import './App.css'

const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/register" element={user ? <Home /> : <Register />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
};

export default App;
