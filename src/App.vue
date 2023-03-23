<template>
  <img alt="Vue logo" src="./assets/ehealth.webp" width="250" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <!-- <Chart :xAxis="chart.xAxis" :series="chart.series" :options="chartOptions" /> -->

  <div id="app" v-for="item of info" :key="item.id">
    {{ item.name }}
  </div>
  <!-- {{ info }} -->
  <div>
    <highcharts class="hc" :options="chartOptions" ref="barChart"></highcharts>
  </div>
</template>

<script>
// import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent } from "vue";
import axios from "axios";
import Highcharts from "highcharts";
// import HighchartsVue from "highcharts-vue";
import { Chart } from "highcharts-vue";
import exportingInit from "highcharts/modules/exporting";

exportingInit(Highcharts);

export default defineComponent({
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  name: "App",
  data() {
    return {
      info: [],
      chartOptions: {
        chart: {
          type: "column",
        },

        title: {
          text: "Bloodgroup Chart",
        },

        yAxis: {
          title: {
            text: "Ages",
          },
          // categories: [
          // "O-15",
          // "16-25",
          // "25-40",
          // "41-55",
          // "56-65",
          // "66-75",
          // "75-100",
          // ],
        },
        xAxis: {
          title: {
            text: "Bloodgroup",
          },
          categories: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
        },

        series: [
          {
            data: [
              {
                name: "Point 1",
                color: "#00FF00",
                y: 3,
              },
              {
                name: "Point 2",
                color: "#FF00FF",
                y: 10,
              },
              {
                name: "Point 3",
                color: "#DD0",
                y: 5,
              },
              {
                name: "Point 4",
                color: "#EE8932",
                y: 1,
              },
              {
                name: "Point 5",
                color: "#964B00",
                y: 9,
              },
              {
                name: "Point 6",
                color: "#000",
                y: 3,
              },
              {
                name: "Point 7",
                color: "#FF0212",
                y: 5,
              },
              {
                name: "Point 8",
                color: "#0000FF",
                y: 4,
              },
            ],
          },
        ],
      },
    };
  },
  components: {
    HelloWorld,
    highcharts: Chart,
    // Chart,
  },
  methods: {
    // handler() {
    //   var args = arguments;
    //   for (var arg of args) {
    //     if (arg instanceof Function) {
    //       arg();
    //     }
    //   }
    // },
  },
  mounted() {
    axios
      .get("https://ehealth-35945-default-rtdb.firebaseio.com/Patients.json")

      .then((response) => (this.info = response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
