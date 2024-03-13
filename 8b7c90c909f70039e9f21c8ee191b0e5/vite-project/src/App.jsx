import "./App.css";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AboutPage from "./Pages/AboutPage";
import products from './assets/products.json';
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./Pages/NotFoundPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import DashboardPage from "./Pages/DashboardPage";




function App() {
  const [productList, setProductListState] = useState(products);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"
         element={<DashboardPage
          productList={productList}
           setProductListState={setProductListState} />} />

        <Route path="/About"
         element={<AboutPage />} />

        <Route path="*"
        element={<NotFoundPage />} /> 

        <Route
            path="/products/:productId"
         element={<ProductDetailPage
           productList={productList} />}
        />
      </Routes>
      <Sidebar />
      
      <Footer />
    </>
  );
}

export default App;




