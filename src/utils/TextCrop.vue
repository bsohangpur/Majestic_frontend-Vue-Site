<template>
  <div>
    <p>{{ showMore ? `${first100Words} ${remainingWords}` : first100Words }}</p>
    <button
      class="hover:text-purple-800 text-green-500 mt-1 text-md font-bold"
      v-if="words.length > 100"
      @click="toggleShowMore"
    >
      {{ showMore ? "Show less" : "Show more" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
      words: [],
      first100Words: "",
      remainingWords: "",
    };
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.words = this.text.split(" ");
    this.first100Words = this.words.slice(0, 100).join(" ");
    this.remainingWords = this.words.slice(100).join(" ");
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>
