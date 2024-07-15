<template>
  <table class="w-full text-sm">
    <thead class="font-semibold text-left">
      <tr class="*:px-1.5 md:*:px-3 *:py-1.5">
        <th>Origen</th>
        <th>Destino</th>
        <th>Distancia y Tiempo</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <TripListRow v-for="trip in trips" :key="trip.id" :trip="trip" />
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { Trip } from '~/utils/trip/trip';

interface Props {
  trips: Trip[] | undefined;
}

const { trips } = defineProps<Props>();
</script>
