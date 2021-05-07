<template>
  <div class="p-grid p-fluid dashboard">
    <div class="p-col-12 p-lg-6">
      <div class="card">
        <Chart type="line" :data="lineData" />
      </div>
      <div class="card">
        <Chart type="line" :data="lineData" />
      </div>
    </div>
  </div>
</template>

<script>
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Chart from 'primevue/chart';

export default {
  components: {
    Chart,
  },
  data() {
    return {
      lineData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'last week',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
          },
          {
            label: 'current',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  background-color: #eee;
  margin: 0 auto;

  .card {
    margin: 16px;
    background: #fff;
    align-self: center;
  }
}
</style>
