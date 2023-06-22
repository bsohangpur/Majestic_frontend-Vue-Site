<script>
import TextCrop from "../../utils/TextCrop.vue";

const team = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default {
  name: "who we are",
  data() {
    return {
      mission: `Our mission at Majestic Veterinary is to provide compassionate and
            high-quality veterinary care to every pet, ensuring their health,
            happiness, and well-being. We strive to be a trusted partner in your
            pet's journey, offering a comprehensive range of services and
            products that promote their overall health and longevity. Our
            dedicated team of veterinarians and staff is committed to delivering
            personalized care and building lasting relationships with both pets
            and their owners.`,
      vision: `At Majestic, our vision is to create a world where every pet
            receives the best possible care and lives a vibrant and fulfilling
            life. We envision a society where pet owners have access to reliable
            information, exceptional veterinary services, and high-quality
            products that meet their pet's unique needs. We aim to be a beacon
            of knowledge, compassion, and innovation in the veterinary field,
            continuously striving to enhance the well-being of pets through
            advanced medical practices and cutting-edge technology. We believe
            in the power of education and collaboration, and we are dedicated to
            providing pet owners with resources and guidance to make informed
            decisions about their pet's health. Through our unwavering
            commitment to excellence, we aspire to be a leading advocate for
            animal welfare and to inspire others to prioritize the health and
            happiness of their furry companions. Together, we can build a world
            where pets receive the love, care, and attention they deserve,
            enriching the lives of both animals and their human companions.`,
    };
  },
  methods: {
    team,
  },
  components: { TextCrop },
};
</script>

<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Who We Are</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Our Mission</h3>
          <TextCrop :text="mission" />
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Our Team</h3>
          <p class="text-gray-800">
            At Majestic Veterinary, we are proud to have a team of highly skilled
            and passionate professionals dedicated to the health and well-being
            of animals. With extensive experience in veterinary medicine and a
            deep love for animals, our team is committed to providing
            top-quality pharmaceutical services.
          </p>
          <button
            @click="team('team')"
            class="text-green-500 font-semibold mt-4 inline-block"
          >
            Meet the Team
          </button>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Our Vision</h3>
          <TextCrop :text="vision" />
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
