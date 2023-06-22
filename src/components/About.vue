<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/veterinary-farm-walking-cowshed-checking-cows_1303-31023.jpg?w=900&t=st=1687422489~exp=1687423089~hmac=327c191a979148fe70d4ead974857b9202ac2a51189e506789b81e6f45701159"
            alt="Camel"
            class="w-full h-full object-cover object-center md:max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div class="md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h2 class="text-3xl font-bold mb-4">About Majestic Veterinary</h2>
          <p class="text-gray-800 mb-6">
            At Majestic , we are driven by a deep love and passion for animals.
            We understand that your pets are more than just companions; they are
            cherished members of your family. That's why we strive to provide
            exceptional veterinary care that goes beyond medical treatment.
          </p>
          <p class="text-gray-800 mb-6">
            With years of experience and a team of compassionate veterinarians
            and staff, we are committed to ensuring the well-being and happiness
            of your furry friends. We know that a visit to the vet can sometimes
            be a source of anxiety for both pets and their owners. That's why we
            create a warm and welcoming environment, where your pets feel safe
            and loved from the moment they walk through our doors.
          </p>
          <p class="text-gray-800 mb-6">
            But it's not just about medical expertise; it's about forming a
            genuine connection with your pets. We take the time to listen to
            your concerns and understand your pet's individual personality and
            needs.
          </p>
          <router-link
            to="/contact"
            class="inline-block no-underline px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-400 transition-colors duration-300"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
