<script lang="ts">
import Vue3WordCloud from 'vue3-word-cloud'

export default {
  name: 'WordCloud',
  components: {
    Vue3WordCloud
  },
  data() {
    return {
      theData: {},
      theArray: [],
      wordsArray: [],
      duckArray: [
        { text: 'duck', weight: 100 },
        { text: 'mallard', weight: 80 },
        { text: 'quack', weight: 60 },
        { text: 'water', weight: 50 },
        { text: 'fowl', weight: 40 },
        { text: 'webbed', weight: 30 },
        { text: 'feathers', weight: 20 },
        { text: 'wings', weight: 10 }
      ]
    }
  },

  methods: {
    fetchData() {
      let query = 'https://api.collection.nfsa.gov.au/search?query=war'
      console.log(query)
      fetch(query).then((response) => {
        response
          .json()
          .then((res) => {
            this.$data.theData = res
            const results = this.$data.theData

            this.$data.theArray = results.meta.facet.year.buckets
            this.$data.wordsArray = []

            this.$data.theArray.forEach((element) => {
              element.text = element['_id']
              element.weight = element['count']
              this.$data.wordsArray.push([element.text, element.weight])
            })
            console.log(this.$data.wordsArray)
          })
          .catch((err) => {
            console.error(err)
          })
      })
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<template>
  <div class="wordCloudContainer">
    <h1>Word Cloud Moment</h1>
    <h3>If you can see this. I'm connected right!</h3>
    <div>
      <vue3-word-cloud
        id="titles"
        style="width: 600px; height: 600px"
        :words="wordsArray"
        :color="() => '#' + Math.floor(Math.random() * 16777215).toString(16)"
        :font-family="'serif'"
        :spacing="0.35"
      />
      <h3>Click on a year to see the magic</h3>
      <div>
        <ul class="list-v">
          <li v-for="result in theData.results" :key="result.text">
            {{ result.title }}
            {{ result.name }}
          </li>
        </ul>

        <button @click="fetchData">Fetch Data</button>
      </div>
    </div>
  </div>

  <div>
    <ul class="list-v">
      <!-- create a variable called result, 
      loop through the API results and add a <li> for each result.
      Use the result variable to access properties like 'title' and 'name' -->
      <!-- <li v-for="result in theData.results" :key="result.title">
        {{ result.title }}
        {{ result.name }}
      </li> -->
    </ul>
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
  margin: auto;
  height: 600px;
  background-color: #d7d7d7;
  padding: 20px;
  border-radius: 5px;
}
</style>
