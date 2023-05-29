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
          <div class="mt-2 font-semibold">
            {{ remainingTime }}&nbsp;<span :class="isShopOpen ? 'text-green-500' : 'text-red-500'">to Close</span> 
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
  computed: {
    remainingTime() {
      const now = new Date();
      const opening = new Date();
      const closing = new Date();
      opening.setHours(9);
      closing.setHours(17);

      // Check if the shop is currently open
      if (now >= opening && now < closing) {
        // Calculate the time remaining until closing
        const timeDiff = closing - now;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Format the remaining time
        return `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      } else {
        // Calculate the time remaining until opening
        let timeDiff;
        if (now < opening) {
          timeDiff = opening - now;
        } else {
          // Add 1 day to the opening time if it's already past the opening hour today
          opening.setDate(opening.getDate() + 1);
          timeDiff = opening - now;
        }
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        console.log(`${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)
        // Format the remaining time
        return `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      }
    },
  },
  methods: {
    shopStatus() {
      const date = new Date();
      if (date.getDay() === 0) {
        this.isShopOpen = false;
      } else if (
        date.getHours() < 9 ||
        (date.getHours() === 17 && date.getMinutes() >= 0)
      ) {
        this.isShopOpen = false;
      } else {
        this.isShopOpen = true;
      }
    },
  },
  created() {
    this.shopStatus();
    setInterval(this.shopStatus, 60000);
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
