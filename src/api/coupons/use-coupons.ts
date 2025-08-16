import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { type Coupon } from '@/api/coupons/coupon';

import { client } from '../common';

type Response = Coupon[];
type Variables = void;

export const useCoupons = createQuery<Response, Variables, AxiosError>({
  queryKey: ['coupons'],
  fetcher: async () => {
    const response = await client.get(`/coupons`);
    return response.data;
  },
});
