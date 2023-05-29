<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Product: {{ product.name }}</h1>
    <div class="mb-4">
      <h2 class="text-lg font-semibold">Description</h2>
      <p>{{ product.description }}</p>
    </div>
    <div v-for="detail in product.detail" class="mb-4">
      <h2 class="text-lg font-semibold">{{ detail.title }}</h2>
      <p>Detail: {{ detail.content }}</p>
    </div>
    <div class="mb-4">
      <h2 class="text-lg font-semibold">Price: {{ product.price }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
/* Add Tailwind CSS classes or custom styles here */
</style>
