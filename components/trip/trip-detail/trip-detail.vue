<template>
  <div class="md:px-8 w-full">
    <table class="w-full text-sm">
      <thead class="font-semibold text-left">
        <tr class="*:px-1.5 md:*:px-3 *:py-1.5">
          <th>Origen</th>
          <th>Destino</th>
          <th>Distancia y Tiempo</th>
        </tr>
      </thead>

      <tbody>
        <tr class="*:px-1.5 md:*:px-3 *:py-1.5 border-t border-neutral-200">
          <td>{{ origin }}</td>
          <td>{{ destination }}</td>
          <td>{{ trip.distance }} km - {{ duration }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import type { Trip } from '~/utils/trip/trip';

interface Props {
  trip: Trip;
}

const { trip } = defineProps<Props>();

const origin = useTripDateLocationFormat(trip.start);
const destination = useTripDateLocationFormat(trip.end);
const duration = useFormatDuration(trip.duration);
</script>
