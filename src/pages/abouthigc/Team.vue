<template>
  <DefaultLayout>
    <div class="container mx-auto md:px-20 px-8 md:my-10 my-8">
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
            src="@/assets/HIGCImages/Frame28.png"
            alt="HIGC image"
            class="w-[360px] w-full h-[450px] my-6 object-container md:object-cover rounded-2xl"
          />
          <p class="md:text-[24px] text-[16px] font-neue font-semibold">
            Dr. Owen Omo-Ojo (MD, MPH)
          </p>
          <p class="text-[16px] text-gray-500">Founder & Managing Director</p>
        </div>
      </div>
    </div>
    <section class="bg-gray-100 py-10">
      <div class="container mx-auto md:px-20 px-8">
        <h2 class="text-[40px] py-6 text-black font-neue">Our Growing Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="rounded-2xl">
            <img
              src="@/assets/HIGCImages/Team1.png"
              alt="HIGC image"
              class="w-[340px] w-full md:h-[440px] h-auto object-container md:object-cover rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] text-neue text-black">Peter Odiase</p>
              <p class="text-[20px] text-gray-500">Marketing</p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="@/assets/HIGCImages/Team2.png"
              alt="HIGC image"
              class="w-[340px] w-full md:h-[440px] h-auto object-container md:object-cover rounded-2xl"
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
              src="@/assets/HIGCImages/Team3.png"
              alt="HIGC image"
              class="w-[340px] w-full md:h-[440px] h-auto object-container md:object-cover rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] text-neue text-black">Celestine Omin</p>
              <p class="text-[20px] text-gray-500">Advisor</p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="@/assets/HIGCImages/Team4.png"
              alt="HIGC image"
              class="w-[340px] w-full md:h-[440px] h-auto object-container md:object-cover rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] text-neue text-black">Jerome Uzoka</p>
              <p class="text-[20px] text-gray-500">Chief Medic</p>
            </div>
          </div>
          <div class="rounded-2xl">
            <img
              src="@/assets/HIGCImages/Team5.png"
              alt="HIGC image"
              class="w-[340px] w-full md:h-[440px] h-auto object-container md:object-cover rounded-2xl"
            />
            <div class="py-4">
              <p class="text-[24px] text-neue text-black">Festus Okubor</p>
              <p class="text-[20px] text-gray-500">Remote Site Nurse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mx-auto md:px-20 px-8">
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
