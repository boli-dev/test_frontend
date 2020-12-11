<template>
  <vue-form
    class="ui form tiny"
    :class="{ loading: loading }"
    :state="formstate"
    v-model="formstate"
    @submit.prevent="onSubmit"
  >
    <validate class="field" auto-label :class="fieldClassName(formstate.total)">
      <label> Total </label>
      <sui-input
        placeholder="Total"
        icon="dollar sign"
        iconPosition="left"
        name="total"
        required
        v-model="model.total"
      />

      <field-messages name="total">
        <template slot="required" scope="state">
          <label v-if="state.$touched || state.$submitted">
            Total is a required field
          </label>
        </template>
      </field-messages>
    </validate>

    <validate class="field" auto-label :class="fieldClassName(formstate.date1)">
      <label> date1 </label>
      <sui-input
        type="date"
        placeholder="Date1"
        icon="calendar alternate"
        iconPosition="left"
        name="date1"
        required
        v-model="model.date1"
      />

      <field-messages name="date1">
        <template slot="required" scope="state">
          <label v-if="state.$touched || state.$submitted">
            Date1 is a required field
          </label>
        </template>
      </field-messages>
    </validate>

    <validate class="field" auto-label :class="fieldClassName(formstate.date2)">
      <label> date2 </label>
      <sui-input
        type="date"
        placeholder="Date2"
        icon="calendar alternate"
        iconPosition="left"
        name="date2"
        required
        v-model="model.date2"
      />

      <field-messages name="date2">
        <template slot="required" scope="state">
          <label v-if="state.$touched || state.$submitted">
            Date2 is a required field
          </label>
        </template>
      </field-messages>
    </validate>

    <validate
      class="field"
      auto-label
      :class="fieldClassName(formstate.baseline)"
    >
      <label> Baseline </label>
      <sui-input
        placeholder="Baseline"
        icon="chart pie"
        iconPosition="left"
        name="baseline"
        required
        v-model="model.baseline"
      />

      <field-messages name="baseline">
        <template slot="required" scope="state">
          <label v-if="state.$touched || state.$submitted">
            Baseline is a required field
          </label>
        </template>
      </field-messages>
    </validate>

    <sui-button fluid type="submit" content="Play" />
  </vue-form>
</template>

<script>
  export default {
    name: 'Form',

    data: () => ({
      formstate: {},
      loading: false,
      model: {
        total: '',
        date1: '',
        date2: '',
        baseline: '',
      },
    }),

    methods: {
      fieldClassName: function(field) {
        if (!field) {
          return '';
        }
        if ((field.$touched || field.$submitted) && field.$invalid) {
          return 'error';
        }
      },
      onSubmit: function() {
        if (this.formstate.$valid) {
          this.loading = true;
          setTimeout(() => {
            this.$router.push({
              path: '/about',
              query: {
                total: this.model.total,
                date1: this.model.date1,
                date2: this.model.date2,
                baseline: this.model.baseline,
              },
            });
          }, 1000);
        }
      },
    },
  };
</script>

<style></style>
