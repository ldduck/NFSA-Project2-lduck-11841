<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheFetch from './components/TheFetch.vue'
</script>

<template>
  <TheFetch />
  <RouterView />

  <TestingPage />
  <RouterView />
</template>

<style scoped></style>
