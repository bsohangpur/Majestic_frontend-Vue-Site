<template>
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Customer Reviews</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-white rounded shadow-md p-6"
        >
          <div class="flex items-center mb-4">
            <v-icon name="fa-user" class="mr-4 border-2 w-10 h-10 p-1 rounded-full"/>
            <div>
              <h3 class="text-lg font-semibold">{{ review.name }}</h3>
              <p class="text-gray-500">{{ review.location }}</p>
            </div>
          </div>
          <p class="text-gray-700">{{ review.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: "John Doe",
          location: "Dubai, UAE",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus elit ac pharetra tempus.",
        },
        {
          id: 2,
          name: "Jane Smith",
          location: "New York, USA",
          content:
            "Ut egestas elementum urna a scelerisque. Proin bibendum nisl euismod lectus tristique fringilla.",
        },
        {
          id: 3,
          name: "David Johnson",
          location: "London, UK",
          content:
            "Praesent volutpat tristique nibh, ut luctus nunc vestibulum nec. Morbi euismod neque metus.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styling here */
</style>
