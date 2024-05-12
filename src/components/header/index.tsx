'use client';

import { Cart } from '../cart';
import CartButton from '../cartButton';
import './style.scss';

export default function Header() {
  return (
    <div className="header">
      <span className="title">
        <span>MKS</span>
        <span>Sistemas</span>
      </span>
      <CartButton />
      <Cart />
    </div>
  );
}
