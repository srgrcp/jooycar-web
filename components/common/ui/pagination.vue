<template>
  <div class="flex justify-end gap-2">
    <select v-model="limit" class="bg-neutral-100 text-neutral-500 px-2 py-1">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>

    <Button
      @click="previousPage"
      :disabled="!hasPreviousPage"
      class="bg-neutral-100 text-neutral-500 !px-2 !py-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:opacity-40"
    >
      Anterior
    </Button>
    <Button
      @click="nextPage"
      :disabled="!hasNextPage"
      class="bg-neutral-100 text-neutral-500 !px-2 !py-1 disabled:opacity-40 disabled:hover:cursor-not-allowed disabled:hover:opacity-40"
    >
      Siguiente
    </Button>
  </div>
</template>

<script lang="ts" setup generic="T">
import type { Paginable, PaginableParams } from '~/utils/types/paginable';

interface Props<T> {
  paginableParams: globalThis.Ref<PaginableParams>;
  paginable: globalThis.Ref<Paginable<T> | null>;
}

const { paginable, paginableParams } = defineProps<Props<T>>();

const { hasNextPage, hasPreviousPage, nextPage, previousPage, limit } =
  usePaginable<T>({
    paginable,
    paginableParams,
  });
</script>
