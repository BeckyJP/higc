<template>
  <footer class="bg-white pt-12">
    <div class="max-w-screen-xl mx-auto px-6 md:py-12 py-4">
      <div class="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
        <div>
          <span class="py-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="40" height="40" fill="url(#pattern0_28_968)" />
              <defs>
                <pattern
                  id="pattern0_28_968"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_28_968"
                    transform="translate(-0.146341 -0.146341) scale(0.0106833)"
                  />
                </pattern>
                <image
                  id="image0_28_968"
                  width="121"
                  height="121"
                  preserveAspectRatio="none"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </span>
          <div
            class="md:flex block md:space-x-6 space-x-6 md:mt-0 mt-4 text-[16px] md:py-6"
          >
            <a href="/about/our-story" class="text-gray-500 hover:text-gray-700"
              >About HIGC</a
            >
            <a href="/services" class="text-gray-500 hover:text-gray-700">Our Services</a>
            <a href="/products" class="text-gray-500 hover:text-gray-700"
              >Product Catalog</a
            >
            <a href="#" class="text-gray-500 hover:text-gray-700">Training Programs</a>
            <a href="#" class="text-gray-500 hover:text-gray-700">Career Opportunities</a>
          </div>
        </div>
        <div class="md:mb-12 mb-6">
          <div class="flex items-center gap-3">
            <BaseInput
              v-model="form.email"
              label="Join our newsletter"
              placeholder="jessica@email.com"
              type="email"
              id="email"
              class="md:w-2/3 mt-6"
            />
            <div class="mt-12 pt-4">
              <BaseButton variant="primary">Subscribe</BaseButton>
            </div>
          </div>
          <p class="text-gray-400 text-[14px] mx-3">
            By clicking, you’re agreeing to our Terms.
          </p>
        </div>
      </div>
      <hr class="border-gray-200" />
      <div class="md:pt-6 pt-3 mt-4 flex flex-col md:flex-row md:justify-between">
        <div class="flex space-x-2 mb-2">
          <div class="text-gray-400 hover:text-gray-700 mr-3 cursor-pointer">
            © 2099 HIGC
          </div>
          <ul class="list-disc flex list-inside text-sm space-x-3 text-gray-400">
            <li><router-link to="/terms-and-conditions"> Terms </router-link></li>
            <li><router-link to="/privacy-policy"> Privacy </router-link></li>
          </ul>
        </div>
        <div class="flex space-x-4 mb-2">
          <div class="cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6303 15.3334L6.9307 10.0601L2.29924 15.3334H0.339844L6.06139 8.82081L0.339844 0.666748H5.37047L8.85732 5.63676L13.2262 0.666748H15.1856L9.72954 6.87774L15.6609 15.3334H10.6303ZM12.8123 13.8468H11.4932L3.14541 2.15341H4.46474L7.80808 6.83552L8.38623 7.64799L12.8123 13.8468Z"
                fill="#5E5E5E"
              />
            </svg>
          </div>
          <div class="cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_28_994)">
                <path
                  d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                  fill="#5E5E5E"
                />
              </g>
              <defs>
                <clipPath id="clip0_28_994">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_28_995)">
                <path
                  d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64063 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98437 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1313 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9063 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60312 1.49375 4.7625C1.52813 3.98125 1.65938 3.55938 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35938C2.64688 2.07813 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82813 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6563C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6563C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7313 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55938 15.9438 4.70625C15.9063 3.85625 15.7688 3.27188 15.5719 2.76563C15.375 2.23438 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z"
                  fill="#5E5E5E"
                />
                <path
                  d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z"
                  fill="#5E5E5E"
                />
                <path
                  d="M13.2312 3.72818C13.2312 4.25943 12.8 4.68755 12.2719 4.68755C11.7406 4.68755 11.3125 4.2563 11.3125 3.72818C11.3125 3.19692 11.7438 2.7688 12.2719 2.7688C12.8 2.7688 13.2312 3.20005 13.2312 3.72818Z"
                  fill="#5E5E5E"
                />
              </g>
              <defs>
                <clipPath id="clip0_28_995">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85937 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344V13.6344Z"
                fill="#5E5E5E"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "./base/BaseButton.vue";
const form = ref({
  email: "",
});

const handleSubmit = () => {
  console.log("Form Submitted:", form.value);
  alert("Message sent successfully!");
};
</script>
