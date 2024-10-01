<script lang="ts">
import Vue3WordCloud from 'vue3-word-cloud'

export default {
  name: 'WordCloud',
  components: {
    Vue3WordCloud
  }
}
</script>

<template>
  <div class="wordCloudContainer">
    <h1>Word Cloud Moment</h1>
    <h3>If you can see this. I'm connected right!</h3>
    <vue3-word-cloud
      id="titles"
      class="words"
      style="width: 600px; height: 600px; text-align: center"
      :words="[
        { text: 'Vue', weight: 200 },
        { text: 'React', weight: 110 },
        { text: 'Angular', weight: 90 },
        { text: 'Svelte', weight: 70 },
        { text: 'Ember', weight: 50 },
        { text: 'More', weight: 40 },
        { text: 'Heretic', weight: 38 },
        { text: 'Gregg', weight: 33 }
      ]"
      :color="
        (word) => {
          const weight = word.weight as number
          return weight > 80 ? 'DeepPink' : weight > 45 ? 'RoyalBlue' : 'Indigo'
        }
      "
      :font-size="(word) => (word.weight as number) * 0.5"
      :font-family="'serif'"
      :spacing="0.35"
    >
    </vue3-word-cloud>
  </div>
</template>

<style scoped>
.wordCloudContainer {
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
h1 {
  color: #ffcc00;
  font-size: 2.6rem;
}
h3 {
  color: #00ccff;
  font-size: 1.2rem;
}

#titles {
  width: 100%;
  height: 600px;
  background-color: #d7d7d7;
  padding: 20px;
  border-radius: 5px;
}
</style>
