import React from "react";
import classes from './CartModal.module.css';
import Modal from '../Modal/Modal';
import Product from "../Product/Product";

const CartModal = (props) => {
    const { onClose, productList = [] } = props;
    const totalStrick = productList.reduce((previousValue, currentValue) => Number(previousValue) 
    + Number(currentValue.strickPrice),0)

const totalFinal = productList.reduce((previousValue, currentValue) => Number(previousValue) 
+ Number(currentValue.finalPrice),0)

const totalDiscount = totalStrick-totalFinal;

const buyBtn = () => {
    onClose(true),
    alerts()
    
}
function alerts() {
     alert('Comming Soon!!')
}

    return (
        <Modal>
            <div className={classes.productSection}>
                <div className={classes.productImage}>
                    {
                        productList.map((element, index) => {
                            return <Product product={element} />
                        })
                    }
                </div>
                <div className={classes.productInnerSection}>
                    <div className={classes.cartData}>
                        <span className={classes.labels}>Total Items :</span>
                        <span className={classes.values}>{productList.length}</span>
                    </div>
                    <div className={classes.cartData}>
                        <span className={classes.labels}>Total Original Price :</span>
                        <span className={classes.values}>Rs. {totalStrick}.00</span>
                    </div>
                    <div className={classes.cartData}>
                        <span className={classes.labels}>Total Discount :</span>
                        <span className={classes.values}>Rs. {totalDiscount}.00</span>
                    </div>
                    <div className={classes.cartData}>
                        <span className={classes.labels}>Final Price :</span>
                        <span className={classes.values}>Rs. {totalFinal}.00</span>
                    </div>
                    <button className={classes.buyButton} onClick={buyBtn}>Buy</button>
                </div>
                    
                <div className={classes.closeBtnSection} onClick={onClose}>X</div>
            </div>
        </Modal>
    )
}

export default CartModal