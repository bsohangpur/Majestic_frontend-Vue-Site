<script>
import { links, social_links } from "../data";

const year = new Date().getFullYear();

export default {
  data() {
    return {
      social_links,
      links,
      year
    };
  },
};
</script>

<template>
  <footer class="bg-gray-800 text-gray-300">
    <div class="container mx-auto py-8 px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Footer Section 1-about -->
        <div>
          <h2 class="text-2xl font-bold mb-4">About Us</h2>
          <p class="w-2/3">
            We are a dedicated team of professionals providing exceptional care
            for camels. Our mission is to ensure the well-being and health of
            these magnificent animals.
          </p>
        </div>

        <!-- Footer Section 2-links -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Quick Links</h2>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.name">
              <router-link :to="link.link" class="text-gray-50 hover:text-green-400">{{
                link.name
              }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Footer Section 3-contact -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
          <p class="mb-2">123 Camel Street,</p>
          <p class="mb-2">Desert City,</p>
          <p>Camelland</p>
          <div class="mt-4"></div>

          <!-- Footer Section 3-social -->
          <div>
            <h2 class="text-2xl font-bold mb-4">Social Links</h2>
            <ul class="flex gap-2">
              <li v-for="social_link in social_links" :key="social_link.icon">
                <a :href="social_link.link" class=""
                  ><v-icon
                    scale="1.5"
                    class="hover:scale-110"
                    :fill="social_link.color"
                    :name="social_link.icon"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="bg-gray-900 py-4 px-4">
      <div class="container mx-auto text-center text-sm">
        <p>&copy; {{year}} Majestic Veterinary. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style>
footer a {
  transition: color 0.3s ease-in-out;
}

footer a:hover {
  color: #68d391;
}
</style>
