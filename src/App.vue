<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheFetch from './components/TheFetch.vue'
</script>

<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/alternate">Alternate</RouterLink>
    </nav>
    <TheFetch msg="Fetch some data" />
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
}
</style>
