import Image from 'next/image';
import { NextComponentType } from 'next';
import bagIcon from '../../../public/bag.svg';
import './style.scss';
import { useCartContext } from '@/context/cartContext';

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  const { addCartItem } = useCartContext();

  return (
    <div className="product-card">
      <div className="image-container">
        <Image src={imageUrl} sizes="100px" fill alt={name} />
      </div>
      <div className="product-title-container">
        <span className="product-name">{name}</span>
        <span className="product-price">R${Math.round(price)}</span>
      </div>
      <div className="description">{description}</div>
      <button
        className="buy-button"
        onClick={() => {
          addCartItem({
            id,
            name,
            count: 1,
            imageUrl,
            price,
          });
        }}
      >
        <Image priority src={bagIcon} alt="cart icon" /> COMPRAR
      </button>
    </div>
  );
}
