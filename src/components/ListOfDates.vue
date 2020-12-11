<template>
  <sui-list>
    <sui-list-item>
      <sui-icon name="calendar alternate" />
      <sui-list-content>
        <a is="sui-list-header"> {{ date.date }} </a>
        <sui-list-description>
          It's a <b>{{ date.dateName }}</b> a
          <b>{{ date.dateNumber }}</b>
          on the week
        </sui-list-description>
      </sui-list-content>
    </sui-list-item>
  </sui-list>
</template>

<script>
  export default {
    name: 'ListofDates',
    props: ['date'],
  };
</script>

<style></style>
