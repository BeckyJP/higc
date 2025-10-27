<template>
  <div class="lg:col-span-4 bg-white">
    <div class="py-2">
      <div class="rounded py-4">
        <ul>
          <FaqItem v-for="(item, index) in faqData" :key="index" :item="item" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import FaqItem from "../components/base/BaseAccordion.vue";

const faqData = [
  {
    question: "2025 Sir Ahmadu Bello Sardauna Distinguished Platinum Award of Excellence",
    answer: "2025 Sir Ahmadu Bello Sardauna Distinguished Platinum Award of Excellence",
    // content: "https://www.youtube.com/embed/Qqv3GUR5hKc?si=iztKHpjKDwWt5hUk",
    type: "text",
  },
  {
    question: "National Association of Northern Nigerian Students (NANNS)",
    answer: "National Association of Northern Nigerian Students (NANNS)",
    // content: "https://www.youtube.com/embed/I5JVHG6AJhg?si=6hl1IKlBQz3cyZWr",
    type: "text",
  },
];
</script>

<style scoped>
@media screen and (max-width: 640px) {
  .menu-hidden {
    display: none;
  }
}
</style>
