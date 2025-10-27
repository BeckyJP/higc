<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300',
      variantClass,
      sizeClass,
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: { type: String, default: "button" },
  variant: {
    type: String,
    default: "primary", // primary | secondary | outline | text
  },
  size: {
    type: String,
    default: "md", // sm | md | lg
  },
  disabled: { type: Boolean, default: false },
});

const variantClass = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary text-white hover:bg-primary/90";
    case "secondary":
      return "bg-gray-200 text-gray-800 hover:bg-gray-300";
    case "outline":
      return "border border-primary text-primary hover:bg-primary hover:text-white";
    case "text":
      return "text-primary hover:underline";
    default:
      return "bg-primary text-white";
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "text-sm px-4 py-2";
    case "lg":
      return "text-lg px-8 py-4";
    default:
      return "text-base px-6 py-3";
  }
});
</script>
