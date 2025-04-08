import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';


  const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

  // Моковые данные товаров
  // const products = [
  //   { id: 1, name: 'Nike Air Max 95', price: 12000, brand: 'Nike', image: '/images/nike-air-max.jpg' },
  //   { id: 2, name: 'Adidas Ultraboost', price: 15000, brand: 'Adidas', image: '/images/adidas-ultraboost.jpg' },
  //   { id: 3, name: 'Puma RS-X', price: 9000, brand: 'Puma', image: '/images/puma-rsx.jpg' },
  //   { id: 4, name: 'New Balance 574', price: 11000, brand: 'New Balance', image: '/images/nb-574.jpg' },
  //   { id: 5, name: 'Nike Air Force 1', price: 10000, brand: 'Nike', image: '/images/nike-af1.jpg' },
  //   { id: 6, name: 'Adidas Superstar', price: 8000, brand: 'Adidas', image: '/images/adidas-superstar.jpg' },
  //   { id: 7, name: 'Puma Suede', price: 7500, brand: 'Puma', image: '/images/puma-suede.jpg' },
  //   { id: 8, name: 'New Balance 990', price: 18000, brand: 'New Balance', image: '/images/nb-990.jpg' },
  // ];
  
  // for product in products:
  //    product.image

  // Запрос к API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://127.0.0.1:8000/api/skus/'); // Замените на ваш URL API
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Фильтрация товаров
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchesSearch && matchesBrand;
  });

  const brands = ['Nike', 'Adidas', 'Puma', 'New Balance'];

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  return (
    <div className="home-page">
      <div className="filters-sidebar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Поиск кроссовок..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>

        <div className="brand-filters">
          <h3>Бренды</h3>
          {brands.map(brand => (
            <label key={brand} className="brand-checkbox">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              />
              <span className="checkmark"></span>
              {brand}
            </label>
          ))}
        </div>
      </div>

      <div className="products-grid-container">
        <h2 className="products-title">Наши кроссовки</h2>
        {isLoading ? (
          <div className="loading">Загрузка...</div>
        ) : error ? (
          <div className="error">Ошибка: {error}</div>
        ) : filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>Ничего не найдено. Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;