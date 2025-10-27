<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Higc-Header.vue";
import Footer from "../components/Higc-Footer.vue";
</script>
