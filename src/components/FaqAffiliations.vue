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
    question: "Commonwealth Scholars and Fellows Alumni Association of Nigeria (COSFAN)",
    answer: "2025 Sir Ahmadu Bello Sardauna Distinguished Platinum Award of Excellence",
    // content: "https://www.youtube.com/embed/Qqv3GUR5hKc?si=iztKHpjKDwWt5hUk",
    type: "text",
  },
  {
    question: "Healthcare Federation of Nigeria (HFN)",
    answer: "National Association of Northern Nigerian Students (NANNS)",
    // content: "https://www.youtube.com/embed/I5JVHG6AJhg?si=6hl1IKlBQz3cyZWr",
    type: "text",
  },
  {
    question: "Medical Women's Association of Nigeria (MWAN)",
    answer: "National Association of Northern Nigerian Students (NANNS)",
    // content: "https://www.youtube.com/embed/I5JVHG6AJhg?si=6hl1IKlBQz3cyZWr",
    type: "text",
  },
  {
    question: "Toastmasters Club International",
    answer: "National Association of Northern Nigerian Students (NANNS)",
    // content: "https://www.youtube.com/embed/I5JVHG6AJhg?si=6hl1IKlBQz3cyZWr",
    type: "text",
  },
  {
    question: "Community Impact Recognitionl",
    answer: "National Association of Northern Nigerian Students (NANNS)",
    // content: "https://www.youtube.com/embed/I5JVHG6AJhg?si=6hl1IKlBQz3cyZWr",
    type: "text",
  },
  {
    question: "Media Coverage",
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
