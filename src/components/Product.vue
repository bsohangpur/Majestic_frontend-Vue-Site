<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg shadow-md"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-cover rounded-t-lg"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
            <p class="text-gray-700 mb-4">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-green-500 font-bold">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {products} from '../data';

export default {
  data() {
    return {
      products,
    };
  },
};
</script>

<style>
/* Additional styling can be added here */
</style>
