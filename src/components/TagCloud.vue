<script lang="ts">
import * as d3 from 'd3'

export default {
  name: 'TagCloud',

  mounted() {
    this.createCircles()
  },

  methods: {
    createCircles() {
      const data = [
        { place: 'Australia', population: 10 },
        { place: 'USA', population: 10 },
        { place: 'China', population: 10 },
        { place: 'India', population: 40 },
        { place: 'Russia', population: 50 },
        { place: 'Brazil', population: 50 },
        { place: 'South Africa', population: 70 },
        { place: 'New Zealand', population: 80 },
        { place: 'Japan', population: 90 },
        { place: 'South Korea', population: 100 },
        { place: 'North Korea', population: 100 },
        { place: 'Vietnam', population: 120 },
        { place: 'Thailand', population: 130 },
        { place: 'Hong Kong', population: 190 },
        { place: 'Macau', population: 500 }
      ]

      // creates a colour scale using the D3 schemes to colour the circles
      const colorScale = d3
        .scaleOrdinal<string>()
        .domain(data.map((d) => d.place))
        .range(d3.schemeCategory10)

      const width = 600
      const height = width

      // creates the svg element to display the circles
      const svg = d3
        .select(this.$refs.circleContainer)
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      // creates and colours the circles
      svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d, i) => (i + 1) * 100)
        .attr('cy', 60)
        .attr('r', (d) => d.population)
        .attr('fill', (d) => colorScale(d.place))

      // creates the text labels for the circles
      svg
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('x', (d, i) => (i + 1) * 100)
        .attr('y', 60)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .attr('fill', 'white')
        .text((d) => d.place)
    }
  }
}
</script>

<template>
  <div>
    <h1>TAG CLOUD</h1>
    <div ref="circleContainer"></div>
  </div>
</template>

<style scoped></style>
