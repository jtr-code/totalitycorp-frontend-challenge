import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/singleproduct/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                {/* <Route path='*' element={<ErrorPage />} /> */}
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default App;
