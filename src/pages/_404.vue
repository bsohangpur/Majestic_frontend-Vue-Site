<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="text-center flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold mb-4">Oops!</h1>
      <p class="text-lg text-gray-600 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <img src="../assets/_404_t.png" alt="404" class="w-64 mb-6" />
      <router-link to="/" class="text-green-500 underline hover:text-green-700"
        >Go back to Home</router-link
      >
    </div>
  </div>
</template>

<style>
/* Add your custom styles here */
</style>
