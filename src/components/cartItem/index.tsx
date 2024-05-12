import { ICartItem } from '@/interfaces/cartItem';
import Image from 'next/image';
import './style.scss';
import { useCartContext } from '@/context/cartContext';

export default function CartItem({
  id,
  name,
  imageUrl,
  price,
  count,
}: ICartItem) {
  const { removeCartItem, addCartItem } = useCartContext();

  const addItem = () => {
    addCartItem({ id, name, imageUrl, price, count: 1 });
  };

  const removeOneItem = () => {
    removeCartItem(id, 1);
  };

  const removeAllItems = () => {
    removeCartItem(id, count);
  };

  return (
    <div className="cart-item-container">
      <button className="remove-item-button" onClick={removeAllItems}>
        X
      </button>
      <div className="item-image-container">
        <Image src={imageUrl} sizes="100px" fill alt={name} />
      </div>
      <span className="item-name">{name}</span>
      <div className="counter-container">
        <span className="counter-text">Qtd.</span>
        <div className="counter-controller">
          <button className="counter-controller-button" onClick={removeOneItem}>
            -
          </button>
          <span className="divider">|</span>
          <input
            readOnly
            className="counter-controller-input"
            type="text"
            value={count}
            name="quantity"
          />
          <span className="divider">|</span>
          <button className="counter-controller-button" onClick={addItem}>
            +
          </button>
        </div>
      </div>

      <span className="item-price">R$ {Math.round(price)}</span>
    </div>
  );
}
