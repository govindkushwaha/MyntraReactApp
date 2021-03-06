import React from "react";
import classes from './Product.module.css';
import data from '../../../data'

const Product = (props) =>{

    const {product,setSelectedProduct} = props;
    const {name, description, finalPrice, strickPrice,discount, otherImages} = product;

    return(
        <div className={`indiv-tile-holder ${classes.productContainer}` } onClick={()=> setSelectedProduct(product)}>
        <img src={otherImages[0]} className={classes.productImage}/>
        <h4>{name}</h4>
        <span className={classes.descriptionSection}>{description}</span>
        <div className={classes.priceSection}>
            <span className={classes.priceSection}> Rs. {finalPrice}</span>
            <strike className={classes.strickPriceSection}> {strickPrice} </strike>
            <span className={classes.discountSection}> {discount} % off </span>
        </div>
        </div>
    )

}

export default Product