import type { Paginable, PaginableParams } from '~/utils/types/paginable';

type UsePaginableOptions<T> = {
  paginableParams: globalThis.Ref<PaginableParams>;
  paginable: globalThis.Ref<Paginable<T> | null>;
};

export const usePaginable = <T>({
  paginableParams,
  paginable,
}: UsePaginableOptions<T>) => {
  const limit = ref(paginableParams.value.limit);

  watch(limit, () => {
    if (limit.value === undefined) {
      return;
    }

    if (typeof limit.value !== 'number') {
      paginableParams.value.limit = parseInt(limit.value);
    } else {
      paginableParams.value.limit = limit.value;
    }
    paginableParams.value.offset = 0;
  });

  const hasNextPage = computed(() => {
    if (
      paginableParams.value.limit === undefined ||
      paginableParams.value.offset === undefined ||
      paginable.value?.total === undefined
    ) {
      return false;
    }
    return (
      paginableParams.value.offset + paginableParams.value.limit <
      paginable.value?.total
    );
  });

  const hasPreviousPage = computed(() => {
    if (
      paginableParams.value.limit === undefined ||
      paginableParams.value.offset === undefined
    ) {
      return false;
    }
    return paginableParams.value.offset > 0;
  });

  const nextPage = () => {
    if (
      paginableParams.value.limit === undefined ||
      paginableParams.value.offset === undefined
    ) {
      return;
    }
    paginableParams.value.offset += paginableParams.value.limit;
  };

  const previousPage = () => {
    if (
      paginableParams.value.limit === undefined ||
      paginableParams.value.offset === undefined
    ) {
      return;
    }
    paginableParams.value.offset -= paginableParams.value.limit;
  };

  return {
    limit,
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage,
  };
};
