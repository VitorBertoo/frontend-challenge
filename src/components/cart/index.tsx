import { useCartContext } from '@/context/cartContext';
import './style.scss';
import CartItem from '../cartItem';

export function Cart() {
  const { isOpen, toggleOpen, cartItems } = useCartContext();

  let cartTotal = 0;

  cartItems.forEach(item => {
    cartTotal += item.count * item.price;
  });

  return (
    <div className={`cart-container ${!isOpen && 'hidden'}`}>
      <div className="cart-body">
        <div className="cart-header">
          <span>Carrinho de compras</span>
          <button className="close-button" onClick={() => toggleOpen()}>
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
      <button className="finish-order">Finalizar Compra</button>
    </div>
  );
}
