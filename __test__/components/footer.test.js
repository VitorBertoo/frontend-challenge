import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/footer';

describe('Footer', () => {
  it('Renders correct text', () => {
    render(<Footer />);

    const paragraph = screen.getByText(
      'MKS sistemas © Todos os direitos reservados'
    );

    expect(paragraph).toBeInTheDocument();
  });
});
