import React from 'react';

import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket},]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
           <img className=" checkout__ad" src="https://m.media-amazon.com/images/G/31/prime/PYA/2019/December/In_prime_pya_3month_640x150_2a._CB446028771_.jpg" alt=""/> 
        {basket?.length ===0 ? (
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>
                    you have no items in your basket. To buy one or more items, click
                    "Add to Basket" next to the item.
                </p>
            </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {/* List out all of the Checkout products */}
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    
                    />
                ))}
           
            </div>
        )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal/>

                </div>
            )}
        </div>
    )
}

export default Checkout
