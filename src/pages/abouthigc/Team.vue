<template>
  <DefaultLayout>
    <div class="max-w-screen-xl mx-auto px-6 md:my-10 my-8">
      <div class="grid grid-cols-1 md:grid-cols-1 py-4 mt-6">
        <div>
          <p class="text-[#7C7C7C] font-mono text-sm">MEET THE TEAM</p>
          <h1
            class="font-neue font-medium md:text-[56px] pt-4 text-4xl md:leading-[4rem]"
          >
            Meet Our Leadership
            <p class="text-[#5E5E5E] text-base font-inter font-normal">
              A dedicated, innovative team advancing healthcare we believe in together.
            </p>
          </h1>
          <img
            src="/HIGCImages/Frame28.webp"
            alt="HIGC image"
            class="w-[360px] lg:h-[440px] h-auto my-4 object-container rounded-2xl"
          />
          <p class="text-[24px] font-neue font-medium">Dr. Owen Omo-Ojo (MD, MPH)</p>
          <p class="text-[20px] font-inter text-[#7C7C7C]">Founder & Managing Director</p>
        </div>
      </div>
    </div>
    <section class="bg-gray-100 py-10">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-[40px] py-6 font-medium text-black font-neue">
          Our Growing Team
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="rounded-2xl">
            <img
              src="/HIGCImages/Team1.webp"
              alt="HIGC image"
              class="w-[340px] lg:h-[440px] h-auto object-container rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] font-medium font-neue text-black">Peter Odiase</p>
              <p class="text-[20px] font-inter text-[#7C7C7C]">Marketing</p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="/HIGCImages/Team2.webp"
              alt="HIGC image"
              class="w-[340px] lg:h-[440px] h-auto object-container rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] font-medium font-neue text-black">Samuel Gbiaye</p>
              <p class="text-[20px] font-inter text-[#7C7C7C]">
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
              <p class="text-[24px] font-medium font-neue text-black">Celestine Omin</p>
              <p class="text-[20px] font-inter text-[#7C7C7C]">Advisor</p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="/HIGCImages/Team4.webp"
              alt="HIGC image"
              class="w-[340px] lg:h-[440px] h-auto object-container rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] font-medium font-neue text-black">Jerome Uzoka</p>
              <p class="text-[20px] font-inter text-[#7C7C7C]">Chief Medic</p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="/HIGCImages/Team5.webp"
              alt="HIGC image"
              class="w-[340px] lg:h-[440px] h-auto object-container rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] font-medium font-neue text-black">Festus Okubor</p>
              <p class="text-[20px] font-inter text-[#7C7C7C]">Remote Site Nurse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="max-w-screen-xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-1 py-4 mt-6">
        <div class="">
          <p class="text-[#7C7C7C] text-sm font-normal font-mono">
            PLACES WE HAVE BEEN RECOGNISED
          </p>
          <h1
            class="font-neue font-medium md:text-[56px] pt-2 text-4xl md:leading-[4rem]"
          >
            Awards & Recognition
            <p class="text-[#7C7C7C] text-base font-inter">
              A creative, curious crew building things we believe in—together.
            </p>
          </h1>
          <div>
            <h3 class="text-4xl font-medium font-neue pt-8 mt-8">National Recognition</h3>
            <div><Faq /></div>
          </div>
          <div>
            <h2 class="text-4xl font-medium font-neun pt-8">
              Professional Memberships & Affiliations
            </h2>
            <FaqAffiliations />
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "../../layouts/DefaultLayout.vue";
import FaqAffiliations from "@/components/FaqAffiliations.vue";
import Faq from "@/components/Faq.vue";
</script>
