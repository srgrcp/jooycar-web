<template>
  <div class="flex flex-col gap-4 py-4 px-2 w-full">
    <h1 class="text-sm font-semibold text-center uppercase">
      Detalle de viaje
    </h1>

    <TripDetail v-if="trip" :trip="trip" />

    <TripMap v-if="trip" :trip="trip" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  id: string;
}

const { id } = defineProps<Props>();

const { data: trip } = useTripById(id);
</script>
