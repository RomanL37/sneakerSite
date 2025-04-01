import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size = 'one-size', color = 'default') => {
    if (!product || !product.id) return;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.size === size && item.color === color
      );
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.size === size && item.color === color
            ? { 
                ...item, 
                quantity: (item.quantity || 1) + 1 
              }
            : item
        );
      }
      
      return [...prevItems, { 
        ...product,
        size,
        color,
        quantity: 1,
        price: product.price || 0
      }];
    });
  };

  const removeFromCart = (id, size = 'one-size', color = 'default') => {
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  const updateQuantity = (id, size = 'one-size', color = 'default', newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 
    0
  );

  const deliveryFee = totalPrice > 10000 ? 0 : 500;
  const orderTotal = totalPrice + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        deliveryFee,
        orderTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};