<template>
  <section>
    <Products/>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Products from '~/components/products/Products.vue'
export default Vue.extend({

  components:{Products},
  name: 'IndexPage'
})
</script>
