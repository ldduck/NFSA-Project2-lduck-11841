<script lang="ts">
import * as d3 from 'd3'

interface Data {
  place: string
  population: number
}

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
      ] as DataNode[]

      const colorScale = d3
        .scaleOrdinal<string>()
        .domain(data.map((d) => d.place))
        .range(d3.schemeCategory10)

      const svg = d3
        .select(this.$refs.circleContainer as HTMLElement)
        .append('svg')
        .attr('width', 600)
        .attr('height', 600)

      svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d, i) => i * 100 + 30)
        .attr('cy', 60)
        .attr('r', (d) => d.population)
        .attr('fill', (d) => colorScale(d.place))
    }
  }
}

// const width = 800
// const height = width
// const svg = d3.select('svg').attr('width', width).attr('height', height)
// const g = svg.append('g')

// const parseTime = d3.timeParse('%Y-%m-%d')

// const x = d3
//   .scaleTime()
//   .domain(
//     d3.extent(this.data, function (d) {
//       return parseTime(d.date)
//     })
//   )
//   .rangeRound([0, width])

// const y = d3
//   .scaleLinear()
//   .domain(
//     d3.extent(this.data, function (d) {
//       return d.value
//     })
//   )
//   .rangeRound([height, 0])

// const line = d3
//   .line<{ date: string; value: number }>()
//   .x(function (d) {
//     const parsedDate = parseTime(d.date)
//     return x(parsedDate ? parsedDate : new Date())
//   })
//   .y(function (d) {
//     return y(d.value)
//   })

// g.append('g')
//   .attr('transform', 'translate(0,' + height + ')')
//   .call(d3.axisBottom(x))

// g.append('g')
//   .call(d3.axisLeft(y))
//   .append('text')
//   .attr('fill', '#000')
//   .attr('transform', 'rotate(-90)')
//   .attr('y', 6)
//   .attr('dy', '0.71em')
//   .attr('text-anchor', 'end')
//   .text('value')

// g.append('path')
//   .datum(this.data)
//   .attr('fill', 'none')
//   .attr('stroke', 'steelblue')
//   .attr('stroke-linejoin', 'round')
//   .attr('stroke-linecap', 'round')
//   .attr('stroke-width', 1.5)
//   .attr('d', line)
</script>

<template>
  <div>
    <h1>TAG CLOUD</h1>
    <div ref="circleContainer"></div>
  </div>
</template>
