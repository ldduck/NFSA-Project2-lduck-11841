<script>
export default {
  name: 'AlternateComponent'
}
</script>

<template>
  <div class="alternateIntro">
    <h1>This is an alternate component</h1>
    <p>If you can see this text then the component is working correctly.</p>
  </div>
</template>

<style scoped>
.alternateIntro {
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
}

h1 {
  color: #ffcc00; /* Bright yellow for good contrast */
}

p {
  color: #00ccff; /* Bright cyan for good contrast */
}
</style>
