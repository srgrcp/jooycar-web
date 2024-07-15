import type { TripsQuery } from '~/utils/trip/trip';

export const useTripsQuery = () => {
  const tripsQuery = useState<TripsQuery>('tripsQuery', () => ({
    limit: 20,
    distanceGte: 0.05,
    offset: 0,
  }));

  return { tripsQuery };
};
