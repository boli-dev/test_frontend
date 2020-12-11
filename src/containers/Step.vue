<template>
  <sui-feed size="small">
    <sui-feed-event>
      <sui-icon v-if="loading" name="spinner" loading />
      <sui-icon v-if="!loading" name="check" color="green" />
      <sui-feed-content>
        <sui-feed-date> Step {{ stepNumber }} </sui-feed-date>
        <sui-feed-summary> {{ stepTitle }} </sui-feed-summary>
        <sui-feed-extra text>
          <template v-if="loading">
            <Placeholder />
          </template>
          <slot />
        </sui-feed-extra>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
  import ListOfDates from '../components/ListOfDates.vue';
  import Placeholder from '../components/Placeholder';

  export default {
    props: ['stepNumber', 'stepTitle', 'loading'],
    components: { ListOfDates, Placeholder },
  };
</script>

<style></style>
