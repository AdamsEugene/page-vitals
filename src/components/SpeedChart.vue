<template>
  <div id="chart">
    <apexchart
      type="area"
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
      series: [{
        name: "Area",
        data: [1, 40, 5, 50, 49, 60, 130, 91]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        colors: ["#008FFB"], // Primary color for the line
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          },
        }
      },
    };
  },
});
</script>
