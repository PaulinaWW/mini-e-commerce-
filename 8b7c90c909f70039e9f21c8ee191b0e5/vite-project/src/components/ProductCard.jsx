import React from 'react';
import ProductList from './ProductList';


export const ProductCard = (props) => {
    const handleDelete = (productId) => {
        props.setProduct(
            props.productList.filter((product) => productId !== product.id)
            );
    }

  return (
    <div key={props.oneProduct.id} className="card">
      <img src={props.oneProduct.images} />

      <div className="card-detail">
        <h3>{props.oneProduct.title}</h3>
        <p>{props.oneProduct.description}</p>
        <p>{props.oneProduct.price}</p>
        <p>{props.oneProduct.discountPercentage}</p>
        <p>{props.oneProduct.rating}</p>
        <p>{props.oneProduct.stock}</p>
        <p>{props.oneProduct.brand}</p>
        <p>{props.oneProduct.category}</p>
      </div>
      <div className="card-rating">
        <p> Product Ratings :{props.oneProduct.rating > 4.6 ? "⭐⭐⭐⭐⭐" : "⭐⭐⭐"}</p>
        <button
          onClick={() => {
            deleteListItem(props.oneProduct.id);
          }}
        >
          DeleteButton
        </button>
      </div>
      {/* <img src={oneListItem.images} /> */}
    </div>
  )
}

