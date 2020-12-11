<template lang="html">
  <sui-grid divided="vertically" centered>
    <sui-grid-row :columns="1">
      <sui-grid-column :width="9">
        <sui-segments piled>
          <sui-segment>
            <b>Logs</b>
          </sui-segment>
          <sui-segment>
            <Step stepNumber="1" :stepTitle="stepTitle_1" :loading="loading">
              <ListOfDates
                v-for="(date, index) in dates"
                :key="index"
                :date="date"
              />
            </Step>

            <Step
              stepNumber="2"
              :stepTitle="stepTitle_2"
              :loading="weekendsLoading"
            >
              <ListOfDates
                v-for="(weekend, index) in weekends"
                :key="index"
                :date="weekend"
              />

              <sui-list v-if="!weekendsLoading && weekends.length <= 0">
                <sui-list-item>
                  <sui-list-header>
                    No
                    <a>
                      <b>
                        WEEKENDS
                      </b>
                    </a>
                    in this range of dates
                  </sui-list-header>
                </sui-list-item>
              </sui-list>
            </Step>

            <Step
              stepNumber="3"
              :stepTitle="stepTitle_3"
              :loading="clearListLoading"
            >
              <ListOfDates
                v-for="(l, index) in clearList"
                :key="index"
                :date="l"
              />
            </Step>

            <Step
              stepNumber="4"
              :stepTitle="stepTitle_4"
              :loading="valuesAsignedLoading"
            >
              <sui-list bulleted horizontal v-if="!valuesAsignedLoading">
                <a
                  v-for="(value, index) in valuesAsigned"
                  :key="index"
                  is="sui-list-item"
                >
                  {{ value }}
                </a>
              </sui-list>
            </Step>

            <Step
              stepNumber="5"
              :stepTitle="stepTitle_5"
              :loading="aboveOrBellowLoading"
            >
              <sui-list v-if="!aboveOrBellowLoading">
                <sui-list-item>
                  <sui-list-header>
                    The sum is {{ aboveOrBellow }} 1% of the
                    <a>
                      <b>
                        {{ $route.query.total }}
                      </b>
                    </a>
                  </sui-list-header>
                </sui-list-item>
              </sui-list>
            </Step>

            <Step
              stepNumber="6"
              stepTitle="Final touch"
              :loading="resultLoading"
            >
            </Step>
          </sui-segment>
        </sui-segments>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
  import Step from '../containers/Step';
  import ListOfDates from '../components/ListOfDates';
  import { mapGetters } from 'vuex';

  export default {
    name: 'FeedShorthandExample',
    components: {
      Step,
      ListOfDates,
    },

    data: () => ({
      step: 1,
    }),

    created() {
      this.$store.commit('step1/SET_DATES_STEP_1', []);
      this.$store.commit('step2/SET_WEEKENDS_STEP_2', []);
      this.$store.commit('step3/SET_CLEAR_LIST_STEP_3', []);
      this.$store.commit('step4/SET_VALUES_ASIGNED_STEP_4', []);
      this.$store.commit('step5/SET_ABOVE_OR_BELLOW_STEP_5', '');
      this.$store.commit('step6/SET_RESULT_STEP_6', []);
      this.$store.dispatch('step1/startStep1', this.$route.query);
    },

    computed: {
      stepTitle_1() {
        const { date1, date2 } = this.$route.query;
        return 'Get dates between ' + date1 + ' and ' + date2;
      },

      stepTitle_2() {
        const { date1, date2 } = this.$route.query;
        return 'Get weekends between ' + date1 + ' and ' + date2;
      },

      stepTitle_3() {
        const { date1, date2 } = this.$route.query;
        return 'Remove weekends between ' + date1 + ' and ' + date2;
      },

      stepTitle_4() {
        const { date1, date2 } = this.$route.query;
        return 'Generate asigned values';
      },

      stepTitle_5() {
        const { total } = this.$route.query;
        return 'Check if the sum above or below' + total;
      },

      ...mapGetters({
        dates: 'step1/GET_DATES_STEP_1',
        loading: 'step1/GET_LOADING_STEP_1',
        weekends: 'step2/GET_WEEKENDS_STEP_2',
        weekendsLoading: 'step2/GET_LOADING_STEP_2',
        clearList: 'step3/GET_CLEAR_LIST_STEP_3',
        clearListLoading: 'step3/GET_LOADING_STEP_3',
        valuesAsigned: 'step4/GET_VALUES_ASIGNED_STEP_4',
        valuesAsignedLoading: 'step4/GET_LOADING_STEP_4',
        aboveOrBellow: 'step5/GET_ABOVE_OR_BELLOW_STEP_5',
        aboveOrBellowLoading: 'step5/GET_LOADING_STEP_5',
        resultLoading: 'step6/GET_LOADING_STEP_6',
      }),
    },
  };
</script>
