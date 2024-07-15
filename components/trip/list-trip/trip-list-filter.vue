<template>
  <div class="flex flex-col gap-4 py-4 px-2 border-r border-neutral-200">
    <span class="text-sm font-semibold text-center uppercase">Filtros</span>

    <FormField label="Rango de fecha de inicio" class="w-full">
      <div class="flex gap-1 w-full">
        <Input
          id="departure-date"
          type="date"
          class="w-1/2"
          v-model="filter.startGte"
        />
        <Input
          id="return-date"
          type="date"
          class="w-1/2"
          v-model="filter.startLte"
        />
      </div>
    </FormField>

    <FormField label="Distancia mínima" forId="min-distance">
      <Input
        id="min-distance"
        placeholder="Distancia mínima"
        type="number"
        v-model="filter.distanceGte"
      />
    </FormField>

    <Button @click="apply" class="bg-violet-500 text-neutral-50"
      >Aplicar</Button
    >
  </div>
</template>

<script lang="ts" setup>
import { useTripsQuery } from '~/composables/use-trips-query';
import type { TripsQuery } from '~/utils/trip/trip';

const { tripsQuery } = useTripsQuery();
const filter = reactive<TripsQuery>({ ...tripsQuery.value });

const apply = () => {
  const filterCopy = { ...filter };
  if (filterCopy.startGte) {
    filterCopy.startGte = new Date(filterCopy.startGte).getTime();
  }
  if (filterCopy.startLte) {
    const endDate = new Date(filterCopy.startLte);
    endDate.setDate(endDate.getDate() + 1);
    filterCopy.startLte = endDate.getTime();
  }

  tripsQuery.value = {
    ...filterCopy,
    offset: 0,
  };
};
</script>
