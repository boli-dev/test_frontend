<template>
  <sui-grid divided="vertically" centered>
    <sui-grid-row :columns="1">
      <sui-grid-column :width="9">
        <sui-card class="fluid" v-if="loading && results.length <= 0">
          <sui-card-content>
            <Placholder />
          </sui-card-content>
        </sui-card>

        <template v-if="results.length > 0">
          <sui-card class="fluid" v-for="(r, index) in results" :key="index">
            <sui-card-content>
              <sui-statistic
                in-group
                class=" right floated"
                v-if="r.value > 0"
                color="green"
              >
                <sui-statistic-value>
                  {{ r.value }}
                </sui-statistic-value>
              </sui-statistic>

              <sui-statistic
                in-group
                class=" right floated"
                v-if="r.value <= 0"
                color="red"
              >
                <sui-statistic-value>
                  {{ r.value }}
                </sui-statistic-value>
              </sui-statistic>
              <sui-card-header> {{ r.date }} </sui-card-header>
              <sui-card-meta>
                It's a <b>{{ r.dateName }}</b> a
                <b>{{ r.dateNumber }}</b>
                on the week
              </sui-card-meta>
            </sui-card-content>
          </sui-card>
        </template>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Placholder from '../components/Placeholder';

  export default {
    name: 'Result',

    components: {
      Placholder,
    },

    created() {},

    mounted() {
      if (this.results.length <= 0) {
        this.startStep6();
      }
    },

    methods: {
      ...mapActions({
        startStep6: 'step6/startStep6',
      }),
    },

    computed: {
      ...mapGetters({
        results: 'step6/GET_RESULT_STEP_6',
        loading: 'step6/GET_LOADING_STEP_6',
      }),
    },
  };
</script>

<style>
  .ui.statistic > .value,
  .ui.statistics .statistic > .value {
    font-size: 2rem !important;
  }
</style>
