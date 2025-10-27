<template>
  <li class="bg-gray-100 py-4 my-4 rounded-lg px-4">
    <button class="w-full flex items-center justify-between" @click="FaqToggle">
      <p class="text-base lg:text-lg text-left font-neue">
        {{ props.item.question }}
      </p>
      <span class="p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
        </svg>
      </span>
    </button>
    <div v-if="isOpen" class="mt-5">
      <template v-if="item.type === 'text'">
        <p class="text-base pr-6 lg:pr-12">
          {{ item.answer }}
        </p>
      </template>
      <template v-else-if="item.type === 'video'">
        <p class="text-base my-4 pr-6 lg:pr-12">
          {{ item.answer }}
        </p>
        <div class="video-container">
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              :src="item.content"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              class="rounded w-2/3 h-60 lg:h-96"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </template>
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const isOpen = ref(false);

const FaqToggle = () => {
  isOpen.value = !isOpen.value;
};
</script>
