import type { Trip } from '~/utils/trip/trip';
import { useTripsQuery } from './use-trips-query';
import type { Paginable } from '~/utils/types/paginable';

export const useTripList = () => {
  const config = useRuntimeConfig();
  const apiUrl = config.privateApiUrl || config.public.apiUrl;

  const { tripsQuery } = useTripsQuery();

  return useFetch<Paginable<Trip>>(`${apiUrl}/api/trips`, {
    method: 'GET',
    query: tripsQuery,
  });
};
