<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheFetch from './components/TheFetch.vue'
</script>

<template>
  <TheFetch />
  <RouterLink to="/testingcomponent">Router Link Test</RouterLink>
</template>

<style scoped></style>
