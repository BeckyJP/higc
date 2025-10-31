<template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide
      v-for="(image, index) in images"
      :key="index"
      class="max-w-screen-xl mx-auto"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        class="w-full h-[200px] md:h-[700px] md:rounded-xl object-cover"
      />
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const images = [
  { src: "/HIGCImages/Image-5.webp", alt: "Slide image 1" },
  { src: "/HIGCImages/Frame21.webp", alt: "Slide image 2" },
  { src: "/HIGCImages/Frame22.webp", alt: "Slide image 3" },
];

const options = {
  type: "loop",
  autoplay: true,
  pauseOnHover: true,
  perPage: 1,
  gap: "1rem",
  arrows: false,
  pagination: false,
  speed: 1000,
  interval: 10000,
  padding: { left: "10rem", right: "10rem" },
  breakpoints: {
    1024: {
      padding: { left: "5rem", right: "5rem" },
    },
    768: {
      padding: { left: "2rem", right: "2rem" },
    },
    640: {
      padding: { left: "0rem", right: "0rem" },
    },
  },
};
</script>

<style scoped>
.splide__slide img {
  width: 100%;
  display: block;
  border-radius: 10px;
}
</style>
