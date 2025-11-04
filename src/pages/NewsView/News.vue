<template>
  <DefaultLayout>
    <div class="max-w-screen-xl mx-auto px-6 md:my-10 my-8">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_3fr] py-4 mt-6">
        <div>
          <h3 class="md:text-4xl w-40 md:leading-[3rem] text-3xl font-neue">
            News & Updates
          </h3>
          <p class="text-gray-500">See what HIGC is up to.</p>
        </div>
        <div>
          <div class="bg-darkGray p-4 my-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
              <p class="text-base font-mono text-[#ABABAB]">January 31, 2025</p>
              <div>
                <router-link to="/news/update">
                  <p class="rounded-full text-sm w-20 px-4 py-1 text-center bg-gray-200">
                    Health
                  </p>
                </router-link>
                <p class="text-black font-[400] text-base mt-2">
                  Reflecting on progress in global digital health
                </p>
              </div>
            </div>
          </div>
          <div class="bg-darkGray p-4 my-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
              <p class="text-base font-mono text-[#ABABAB]">January 5, 2025</p>
              <div>
                <p class="rounded-full text-sm w-20 px-4 py-1 text-center bg-gray-200">
                  Health
                </p>
                <p class="text-black font-[400] text-base mt-2">
                  Strengthening Africa’s health R&D and manufacturing ecosystem: Analysis
                  of the investments and gaps
                </p>
              </div>
            </div>
          </div>
          <div class="bg-darkGray p-4 my-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
              <p class="text-base font-mono text-[#ABABAB]">January 4, 2025</p>
              <div>
                <p class="rounded-full text-sm w-28 px-4 py-1 text-center bg-gray-200">
                  Infrastructure
                </p>
                <p class="text-black font-[400] text-base mt-2">
                  Working with different teams? No problem. Add as many as you like and
                  switch between them instantly.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-darkGray p-4 my-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
              <p class="text-base font-mono text-[#ABABAB]">January 2, 2025</p>
              <div>
                <p class="rounded-full text-sm w-20 px-4 py-1 text-center bg-gray-200">
                  Partners
                </p>
                <p class="text-black font-[400] text-base mt-2">
                  You asked, we delivered. Create multiple teams and switch between them
                  with ease—no more logging in and out.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-darkGray p-4 my-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
              <p class="text-base font-mono text-[#ABABAB]">January 2, 2025</p>
              <div>
                <p class="rounded-full text-sm w-20 px-4 py-1 text-center bg-gray-200">
                  Partners
                </p>
                <p class="text-black font-[400] text-base mt-2">
                  You asked, we delivered. Create multiple teams and switch between them
                  with ease—no more logging in and out.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-darkGray p-4 my-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
              <p class="text-base font-mono text-[#ABABAB]">January 2, 2025</p>
              <div>
                <p class="rounded-full text-sm w-28 px-4 py-1 text-center bg-gray-200">
                  Infrastructure
                </p>
                <p class="text-black font-[400] text-base mt-2">
                  You asked, we delivered. Create multiple teams and switch between them
                  with ease—no more logging in and out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>
