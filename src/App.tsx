import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import CartPage from "./pages/CartPage";
import LayoutComponent from "./layout/Layout";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { set } from "./features/products";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const apiUrl = "https://dummyjson.com/products?limit=10";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data.products;
      dispatch(set(allPersons));
    });
  }, []);

  return (
    <LayoutComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </LayoutComponent>
  );
}

export default App;
