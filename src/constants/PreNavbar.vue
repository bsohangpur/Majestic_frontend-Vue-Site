<template>
  <div
    class="h-12 bg-green-950 text-green-50 w-full flex justify-center items-center"
  >
    <ul class="w-full flex justify-evenly">
      <li class="cursor-pointer  hover:translate-x-4">
        <a href="tel:+917 582663302" class="text-green-50 no-underline hover:text-green-300"> +917 582663302 </a>
      </li>
      <li class="cursor-pointer  hover:translate-x-4">
        <a href="mailto:majestic.pharm@gmail.com" target="_blank" class="text-green-50 no-underline hover:text-green-300">
          majestic.pharm@gmail.com
        </a>
      </li>
      <li class="cursor-pointer hover:translate-x-4">
        <router-link
          class="text-green-50 no-underline hover:text-green-300"
          to="/contact"
          >Contact Now</router-link
        >
      </li>
    </ul>
  </div>
</template>
