<template>
  <input
    v-bind="$props"
    :class="`rounded border border-neutral-200 px-3 py-1.5 ${props.class}`"
    :value="modelValue"
    @input="updateValue"
  />
</template>

<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue';

interface InputProps extends /** @vue-ignore */ InputHTMLAttributes {
  modelValue?: String;
}

const props = defineProps<InputProps>();

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: any) => {
  emit('update:modelValue', event.target.value);
};
</script>
