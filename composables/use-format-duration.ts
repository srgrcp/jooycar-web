import { formatDuration } from 'date-fns';
import { es } from 'date-fns/locale';

export const useFormatDuration = (duration: number) => {
  return computed(() =>
    formatDuration(
      {
        minutes: Math.floor(duration / 1000 / 60),
        seconds: (duration / 1000) % 60,
      },
      { format: ['minutes', 'seconds'], locale: es }
    )
  );
};
