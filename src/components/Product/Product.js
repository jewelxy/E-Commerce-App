import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    // console.log(props);
    return (
        <div className="product">

            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <br/>
                <p><small>$ {price}</small></p>
                <p><small>Only {stock} left in stock -order soon</small></p>

                <button
                onClick ={
                    ()=>
                    props.handleAddProduct(props.product)
                }
                className="buttonCart"
                
                
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Product;