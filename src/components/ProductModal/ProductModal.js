import React from "react";
import classes from '../ProductModal/ProductModal.module.css';
import Modal from '../Modal/Modal';

const ProductModal = (props) => {

    const { product, onClose, onAddToCart } = props;

    const onAddBtnHandler = () => {
        onAddToCart(product);
        onClose();
    }


    return (
        <Modal>
            <div className={classes.productSection}>
                <div className={classes.productImage}>
                    {
                        product.otherImages.map((element, index) => {
                            return <img key={index} src={element} width={'200px'} />
                        })
                    }
                </div>
                <div className={classes.productInnerSection}>
                    <h4>{product.name}</h4>
                    <span>{product.description}</span>
                    <span>Rs. {product.finalPrice}</span>
                    <strike>Rs. {product.strickPrice} </strike>
                    <span className={classes.discountSection}> {product.discount} % OFF</span>
                    <div classes={classes.sizeSection}>
                        <span className={classes.size}>38</span>
                        <span className={classes.size}>40</span>
                        <span className={classes.size}>42</span>
                        <span className={classes.size}>46</span>
                    </div>
                    <button className={classes.addToCart} onClick={onAddBtnHandler}> Add to Cart</button>
                </div>
                <div className={classes.closeBtnSection} onClick={onClose}>X</div>
            </div>
        </Modal>
    );
}


export default ProductModal;