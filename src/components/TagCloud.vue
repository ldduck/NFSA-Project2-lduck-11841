<script>
import * as d3 from 'd3'

export default {
  name: 'TagCloud',
  mounted() {
    this.createTagCloud()
  },
  methods: {
    createTagCloud() {
      const data = [
        { tag: 'JavaScript', count: 25 },
        { tag: 'Vue.js', count: 15 },
        { tag: 'D3.js', count: 10 },
        { tag: 'HTML', count: 20 },
        { tag: 'CSS', count: 18 },
        { tag: 'Web Development', count: 22 },
        { tag: 'Programming', count: 30 },
        { tag: 'Frontend', count: 12 },
        { tag: 'Backend', count: 8 },
        { tag: 'Fullstack', count: 5 }
      ]
      const width = 800,
        height = width

      const svg = d3
        .select(this.$refs.chart)
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      const bubble = d3.pack().size([width, height]).padding(1)

      const nodes = d3.hierarchy({ children: data }).sum((d) => d.count)

      const node = svg
        .selectAll('.node')
        .data(bubble(nodes).leaves())
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d) => `translate(${d.x},${d.y})`)

      node
        .append('circle')
        .attr('r', (d) => d.r)
        .style('text-anchor', 'middle')

      node
        .append('text')
        .attr('dy', '.3em')
        .style('text-anchor', 'middle')
        .text((d) => d.data.name)
    }
  }
}
</script>

<template>
  <div>
    <h2>TAG CLOUD</h2>
    <svg></svg>
  </div>
  <div id="tooltip">
    <p>Tooltip information</p>
  </div>
</template>

<style></style>
