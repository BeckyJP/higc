<template>
  <DefaultLayout>
    <div class="max-w-screen-xl mx-auto px-6 md:my-10 my-4">
      <div class="grid grid-cols-1 md:grid-cols-2 md:py-4 md:mt-6">
        <div>
          <h1 class="font-neue font-medium md:text-6xl text-[40px] md:leading-[4rem]">
            Leading Healthcare Consulting Nigeria <br />
            <span class="text-[#ABABAB]">Since </span>
            <span class="text-[#ABABAB] font-mono">2018 </span>
          </h1>
        </div>
        <div class="pt-6 md:px-8">
          <p class="text-[#7C7C7C] leading-[1.5rem] text-base">
            Nigeria's premier healthcare consulting firm and medical equipment supplier,
            transforming lives across Africa.
          </p>
          <p class="text-[#7C7C7C] leading-[1.5rem] text-base py-4">
            Led by award-winning Dr. Owen Omo-Ojo, we provide innovative solutions.
          </p>
          <div class="flex flex-wrap gap-4 mt-2">
            <BaseButton> Our Impact Stories </BaseButton>
            <BaseButton variant="secondary"> Partnership Opportunities </BaseButton>
          </div>
        </div>
      </div>
      <div class="md:pt-8 pt-4 mt-4">
        <h3 class="text-center font-normal text-[#7C7C7C]">
          Trusted by industry leaders
        </h3>
        <PartnersIcon />
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto px-6 my-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center rounded-2xl">
          <img
            src="/HIGCImages/Frame1.webp"
            alt="HIGC image"
            class="w-full md:h-[560px] h-auto object-container rounded-2xl"
          />
        </div>
        <div class="text-center">
          <div class="text-center rounded-2xl">
            <img
              src="/HIGCImages/Frame2.webp"
              alt="HIGC image"
              class="w-[360px] w-full md:h-[270px] h-auto object-container rounded-2xl"
            />
          </div>
          <div class="text-center rounded-2xl mt-6">
            <img
              src="/HIGCImages/Frame3.webp"
              alt="HIGC image"
              class="w-[360px] w-full md:h-[270px] h-auto object-container rounded-2xl"
            />
          </div>
        </div>
        <div class="text-center rounded-2xl">
          <img
            src="/HIGCImages/Frame10.webp"
            alt="HIGC image"
            class="w-[360px] w-full md:h-[560px] h-auto object-container rounded-2xl"
          />
        </div>
      </div>
      <div class="my-10">
        <p
          class="text-black font-neue font-medium md:pr-[15rem] md:text-[40px] md:px-4 md:leading-[3.5rem] text-3xl"
        >
          We've built our reputation through consistent delivery of quality healthcare
          solutions across Africa. Over a decade transforming healthcare through medical
          outreach programs, comprehensive healthcare training, and innovative medical
          device manufacturing that saves lives.
        </p>
        <BaseButton class="mt-6">
          Meet Our Team
          <svg
            width="18"
            height="18"
            class="ml-2"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3172 10.4422L11.6922 16.0672C11.5749 16.1845 11.4159 16.2503 11.25 16.2503C11.0841 16.2503 10.9251 16.1845 10.8078 16.0672C10.6905 15.9499 10.6247 15.7909 10.6247 15.625C10.6247 15.4591 10.6905 15.3001 10.8078 15.1828L15.3664 10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H15.3664L10.8078 4.81719C10.6905 4.69991 10.6247 4.54085 10.6247 4.375C10.6247 4.20915 10.6905 4.05009 10.8078 3.93281C10.9251 3.81554 11.0841 3.74965 11.25 3.74965C11.4159 3.74965 11.5749 3.81554 11.6922 3.93281L17.3172 9.55781C17.3753 9.61586 17.4214 9.68479 17.4529 9.76066C17.4843 9.83654 17.5005 9.91787 17.5005 10C17.5005 10.0821 17.4843 10.1635 17.4529 10.2393C17.4214 10.3152 17.3753 10.3841 17.3172 10.4422Z"
              fill="white"
            />
          </svg>
        </BaseButton>
        <div class="text-center rounded-2xl pt-10">
          <img
            src="/HIGCImages/Image-9.webp"
            alt="HIGC image"
            class="w-full md:h-[560px] h-auto object-container rounded-2xl"
          />
        </div>
      </div>
      <CoreValue />
      <div>
        <h2 class="text-4xl font-medium text-black font-neue pt-16">
          What Makes Us Different
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-2 mt-6">
          <div class="px-6 bg-gray-100 rounded-2xl">
            <div class="mt-8">
              <p class="my-4 text-base font-mono uppercase">
                1. Social Enterprise Approach
              </p>
              <p
                class="text-black text-xl font-medium font-neue md:text-[36px] md:leading-[2.5rem] md:mt-24 mt-12 py-6"
              >
                Forecast upcoming transactions and strategically allocate resources using
                advanced modeling techniques.
              </p>
            </div>
          </div>
          <div class="md:px-8">
            <div class="bg-gray-100 p-4 mb-4 rounded-2xl">
              <p class="my-4 font-mono text-base uppercase">2. Cash Planning</p>
              <p class="text-black font-neue font-medium md:text-2xl md:mt-12">
                Anticipate future financial activity and align capital needs with
                precision using cutting-edge forecasting tools.
              </p>
            </div>
            <div class="flex md:flex-nowrap flex-wrap gap-4">
              <div class="bg-gray-100 p-4 rounded-2xl">
                <p class="font-mono uppercase text-md">3.Flow Insights</p>
                <p class="text-black font-neue font-medium text-2xl mt-16 mb-4">
                  Stay ahead of cash flow trends.
                </p>
              </div>
              <div class="bg-gray-100 p-4 rounded-2xl">
                <p class="font-mono uppercase text-md">4. Financial Moves</p>
                <p class="text-black font-neue font-medium text-2xl mt-16 mb-4">
                  Use predictive analytics to plan smarter changes.
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
import BaseButton from "@/components/base/BaseButton.vue";
import DefaultLayout from "../../layouts/DefaultLayout.vue";
import PartnersIcon from "@/components/PartnersIcon.vue";
import CoreValue from "@/components/CoreValue.vue";
</script>
