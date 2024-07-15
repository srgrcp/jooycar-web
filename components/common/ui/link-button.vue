<template>
  <NuxtLink
    :to="props.to"
    :class="`flex p-2 transition-all hover:opacity-90 ${props.class}`"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface LinkButtonProps {
  class?: string;
  to: string;
}

const props = defineProps<LinkButtonProps>();
</script>
