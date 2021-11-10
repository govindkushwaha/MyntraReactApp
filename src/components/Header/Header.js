import React from "react";
import classes from './Header.module.css';
import CartSvg from '../../shopping-cart-solid.svg';


const Header = (props) => {

    const { onCartClick,counter } = props;


    return (
        <header>
            <nav className={classes.headerSection}> 
            <div className={`icon-holder ${classes.log}`}></div>
               
               <div className={classes.searchSection}>
                <div className="input-group input-group-sm mb-3">
                    <input type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-sm" 
                    placeholder="Search your product here" />
                </div>
                
                </div>
                <div className={classes.cardIconContainer} onClick={onCartClick}>
                    <img src={CartSvg} width='20px' height='20px'/>
                   { counter>0 && <span className={classes.cartCount}>{counter}</span>}
                </div>
            </nav>
        </header>
    )

}

export default Header