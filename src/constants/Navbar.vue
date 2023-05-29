<template>
  <PreNavbar />
  <nav class="bg-green-100">
    <div class="container mx-auto flex items-center justify-between px-4 py-4">
      <div class="flex items-center">
        <img src="../assets/logo.png" alt="Logo" class="h-10 w-10 mr-4" />
        <span class="text-gray-900 font-bold text-xl">Majestic Veterinary</span>
      </div>

      <!-- desktop links -->

      <div class="hidden md:flex items-center space-x-4">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="link.link"
          class="block no-underline text-gray-900 font-medium py-2 hover:text-green-600 text-lg"
          ><span v-if="link.name !== 'Products'">{{ link.name }}</span>
        </router-link>

        <!-- product links  -->

        <div
          class="relative"
          v-if="links.find((link) => link.name === 'Products')"
        >
          <router-link
            class="block no-underline text-gray-900 font-medium py-2 hover:text-green-600 text-lg"
            to="/product"
          >
            <span
              class="block text-gray-900 font-medium py-2 hover:text-green-600 text-lg cursor-pointer"
              @click="toggleDropdown"
              @mouseenter="toggleDropdown"
            >
              Products
              <v-icon name="md-arrowdropdown" />
            </span>
          </router-link>
          <div
            class="absolute bg-green-200 z-50 py-2 px-4 mt-2 left-0 w-48"
            v-show="isDropdownOpen"
            @mouseleave="toggleDropdown"
          >
            <a
              v-for="productLink in productLinks"
              :key="productLink.name"
              :href="'/product' + productLink.link"
              class="block no-underline text-gray-900 font-medium py-1 hover:text-green-600"
              >{{ productLink.name }}</a
            >
          </div>
        </div>

        <!-- search box  -->
        <div class="border-2 relative">
          <input
            v-show="isSearchOpen"
            class="p-1 focus:outline-green-900"
            type="text"
            v-model="search"
            @mouseleave="toggleSearch"
          />
          <button @click="handleSearch" class="px-2">
            <v-icon fill="green" name="fa-search" />
          </button>
          <div
            class="absolute bg-green-200 z-50 py-2 px-4 mt-2 right-0 w-48"
            v-show="isSearchOpen"
            v-if="product_links"
          >
            <a
              v-for="product in product_links"
              :key="product.name"
              :href="'/product' + product.link"
              class="block no-underline text-gray-900 font-medium py-1 hover:text-green-600"
              >{{ product.name }}</a
            >
          </div>
        </div>
      </div>

      <!-- mobile links  -->
      <div class="md:hidden">
        <button
          @click="toggleMobileMenu"
          class="text-gray-900 hover:text-green-600 focus:outline-none"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden bg-green-500 pt-2 pb-4 px-2 grid place-items-center"
    >
      <div v-for="link in links" class=" ">
        <router-link
          v-if="link.name !== 'Products'"
          :key="link.name"
          :to="link.link"
          class="block no-underline text-gray-900 font-medium py-2 hover:text-green-600 text-lg"
          >{{ link.name }}
        </router-link>
      </div>

      <!-- product dropdown  -->
      <div
        class="relative"
        v-if="links.find((link) => link.name === 'Products')"
      >
        <router-link
          class="block no-underline text-gray-900 font-medium py-2 hover:text-green-600 text-lg"
          to="/product"
        >
          <span
            class="block text-gray-900 font-medium hover:text-green-600 text-lg cursor-pointer"
            @click="toggleDropdown"
          >
            Products
            <v-icon name="md-arrowdropdown" />
          </span>
        </router-link>
        <div
          class="absolute bg-green-200 z-50 py-2 px-4 mt-2 top-8 w-48"
          v-show="isDropdownOpen"
        >
          <a
            v-for="productLink in productLinks"
            :key="productLink.name"
            :href="'/product' + productLink.link"
            class="block no-underline text-gray-900 font-medium py-1 hover:text-green-600"
            >{{ productLink.name }}</a
          >
        </div>
      </div>

      <!-- search box  -->
      <div class="">
        <div class="border-2 relative">
          <input
            class="p-1 focus:outline-green-900"
            type="text"
            v-model="search"
          />
          <button @click="handleSearch" class="px-2 h-8 hover:bg-slate-300">
            <v-icon fill="green" name="fa-search" />
          </button>
          <div
            class="absolute bg-green-200 z-50 py-2 px-4 mt-2 w-48"
            v-show="isSearchOpen"
          >
            <a
              v-for="product in product_links"
              :key="product.name"
              :href="'/product' + product.link"
              class="block no-underline text-gray-900 font-medium py-1 hover:text-green-600"
              >{{ product.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { links } from "../data";
import PreNavbar from "./PreNavbar.vue";
import { products } from "../data";

export default {
  data() {
    return {
      isMobileMenuOpen: false,
      links,
      search: null,
      isDropdownOpen: false,
      isSearchOpen: false,
      product_links: [],
    };
  },

  computed: {
    productLinks() {
      return this.links.find((link) => link.name === "Products").sublinks;
    },
  },

  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
    handleSearch() {
      const pattern = new RegExp(this.search, "i");
      const product = products.filter((val) => pattern.test(val.name));
      this.product_links =
        product &&
        product.map((val) => {
          return val.link;
        });

      this.toggleSearch();
    },
  },
  components: { PreNavbar },
};
</script>
