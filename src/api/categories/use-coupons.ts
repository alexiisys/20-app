import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { type Coupon } from '@/api/coupons/coupon';

import { client } from '../common';

type Response = string[];
type Variables = void;

export const useCategories = createQuery<Response, Variables, AxiosError>({
  queryKey: ['categories'],
  fetcher: async () => {
    const response = await client.get(`/categories`);
    return response.data;
  },
});
