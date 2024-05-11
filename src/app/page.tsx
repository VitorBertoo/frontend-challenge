import Products from '@/components/products';
import { getProducts } from '@/services/api/products';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Products />
      </HydrationBoundary>
    </main>
  );
}
