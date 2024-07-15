<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-semibold" :for="forId">{{ label }}</label>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  label: string;
  forId?: string;
}

const { forId, label } = defineProps<Props>();
</script>
