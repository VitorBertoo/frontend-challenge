'use client';

import './style.scss';
import { getProducts } from '@/services/api/products';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../productCard';

export default function Products() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts({ page: 1, rows: 8 }),
  });

  return (
    <div className="products-container">
      {data?.products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          imageUrl={product.photo}
          price={product.price}
        />
      ))}
    </div>
  );
}
