import './style.scss';
import cartIcon from '../../../public/cart.svg';
import Image from 'next/image';

export default function CartButton() {
  return (
    <span className="cart-button">
      <Image priority src={cartIcon} alt="cart icon" />0
    </span>
  );
}
