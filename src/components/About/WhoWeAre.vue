<script>
const team = (id) => {
  const section = document.getElementById(id)
  if (section){
    section.scrollIntoView({behavior:'smooth'})
  }
};

export default {
  name:'who we are',
  data(){

  },
  methods:{
    team,
    
  }
}
</script>

<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Who We Are</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Our Mission</h3>
          <p class="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            luctus sem id posuere malesuada.
          </p>
          <a href="#" class="text-green-500 font-semibold mt-4 inline-block"
            >Learn More</a
          >
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Our Team</h3>
          <p class="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            luctus sem id posuere malesuada.
          </p>
          <button
            @click="team('team')"
            class="text-green-500 font-semibold mt-4 inline-block"
            >Meet the Team</button
          >
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Community Engagement</h3>
          <p class="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            luctus sem id posuere malesuada.
          </p>
          <a href="#" class="text-green-500 font-semibold mt-4 inline-block"
            >Get Involved</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.section-heading {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.card-title {
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.card-description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
}

.card-link {
  color: #0d9f6e;
  font-size: 14px;
  font-weight: bold;
}
</style>
