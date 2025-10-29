<template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <img
        src="/HIGCImages/Image-5.png"
        alt="Slide image"
        class="w-full h-[500px] rounded-xl object-cover"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="/HIGCImages/Frame21.png"
        alt="Slide image"
        class="w-full h-[500px] rounded-xl object-cover"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="/HIGCImages/Frame22.png"
        alt="Slide image"
        class="w-full h-[500px] rounded-xl object-cover"
      />
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const options = {
  type: "loop",
  padding: { left: "8rem", right: "8rem" }, // adds side padding
  gap: "1rem",
  autoplay: true,
  pauseOnHover: true,
  perPage: 1,
  speed: 1000,
  arrows: false,
  interval: 10000,
  pagination: false,
};
</script>

<style scoped>
.splide__slide img {
  width: 100%;
  border-radius: 10px;
  display: block;
}
</style>
