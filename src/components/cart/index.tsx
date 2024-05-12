import { useCartContext } from '@/context/cartContext';
import { motion, AnimatePresence } from 'framer-motion';
import './style.scss';
import CartItem from '../cartItem';

export function Cart() {
  const { isOpen, toggleOpen, cartItems } = useCartContext();

  let cartTotal = 0;

  const containerAnimationSetting = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      x: 500,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  cartItems.forEach(item => {
    cartTotal += item.count * item.price;
  });

  return (
    <motion.div
      className={`cart-container`}
      animate={isOpen ? 'visible' : 'hidden'}
      variants={containerAnimationSetting}
    >
      <div className="cart-body">
        <div className="cart-header">
          <span>Carrinho de compras</span>
          <button
            data-testid="cart-close-button"
            className="close-button"
            onClick={() => toggleOpen()}
          >
            X
          </button>
        </div>
        {/* Itens do carrinho */}
        <div className="cart-items-container">
          {cartItems.map(item => (
            <CartItem
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              count={item.count}
              key={item.id}
            />
          ))}
        </div>

        <div className="cart-total">
          <span>Total:</span>
          <span>R${cartTotal}</span>
        </div>
      </div>
      <button data-testid="finish-order-button" className="finish-order">
        Finalizar Compra
      </button>
    </motion.div>
  );
}
