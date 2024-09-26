<script lang="ts">
import * as d3 from 'd3'

export default {
  data() {
    return {
      data: [
        { date: '2023-01-01', value: 10 },
        { date: '2023-01-02', value: 20 },
        { date: '2023-01-03', value: 15 },
        { date: '2023-01-04', value: 25 },
        { date: '2023-01-05', value: 30 },
        { date: '2023-01-06', value: 28 },
        { date: '2023-01-07', value: 35 },
        { date: '2023-01-08', value: 40 },
        { date: '2023-01-09', value: 38 },
        { date: '2023-01-10', value: 45 }
      ]
    }
  },

  mounted() {
    const width = 800
    const height = width
    const svg = d3.select('svg').attr('width', width).attr('height', height)
    const g = svg.append('g')

    const parseTime = d3.timeParse('%Y-%m-%d')

    const x = d3
      .scaleTime()
      .domain(
        d3.extent(this.data, function (d) {
          return parseTime(d.date)
        })
      )
      .rangeRound([0, width])

    const y = d3
      .scaleLinear()
      .domain(
        d3.extent(this.data, function (d) {
          return d.value
        })
      )
      .rangeRound([height, 0])

    const line = d3
      .line<{ date: string; value: number }>()
      .x(function (d) {
        const parsedDate = parseTime(d.date)
        return x(parsedDate ? parsedDate : new Date())
      })
      .y(function (d) {
        return y(d.value)
      })

    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))

    g.append('g')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('value')

    g.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', line)
  }
}
</script>

<template>
  <div>
    <h1>TAG CLOUD</h1>
    <svg></svg>
  </div>
</template>
