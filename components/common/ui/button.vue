<template>
  <button
    :type="props.type || 'button'"
    :class="`px-6 py-2 transition-all hover:rounded-lg hover:opacity-90 ${props.class}`"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
interface ButtonProps {
  class?: string;
  type?: 'button' | 'submit' | 'reset';
}

const props = defineProps<ButtonProps>();
</script>
