<template>
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Timing and Shop Open/Close</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded shadow-md p-6">
          <h3 class="text-xl font-semibold mb-4">Shop Hours</h3>
          <ul>
            <li v-for="timing in shopTimings" :key="timing.day" class="mb-2">
              <span class="font-semibold">{{ timing.day }}:</span>
              <span>{{ timing.open }} - {{ timing.close }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-white rounded shadow-md p-6">
          <h3 class="text-xl font-semibold mb-4">Shop Status</h3>
          <div v-if="isShopOpen" class="text-green-500 font-semibold">
            Shop is currently open!
          </div>
          <div v-else class="text-red-500 font-semibold">
            Shop is currently closed.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopTimings: [
        { day: "Monday", open: "9:00 AM", close: "5:00 PM" },
        { day: "Tuesday", open: "9:00 AM", close: "5:00 PM" },
        { day: "Wednesday", open: "9:00 AM", close: "5:00 PM" },
        { day: "Thursday", open: "9:00 AM", close: "5:00 PM" },
        { day: "Friday", open: "9:00 AM", close: "1:00 PM" },
        { day: "Saturday", open: "Closed", close: "Closed" },
        { day: "Sunday", open: "Closed", close: "Closed" },
      ],
      isShopOpen: true,
    };
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
