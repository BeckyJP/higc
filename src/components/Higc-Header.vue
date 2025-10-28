<template>
  <header class="bg-white sticky top-0 z-50">
    <nav
      class="flex items-center justify-between text-[18px] max-w-screen-xl mx-auto px-4 py-6"
    >
      <!-- Logo -->
      <span class="md:hidden block"
        ><router-link to="/"
          ><img src="/images/icons/logo.png" alt="HIGC image" class="w-12" /></router-link
      ></span>

      <!-- Center Navigation -->
      <ul class="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        <div class="flex space-x-2 items-center">
          <router-link to="/"
            ><svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="40" height="40" fill="url(#pattern0_28_812)" />
              <defs>
                <pattern
                  id="pattern0_28_812"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_28_812"
                    transform="translate(-0.146341 -0.146341) scale(0.0106833)"
                  />
                </pattern>
                <image
                  id="image0_28_812"
                  width="121"
                  height="121"
                  preserveAspectRatio="none"
                  xlink:href="data:image/png;base64,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"
                />
              </defs></svg
          ></router-link>
        </div>
        <li v-for="(item, index) in navItems" :key="index" class="relative">
          <button
            @click="toggleDropdown(index)"
            class="flex items-center gap-1 hover:text-primary focus:outline-none"
          >
            <router-link :to="item.link || '#'">{{ item.name }}</router-link>
            <svg
              v-if="item.dropdown"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Dropdown -->
          <transition name="fade">
            <div
              v-if="openDropdown === index && item.dropdown"
              class="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-60 z-20"
            >
              <ul class="py-2 text-gray-600">
                <li v-for="(subItem, subIndex) in item.dropdown" :key="subIndex">
                  <router-link
                    :to="subItem.link || '#'"
                    class="block px-4 py-2 hover:text-primary"
                  >
                    {{ subItem.label }}
                  </router-link>
                </li>
              </ul>
            </div>
          </transition>
        </li>
      </ul>

      <!-- Right Button -->
      <div class="flex-shrink-0 hidden md:block">
        <BaseButton variant="primary" show-arrow icon-position="right">
          <router-link to="/contact-us">Book Appointment </router-link>
        </BaseButton>
      </div>

      <!-- Hamburger for Mobile -->
      <button
        @click="toggleMenu"
        class="md:hidden text-gray-700 hover:text-primary-700 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex md:hidden">
        <!-- Overlay -->
        <div class="flex-1 bg-black bg-opacity-40" @click="toggleMenu"></div>

        <!-- Sidebar Content -->
        <div class="w-72 bg-white shadow-lg h-full flex flex-col">
          <div
            class="flex justify-between items-center px-4 py-4 border-b border-gray-200"
          >
            <h2 class="text-lg font-bold text-gray-800"></h2>
            <button @click="toggleMenu" class="text-gray-700 hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul class="flex-1 overflow-y-auto text-gray-700 font-medium">
            <li
              v-for="(item, index) in navItems"
              :key="'mobile-' + index"
              class="border-b border-gray-100"
            >
              <button
                class="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-blue-50"
                @click="toggleDropdown(index)"
              >
                <router-link :to="item.link || '#'">{{ item.name }}</router-link>
                <svg
                  v-if="item.dropdown"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="openDropdown === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'"
                  />
                </svg>
              </button>

              <!-- Mobile Dropdown -->
              <ul v-if="item.dropdown && openDropdown === index" class="bg-gray-50">
                <li v-for="(subItem, subIndex) in item.dropdown" :key="'sub-' + subIndex">
                  <router-link
                    :to="subItem.link || '#'"
                    class="block px-8 py-2 hover:bg-blue-100"
                  >
                    {{ subItem.label }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <!-- Bottom Button -->
          <div class="p-4 border-t border-gray-200">
            <BaseButton variant="primary" show-arrow icon-position="right" class="w-full">
              <router-link to="/contact-us">Book Appointment</router-link>
            </BaseButton>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./base/BaseButton.vue";

const isOpen = ref(false);
const openDropdown = ref<number | null>(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  openDropdown.value = null;
};

const toggleDropdown = (index: number) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};

const navItems = [
  {
    name: "About Us",
    link: "/about/our-story",
    dropdown: [
      { label: "Our Story", link: "/about/our-story" },
      { label: "Leadership, Team & Awards", link: "/about/our-team" },
      { label: "Core Values", link: "/about/core-values" },
    ],
  },
  {
    name: "Services",
    link: "/services",
    dropdown: [
      { label: "Community Health Programs", link: "/services/community-health" },
      { label: "Medical & Safety Supplies", link: "/services/medical-supplies" },
      { label: "Healthcare Innovation & Manufacturing", link: "/services/innovation" },
      { label: "Healthcare Consulting & Administration", link: "/services/consulting" },
      { label: "Medical Outreach & Social Impact", link: "/services/social-impact" },
    ],
  },
  { name: "Products", link: "/products", dropdown: null },

  { name: "News & Updates", link: "/news", dropdown: null },
  { name: "Contact Us", link: "/contact-us", dropdown: null },
];
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
