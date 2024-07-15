<template>
  <tr class="*:px-1.5 md:*:px-3 *:py-1.5 border-t border-neutral-200">
    <td>{{ origin }}</td>
    <td>{{ destination }}</td>
    <td>{{ trip.distance }} km - {{ duration }}</td>
    <td>
      <LinkButton
        :to="`/trip/${trip.id}`"
        class="bg-violet-500 text-neutral-50 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </LinkButton>
    </td>
  </tr>
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
