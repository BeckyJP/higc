<template>
  <section class="relative w-full h-[500px] overflow-hidden">
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
        <img
          :src="slide"
          class="w-full h-[500px] object-cover transition-transform duration-[4000ms] ease-in-out"
          :class="{
            'scale-110': currentIndex === index,
            'scale-100': currentIndex !== index,
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const slides = ref([
  "../HIGCImages/Image-5.png",
  "../HIGCImages/Frame21.png",
  "../HIGCImages/Frame24.png",
]);

const currentIndex = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

const startAutoPlay = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }, 4000); // Change every 4 seconds
};

onMounted(() => {
  startAutoPlay();
});

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}
</style>
