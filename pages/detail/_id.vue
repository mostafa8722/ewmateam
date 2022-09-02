<template>
    <section>
      <Details/>
    </section>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import Details from '~/components/details/Details.vue'
  export default Vue.extend({
  
    components:{Details},
    name: 'IndexPage'
  })
  </script>
  