import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '@/components/header';

describe('Header', () => {
  it('renders title', () => {
    render(<Header />);

    const paragraph = screen.getByText('MKS');

    expect(paragraph).toBeInTheDocument();
  });

  it('renders cart button', () => {
    render(<Header />);

    const cartButton = screen.getByTestId('cart-button');

    expect(cartButton).toBeInTheDocument();
  });
});
