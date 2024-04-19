<template>
  <svg
    v-if="error"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
      fill="#B71E2D"
    />
    <path
      d="M10 6L6 10"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L10 10"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M14.4876 12L9.15426 2.66665C9.03797 2.46146 8.86933 2.29078 8.66555 2.17203C8.46176 2.05329 8.23012 1.99072 7.99426 1.99072C7.7584 1.99072 7.52677 2.05329 7.32298 2.17203C7.11919 2.29078 6.95055 2.46146 6.83426 2.66665L1.50093 12C1.38338 12.2036 1.32175 12.4346 1.32227 12.6697C1.32279 12.9047 1.38545 13.1355 1.50389 13.3385C1.62234 13.5416 1.79236 13.7097 1.99673 13.8259C2.20109 13.942 2.43253 14.0021 2.6676 14H13.3343C13.5682 13.9997 13.7979 13.938 14.0005 13.8208C14.203 13.7037 14.3711 13.5354 14.4879 13.3327C14.6048 13.1301 14.6663 12.9002 14.6662 12.6663C14.6662 12.4324 14.6046 12.2026 14.4876 12Z"
      fill="#F48C24"
    />
    <path
      d="M8 6V8.66667"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 11.3333H8.00667"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ props: ["error"] });
</script>
