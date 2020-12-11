<template>
  <sui-grid divided="vertically" centered>
    <sui-grid-row :columns="1">
      <sui-grid-column :width="8">
        <sui-segment piled class="p">
          <sui-grid celled>
            <sui-grid-row>
              <sui-grid-column :width="4">
                <Lamp />
              </sui-grid-column>
              <sui-grid-column :width="12">
                <h4 is="sui-header">
                  Lest's Play
                  <sui-header-subheader>
                    If you wanna know how much you will get this week just
                    follow the instranctions below
                  </sui-header-subheader>
                </h4>
              </sui-grid-column>
            </sui-grid-row>
          </sui-grid>
        </sui-segment>

        <sui-segment piled>
          <Form />
        </sui-segment>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
  import Form from '../components/Form';
  import Lamp from '../components/LampSvg';

  export default {
    name: 'Home',
    components: {
      Form,
      Lamp,
    },

    mounted() {
      this.$store.commit('step1/SET_DATES_STEP_1', []);
      this.$store.commit('step2/SET_WEEKENDS_STEP_2', []);
      this.$store.commit('step3/SET_CLEAR_LIST_STEP_3', []);
      this.$store.commit('step4/SET_VALUES_ASIGNED_STEP_4', []);
      this.$store.commit('step5/SET_ABOVE_OR_BELLOW_STEP_5', '');
      this.$store.commit('step6/SET_RESULT_STEP_6', []);
    },
  };
</script>

<style>
  .p {
    padding: 0 !important;
  }
  .ui.piled.segment,
  .ui.piled.segments {
    margin: 1em 0 !important;
  }

  .ui.celled.grid {
    margin: 0 !important;
  }
</style>
