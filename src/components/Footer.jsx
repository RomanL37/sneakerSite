import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-icon">👟</span>
              <span className="logo-text">SneakerShop</span>
            </Link>
            <p className="footer-description">
              Лучшие кроссовки от ведущих мировых брендов с доставкой по всей России
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
                  <path d="M17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M17.5 7.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#" aria-label="VK">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.07 2H8.93C4.38 2 2 4.38 2 8.93V15.07C2 19.62 4.38 22 8.93 22H15.07C19.62 22 22 19.62 22 15.07V8.93C22 4.38 19.62 2 15.07 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.17 16.64H8.56C8.21 16.64 7.93 16.36 7.93 16.01V10.63C7.93 10.28 8.21 10 8.56 10H10.17C10.52 10 10.8 10.28 10.8 10.63V16.01C10.8 16.36 10.52 16.64 10.17 16.64Z" fill="currentColor"/>
                  <path d="M16.5 16.64H14.89C14.54 16.64 14.26 16.36 14.26 16.01V12.9C14.26 12.55 14.54 12.27 14.89 12.27H16.5C16.85 12.27 17.13 12.55 17.13 12.9V16.01C17.13 16.36 16.85 16.64 16.5 16.64Z" fill="currentColor"/>
                  <path d="M17.13 10.24H15.52C15.17 10.24 14.89 9.96 14.89 9.61V8.56C14.89 8.21 15.17 7.93 15.52 7.93H17.13C17.48 7.93 17.76 8.21 17.76 8.56V9.61C17.76 9.96 17.48 10.24 17.13 10.24Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Telegram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5L2 12.5L9 13.5M21 5L18.5 19L13.5 15.5M21 5L9 13.5M9 13.5V19L13.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h3 className="links-title">Магазин</h3>
              <Link to="/products/nike" className="footer-link">Nike</Link>
              <Link to="/products/adidas" className="footer-link">Adidas</Link>
              <Link to="/products/puma" className="footer-link">Puma</Link>
              <Link to="/products/new-balance" className="footer-link">New Balance</Link>
            </div>
            <div className="links-column">
              <h3 className="links-title">Помощь</h3>
              <Link to="/delivery" className="footer-link">Доставка и оплата</Link>
              <Link to="/returns" className="footer-link">Возврат и обмен</Link>
              <Link to="/faq" className="footer-link">FAQ</Link>
              <Link to="/contacts" className="footer-link">Контакты</Link>
            </div>
            <div className="links-column">
              <h3 className="links-title">Компания</h3>
              <Link to="/about" className="footer-link">О нас</Link>
              <Link to="/blog" className="footer-link">Блог</Link>
              <Link to="/careers" className="footer-link">Карьера</Link>
              <Link to="/wholesale" className="footer-link">Оптовым клиентам</Link>
            </div>
          </div>

          <div className="footer-subscribe">
            <h3 className="subscribe-title">Подпишитесь на рассылку</h3>
            <p>Узнавайте первыми о новых коллекциях и специальных предложениях</p>
            <form className="subscribe-form">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="subscribe-input"
                required
              />
              <button type="submit" className="subscribe-button">Подписаться</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="payment-methods">
            <span className="payment-icon">💳</span>
            <span className="payment-icon">📱</span>
            <span className="payment-icon">🅿️</span>
            <span className="payment-icon">💲</span>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} SneakerShop. Все права защищены.
          </div>
          <div className="legal-links">
            <Link to="/privacy" className="legal-link">Политика конфиденциальности</Link>
            <Link to="/terms" className="legal-link">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;