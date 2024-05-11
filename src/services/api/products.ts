import { IProduct } from '@/interfaces/product';

interface IResponse {
  products: IProduct[];
  count: number;
}

export async function getProducts(
  options = { page: 1, rows: 8 }
): Promise<IResponse> {
  const result = await fetch(
    `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${options.page}&rows=${options.rows}&sortBy=id&orderBy=DESC`
  );

  return result.json();
}
