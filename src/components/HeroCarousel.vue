<template>
  <section class="relative w-full h-[500px] overflow-hidden">
    <div
      class="flex transition-transform duration-[20000ms] ease-linear"
      :style="{ transform: `translateX(-${currentIndex * (100 + gapPercent)}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="flex-shrink-0 w-full"
        :style="{
          paddingLeft: paddingValue.left,
          paddingRight: paddingValue.right,
          marginRight: gapValue,
        }"
      >
        <img :src="slide" class="w-full h-[500px] object-cover" alt="Slide image" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, defineProps } from "vue";

interface Padding {
  left?: number | string;
  right?: number | string;
}

const props = defineProps<{
  padding?: number | string | Padding;
  gap?: number | string;
}>();

const slides = ref([
  "/HIGCImages/Frame24.png",
  "/HIGCImages/Frame21.png",
  "/HIGCImages/Frame24.png",
  "/HIGCImages/service2.png",
]);

const currentIndex = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

// 🐢 Make it move very slowly
const startAutoPlay = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }, 20000); // wait 20 seconds before moving to next image
};

onMounted(startAutoPlay);
onBeforeUnmount(() => interval && clearInterval(interval));

// Padding logic
const paddingValue = computed(() => {
  if (typeof props.padding === "number") {
    return { left: `${props.padding}px`, right: `${props.padding}px` };
  } else if (typeof props.padding === "string") {
    return { left: props.padding, right: props.padding };
  } else if (typeof props.padding === "object" && props.padding !== null) {
    return {
      left:
        typeof props.padding.left === "number"
          ? `${props.padding.left}px`
          : props.padding.left || "0px",
      right:
        typeof props.padding.right === "number"
          ? `${props.padding.right}px`
          : props.padding.right || "0px",
    };
  }
  return { left: "0px", right: "0px" };
});

// Gap logic
const gapValue = computed(() =>
  typeof props.gap === "number" ? `${props.gap}px` : props.gap || "30px"
);

// Used to adjust slide offset
const gapPercent = computed(() => {
  if (typeof props.gap === "number") return (props.gap / window.innerWidth) * 100;
  return 3;
});
</script>
