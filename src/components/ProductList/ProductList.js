import React from "react";
import classes from './ProductList.module.css'
import Product from "../Product/Product";
import productData from '../../../data'

const getFilterData = (data, genderFilter, categoryFilter) => {
    let filteredData = data.filter(element => element.gender === genderFilter);
    if (categoryFilter && categoryFilter.length) {
        filteredData = [...filteredData].filter(
            element => categoryFilter.includes(element.folded) || categoryFilter.includes(element.cat))
    }
    return filteredData;
}

const ProductList = (props) => {
    const { genderFilter, categoryFilter, setSelectedProduct} = props;
    const filteredData = getFilterData(productData, genderFilter, categoryFilter)
    return (
        <div className={classes.productSection}>
            {filteredData.map((product) => {
                return <Product product={product} setSelectedProduct={setSelectedProduct} />
            })}
        </div>
    )
};
export default ProductList