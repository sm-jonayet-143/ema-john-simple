import React from "react";
import fakeData from '../../fakeData';
import { useState } from "react";
import './shop.css'
import Product from "../product/product";
import Cart from "../cart/cart";


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) =>{
        console.log('handler added', product);
        const newCart = [...cart, product];
        setCart(newCart)
    }
;   
    return (
        <div className="shop-container">
                {
                    products.map(pd => <Product
                        handleAddProduct = {handleAddProduct} 
                        product={pd}
                        ></Product>)
                }
            
            <div className="product-container">

                <div className="cart-container">
                    {/* <h4>This is card</h4>
                    <h5>Order summary: {cart.length}</h5> */}
                    <Cart cart={cart}></Cart>

                </div>

            </div>
        </div>
    );
};

export default Shop;