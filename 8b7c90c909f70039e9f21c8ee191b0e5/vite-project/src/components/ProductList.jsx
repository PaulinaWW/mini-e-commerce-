import React from 'react';
import { Link } from "react-router-dom";
import { ProductCard } from './ProductCard';




const ProductList = ({ productList, setProductListState }) => {
   
  return (
    <div className="productList">
        {productList.map((oneProduct)=>{
            return (
              <Link to={`products/${oneProduct.id}`} key={oneProduct.id}>
                <ProductCard 
                //we gather the setter from the props and pass it here
                //the element is just one product from the list of products in the map loop
                key={oneProduct.id}
                oneProduct={oneProduct}
                productList={productList}
                setProductListState={setProductListState}
                />
              </Link>
            )
        })}
    </div>
  )
}
export default ProductList
