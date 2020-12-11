<template>
  <sui-container text>
    <div class="app">
      <router-view />
    </div>
  </sui-container>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
  .app {
    padding-top: 50px;
  }
  .ui.statistic {
    margin: 0 !important;
  }
</style>
