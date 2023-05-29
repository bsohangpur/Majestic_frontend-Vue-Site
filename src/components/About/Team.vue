<template>
  <div id="team" class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Our Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="teamMember in teamMembers"
          :key="teamMember.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            :src="teamMember.image"
            :alt="teamMember.name"
            class="h-64 w-full object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ teamMember.name }}</h3>
            <h4 class="text-gray-600">{{ teamMember.position }}</h4>
            <div class="mt-4">
              <p>{{ teamMember.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { teamMembers } from "../../data";

export default {
  data() {
    return {
      teamMembers,
    };
  },
};
</script>
