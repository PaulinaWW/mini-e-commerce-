
import React from 'react'
import ProductList from "../components/ProductList";
const DashboardPage = ({productList , setProductList}) => {
  return (
    <ProductList productList={productList} setProductList={setProductList} />
  )
}

export default DashboardPage