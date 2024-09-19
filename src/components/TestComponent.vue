<script>
export default {
  name: 'TestComponent'
}
</script>

<template>
  <div class="testIntro">
    <h1>This is a test component</h1>
    <p>If you can see this text then the component is working correctly.</p>
  </div>
</template>

<style scoped>
.testIntro {
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
