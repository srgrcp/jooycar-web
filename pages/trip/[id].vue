<template>
  <trip-detail-container :id="id" />
</template>

<script lang="ts" setup>
const { params } = useRoute();

const id = params.id as string;
</script>
