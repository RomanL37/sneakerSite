import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Здесь должен быть запрос к API, но для примера используем моковые данные
    const mockProducts = [
      { id: 1, name: 'Nike Air Max 95', price: 12000, brand: 'Nike', image: '/images/nike-air-max.jpg' },
      { id: 2, name: 'Adidas Ultraboost', price: 15000, brand: 'Adidas', image: '/images/adidas-ultraboost.jpg' },
      { id: 3, name: 'Puma RS-X', price: 9000, brand: 'Puma', image: '/images/puma-rsx.jpg' },
      { id: 4, name: 'New Balance 574', price: 11000, brand: 'New Balance', image: '/images/nb-574.jpg' },
    ];
    
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.brand.toLowerCase() === filter);

  return (
    <div className="product-list">
      <h1>Кроссовки</h1>
      
      <div className="filters">
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('nike')}>Nike</button>
        <button onClick={() => setFilter('adidas')}>Adidas</button>
        <button onClick={() => setFilter('puma')}>Puma</button>
        <button onClick={() => setFilter('new balance')}>New Balance</button>
      </div>
      
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;