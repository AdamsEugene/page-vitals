<template>
  <svg
    v-if="active"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M19 4.5H5C3.89543 4.5 3 5.39543 3 6.5V14.5C3 15.6046 3.89543 16.5 5 16.5H19C20.1046 16.5 21 15.6046 21 14.5V6.5C21 5.39543 20.1046 4.5 19 4.5Z"
      stroke="#12904E"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 20.5H22"
      stroke="#12904E"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M19 4.5H5C3.89543 4.5 3 5.39543 3 6.5V14.5C3 15.6046 3.89543 16.5 5 16.5H19C20.1046 16.5 21 15.6046 21 14.5V6.5C21 5.39543 20.1046 4.5 19 4.5Z"
      stroke="#34404B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 20.5H22"
      stroke="#34404B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ props: ["active"] });
</script>
