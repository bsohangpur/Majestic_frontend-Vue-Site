<template>
  <div class="">
    <ProductDetail :product="product" />
  </div>
</template>

<script>
import { ref } from "vue";
import { products } from "../data";
import {ProductDetail} from "../components";
import { useRoute } from "vue-router";

export default {
  components: { ProductDetail },
  setup() {
    const route = useRoute();
    const product = ref(null);

    // Find the product based on the route parameter
    product.value = products.find((pro) => pro.name.toLowerCase() === route.params.name.toLowerCase());

    return {
      product,
    };
  },
};
</script>

<style>
/* Add Tailwind CSS classes or custom styles here */
</style>
