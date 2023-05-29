<template>
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-4">What We Offer</h2>
          <p class="text-gray-800 mb-8">
            We provide a wide range of high-quality products for animal care.
            From food and supplements to grooming supplies and accessories, we
            have everything you need to keep your pets healthy and happy.
          </p>
          <a
            href="/products"
            class="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-400"
          >
            Explore Our Products
          </a>
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0">
          <div class="">
            <swiper
              :effect="'cards'"
              :grabCursor="true"
              :modules="modules"
              class=" mx-2 w-72 md:w-96 "
            >
              <swiper-slide>
                <div class="bg-white rounded shadow-md p-4 m-2">
                  <img
                    src="https://img.freepik.com/free-photo/still-life-pet-toys_23-2149371258.jpg?w=900&t=st=1685180792~exp=1685181392~hmac=e63f60f09230cec0257c7358c5b3d31fe28a6f614598896b7e83d9471a9bded1"
                    alt="Product 1"
                    class="w-full object-cover rounded mb-4"
                  />
                  <h3 class="text-lg font-semibold">Product 1</h3>
                  <p class="text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ac ante id lorem tempus rutrum.
                  </p>
                </div></swiper-slide
              >
              <swiper-slide>
                <div class="bg-white rounded shadow-md p-4 m-2">
                  <img
                    src="https://img.freepik.com/free-photo/pet-accessories-still-life-concept-set_23-2148949592.jpg?w=826&t=st=1685180743~exp=1685181343~hmac=ac8e56c5047cec55e14734198e50abd7c66bb44eabd2fb68db531fa2f9923bfe"
                    alt="Product 2"
                    class="w-full object-cover rounded mb-4"
                  />
                  <h3 class="text-lg font-semibold">Product 2</h3>
                  <p class="text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ac ante id lorem tempus rutrum.
                  </p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Add your custom styles here */
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>
