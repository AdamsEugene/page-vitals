<template>
  <div id="chart">
    <apexchart
      type="rangeArea"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "New York",
          type: "rangeArea",
          data: [
            { x: "Jan", y: [11, 15] },
            { x: "Feb", y: [11, 15] },
            { x: "Mar", y: [11, 15] },
          ],
        },
        {
          name: "Average",
          type: "area",
          data: [
            { x: "Jan", y: 7 },
            { x: "Feb", y: 13 },
            { x: "Mar", y: 5 },
          ],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              shade: "light",
              type: "vertical",
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100],
            },
          },
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          stacked: true,
        },
        stroke: {
          curve: ["straight", "smooth"],
          width: [0, 2],
        },
        markers: {
          hover: {
            sizeOffset: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          labels: {
            rotate: -35,
          },
        },
        yaxis: {
          labels: {
            formatter: (val: number) => {
              return val + "°C";
            },
          },
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
        colors: ["#E91E63", "#03C191"],
      },
    };
  },
});
</script>
