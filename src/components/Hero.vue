<template>
  <section class="bg-sky-950 text-white">
    <div class="container mx-auto px-4 py-16 lg:flex lg:justify-between">
      <!-- Content Section -->
      <div class="lg:w-1/2">
        <h1 class="text-4xl lg:text-6xl font-bold mb-4 hero_heading">
          Welcome to
          <span class="text-green-500 hero_heading_inner -tracking-wide"
            >Majestic Veterinary</span
          >
        </h1>
        <h2 class="text-xl text-yellow-200 lg:text-3xl mb-6">
          Providing exceptional care for animals
        </h2>
        <p class="text-lg mb-8 md:mr-4">
          Welcome to Majestic Veterinary , where your furry companions are our
          top priority. We understand the deep bond you share with your beloved
          pets, and that's why we're dedicated to providing exceptional
          veterinary products to ensure their health and happiness.
        </p>
        <a
          href="#"
          class="bg-green-500 no-underline text-white py-2 px-4 rounded hover:bg-green-400 transition duration-300"
          >Learn More</a
        >
      </div>

      <!-- Image Section -->
      <div class="lg:w-1/2 mt-10 lg:mt-0">
        <img
          src="https://img.freepik.com/free-photo/veterinarian-taking-care-lambs-sheep-farm_342744-426.jpg?w=900&t=st=1685102083~exp=1685102683~hmac=8e1e809f7cd1176ebec2325574d1b47d549e215ac4c86589e3313fcddd3b15b8"
          alt="Camel"
          class="w-full h-full object-center object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<style>
@media (max-width: 1023px) {
  .lg\:justify-between {
    justify-content: flex-start;
  }

  .lg\:w-1\/2 {
    width: 100%;
  }

  .mt-10 {
    margin-top: 2.5rem;
  }
}

.hero_heading {
  -webkit-text-stroke: 2px #fff; /* For WebKit browsers (Chrome, Safari) */
  -webkit-text-fill-color: transparent; /* For WebKit browsers (Chrome, Safari) */
}

.hero_heading_inner {
  -webkit-text-stroke: 0px;
  -webkit-text-fill-color: rgb(34 197 94);
}
</style>
