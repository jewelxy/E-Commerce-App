import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {

    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product)=>{
        console.log('Product Added',product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
        //    console.log(fakeData);
    return (
        <div className="shop-container">

                <div className="product-container">
                {
                products.map(pd => <Product
                    handleAddProduct = {handleAddProduct}
                     product={pd}>
                     

                     </Product>)
                }
                    
                    
                </div>

                <div className="cart-container">
                    {/* <h3>This is cart</h3>
                    <h5>Order Summary: {cart.length}</h5> */}

                    <Cart cart={cart}></Cart>

                </div>
            
        </div>
    );
};

export default Shop;