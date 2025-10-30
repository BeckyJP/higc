<template>
  <DefaultLayout>
    <div class="max-w-screen-xl mx-auto px-6 md:my-10 my-8">
      <div class="grid grid-cols-1 md:grid-cols-1 py-4 mt-6">
        <div>
          <small class="text-gray-500 font-mono text-sm">MEET THE TEAM</small>
          <h1 class="font-neue md:text-[56px] pt-4 text-2xl md:leading-[4rem]">
            Meet Our Leadership
            <p class="text-gray-500 text-[16px] font-normal">
              A dedicated, innovative team advancing healthcare we believe in together.
            </p>
          </h1>
          <img
            src="/HIGCImages/Frame28.webp"
            alt="HIGC image"
            class="w-[360px] lg:h-[440px] h-auto my-6 object-container rounded-2xl"
          />
          <p class="md:text-[24px] text-[16px] font-neue font-semibold">
            Dr. Owen Omo-Ojo (MD, MPH)
          </p>
          <p class="text-[16px] text-gray-500">Founder & Managing Director</p>
        </div>
      </div>
    </div>
    <section class="bg-gray-100 py-10">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-[40px] py-6 text-black font-neue">Our Growing Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="rounded-2xl">
            <img
              src="/HIGCImages/Team1.webp"
              alt="HIGC image"
              class="w-[340px] lg:h-[440px] h-auto object-container rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] text-neue text-black">Peter Odiase</p>
              <p class="text-[20px] text-gray-500">Marketing</p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="/HIGCImages/Team2.webp"
              alt="HIGC image"
              class="w-[340px] lg:h-[440px] h-auto object-container rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] text-neue text-black">Samuel Gbiaye</p>
              <p class="text-[20px] text-gray-500">
                Digital Communications and Operations
              </p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="/HIGCImages/Team3.webp"
              alt="HIGC image"
              class="w-[340px] lg:h-[440px] h-auto object-container rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] text-neue text-black">Celestine Omin</p>
              <p class="text-[20px] text-gray-500">Advisor</p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="/HIGCImages/Team4.webp"
              alt="HIGC image"
              class="w-[340px] lg:h-[440px] h-auto object-container rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] text-neue text-black">Jerome Uzoka</p>
              <p class="text-[20px] text-gray-500">Chief Medic</p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="/HIGCImages/Team5.webp"
              alt="HIGC image"
              class="w-[340px] lg:h-[440px] h-auto object-container rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] text-neue text-black">Festus Okubor</p>
              <p class="text-[20px] text-gray-500">Remote Site Nurse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="max-w-screen-xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-1 py-4 mt-6">
        <div class="">
          <small class="text-gray-500 font-normal font-mono"
            >PLACES WE HAVE BEEN RECOGNISED
          </small>
          <h1 class="font-neue md:text-[56px] pt-4 text-2xl md:leading-[4rem]">
            Awards & Recognition
            <p class="text-gray-500 text-[16px] font-inter">
              A creative, curious crew building things we believe in—together.
            </p>
          </h1>
          <div>
            <h3 class="md:text-[40px] text-[32px] font-neue mt-8">
              National Recognition
            </h3>
            <div><Faq /></div>
          </div>
          <div>
            <h3 class="md:text-[40px] text-[32px] font-neue mt-8">
              Professional Memberships & Affiliations
            </h3>
            <div><FaqAffiliations /></div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "../../layouts/DefaultLayout.vue";
import FaqAffiliations from "@/components/FaqAffiliations.vue";
</script>
