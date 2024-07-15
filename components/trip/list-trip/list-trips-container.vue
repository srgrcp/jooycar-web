<template>
  <div class="flex flex-col lg:flex-row w-full">
    <TripListFilter />

    <div class="flex flex-col gap-4 py-4 px-2 w-full">
      <h1 class="text-sm font-semibold text-center uppercase">
        Lista de viajes
      </h1>
      <TripListTable :trips="trips?.data" />
      <Pagination
        :paginable="tripsResponse.data"
        :paginableParams="query.tripsQuery"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const tripsResponse = await useTripList();
const trips = tripsResponse.data;

const query = useTripsQuery();
</script>
