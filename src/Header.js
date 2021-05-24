import React  from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from './StateProvider';

function Header() {
    const [{basket}] =useStateValue();
    console.log(basket);
    return (
        <nav className="header">
         {/* logo on the left ->img */}
         <Link to ="/">
             
            <img className="header_logo" src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" alt=""></img>
            
         </Link>
         {/* Search Box */}
         <div className="header_search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>   
         </div> 

         {/* 3 links */}   
         <div className="header_nav">  
         {/* 1st link */}
            <Link to="/login" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Hello</span>
                <span className="header_optionLineTwo">Sign in</span>
                </div>
            
            </Link>
         {/* 2 link */}
         <Link to="/" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
                </div>
            
            </Link>
         {/* 3 link */}
         <Link to="/" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
                </div>
            
            </Link>
         {/* 4 link */}
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                </div>
            </Link>

         </div>

         {/* Basket icon with number*/} 
        </nav>
    )
}

export default Header
