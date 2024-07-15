import { format } from 'date-fns';
import type { TripStep } from '~/utils/trip/trip';

export const useTripDateLocationFormat = (tripStep: TripStep) => {
  return computed(() => {
    if (!tripStep) return '';

    return `${format(new Date(tripStep.time), 'HH:mm - dd/MM/yyyy')} ${
      tripStep.address
    }`;
  });
};
