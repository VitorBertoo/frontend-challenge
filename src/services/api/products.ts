import { IProduct } from '@/interfaces/product';

interface IResponse {
  products: IProduct[];
  count: number;
}

export async function getProducts(
  options = { page: 1, rows: 8 }
): Promise<IResponse> {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products?page=${options.page}&rows=${options.rows}&sortBy=id&orderBy=DESC`
  );

  return result.json();
}
