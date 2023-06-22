<template>
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Timing and Pharmacy Open/Close</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded shadow-md p-6">
          <h3 class="text-xl font-semibold mb-4">Pharmacy Opening Hours</h3>
          <ul>
            <li v-for="timing in shopTimings" :key="timing.day" class="mb-2">
              <span class="font-semibold">{{ timing.day }}:</span>
              <span>9:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>
        <div class="bg-white rounded shadow-md p-6">
          <h3 class="text-xl font-semibold mb-4">Pharmacy Status</h3>
          <div v-if="isShopOpen" class="text-green-500 font-semibold">
            Pharmacy is currently open!
          </div>
          <div v-else class="text-red-500 font-semibold">
            Pharmacy is currently closed.
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
        { day: "Monday" },
        { day: "Tuesday" },
        { day: "Wednesday" },
        { day: "Thursday" },
        { day: "Friday" },
        { day: "Saturday" },
        { day: "Sunday" },
      ],
      isShopOpen: true,
    };
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
