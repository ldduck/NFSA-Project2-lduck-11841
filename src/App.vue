<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TestComponent from './components/TestComponent.vue'
import TheFetch from './components/TheFetch.vue'
</script>

<template>
  <div id="app">
    <TestComponent />
    <TheFetch />
  </div>
</template>

<style scoped></style>
