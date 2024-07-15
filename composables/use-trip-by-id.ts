import type { Trip } from '~/utils/trip/trip';

export const useTripById = (id: string) => {
  const config = useRuntimeConfig();
  const apiUrl = config.privateApiUrl || config.public.apiUrl;

  return useFetch<Trip>(`${apiUrl}/api/trips/${id}`, {
    method: 'GET',
  });
};
