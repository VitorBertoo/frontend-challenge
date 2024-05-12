import './style.scss';
import cartIcon from '../../../public/cart.svg';
import Image from 'next/image';
import { useCartContext } from '@/context/cartContext';

export default function CartButton() {
  const { toggleOpen, cartItems } = useCartContext();

  let totalItems = 0;

  cartItems.forEach(item => {
    totalItems += item.count;
  });

  return (
    <span
      className="cart-button"
      data-testid="cart-button"
      onClick={() => toggleOpen()}
    >
      <Image src={cartIcon} alt="cart icon" />
      {totalItems}
    </span>
  );
}
