import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Cart } from '@/components/cart';

describe('Cart', () => {
  beforeEach(() => {
    render(<Cart />);
  });
  it('renders title', () => {
    const cartTitle = screen.getByText('Carrinho de compras');

    expect(cartTitle).toBeInTheDocument();
  });

  it('renders close button', () => {
    const cartButton = screen.getByTestId('cart-close-button');

    expect(cartButton).toBeInTheDocument();
  });

  it('renders finish order button', () => {
    const finishOrderButton = screen.getByTestId('finish-order-button');

    expect(finishOrderButton).toBeInTheDocument();
  });
});
