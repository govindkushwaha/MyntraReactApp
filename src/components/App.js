import React, { useState } from 'react'
import '../styles/App.css';
import Header from './Header/Header';
import ProductList from './ProductList/ProductList';
import Filters from './Filters/Filters';
import ProductModal from './ProductModal/ProductModal';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import CartModal from './CartModal/CartModal';

const App = () => {

  const [genderFilter, setGenderFilter] = useState('M');
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [selectProduct, setSelectedProduct] = useState(undefined);
  const [addedProductList, setAddedProductList] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const onCategoryFilterChange = (value) => {
    let newFilterList;
    if (categoryFilter.includes(value)) {
      newFilterList = categoryFilter.filter(element => element !== value)
    } else {
      newFilterList = [...categoryFilter, value]
    }
    setCategoryFilter(newFilterList)
  }

  const onProductModalClose = () => {
    setSelectedProduct(undefined);
  }

  const onCartClick = () => {
    setShowCart(true);
  }
  const onCartClose = () => {
    setShowCart(false);
  }

  const onAddToCart = (product) => {
    setAddedProductList((preValue) => {
      return [...preValue, product]
    })
  }

  return (
    <div id="main">
      <ErrorBoundary>
        <Header counter={addedProductList.length} onCartClick={onCartClick} />
        {showCart && <CartModal productList={addedProductList} onClose={onCartClose} />}
        {selectProduct && <ProductModal onAddToCart={onAddToCart}
          product={selectProduct}
          onClose={onProductModalClose} />}

        <main style={{ display: 'flex' }}>
          <Filters genderFilter={genderFilter}
            categoryFilter={categoryFilter}
            onCategoryFilterChange={onCategoryFilterChange}
            onGenderFilterChange={setGenderFilter} />
          
          <ProductList setSelectedProduct={setSelectedProduct}
            genderFilter={genderFilter}
            categoryFilter={categoryFilter} />
        </main>
      </ErrorBoundary>
    </div>
  )
}


export default App;
