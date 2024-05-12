'use client';
import { ICartItem } from '@/interfaces/cartItem';
import { createContext, useState, ReactNode, useContext } from 'react';

export interface ICartContext {
  isOpen: boolean;
  toggleOpen: () => void;
  cartItems: ICartItem[];
  addCartItem: (cartItem: ICartItem) => void;
  removeCartItem: (cartItemId: number, count: number) => void;
}

const CartContext = createContext<ICartContext>({
  isOpen: false,
  toggleOpen: () => {},
  cartItems: [],
  addCartItem: (cartItem: ICartItem) => {},
  removeCartItem: (cartItemId: number, count: number) => {},
});

interface CartProps {
  children?: ReactNode;
}

export default function CartContextWrapper({ children }: CartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addCartItem = (cartItem: ICartItem) => {
    const currentItems = cartItems;
    const itemIndex = currentItems.findIndex(item => item.id === cartItem.id);

    if (itemIndex > -1) {
      currentItems[itemIndex].count += cartItem.count;
      setCartItems(() => [...currentItems]);
      return;
    }

    setCartItems(currentValue => [...currentValue, cartItem]);
  };

  const removeCartItem = (cartItemId: number, count: number) => {
    const currentItems = cartItems;
    const itemIndex = currentItems.findIndex(item => item.id === cartItemId);

    if (itemIndex > -1) {
      currentItems[itemIndex].count -= count;
      if (currentItems[itemIndex].count <= 0) {
        currentItems.splice(itemIndex, 1);
      }
    }

    setCartItems([...currentItems]);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartContext.Provider
      value={{ isOpen, toggleOpen, cartItems, addCartItem, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
