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
      d="M17 2.5H7C5.89543 2.5 5 3.39543 5 4.5V20.5C5 21.6046 5.89543 22.5 7 22.5H17C18.1046 22.5 19 21.6046 19 20.5V4.5C19 3.39543 18.1046 2.5 17 2.5Z"
      stroke="#12904E"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18.5H12.01"
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
      d="M17 2.5H7C5.89543 2.5 5 3.39543 5 4.5V20.5C5 21.6046 5.89543 22.5 7 22.5H17C18.1046 22.5 19 21.6046 19 20.5V4.5C19 3.39543 18.1046 2.5 17 2.5Z"
      stroke="#34404B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18.5H12.01"
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
