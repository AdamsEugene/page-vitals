<template>
  <svg
    v-if="checked"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M3.7998 14C3.7998 8.36675 8.3665 3.80005 13.9998 3.80005C19.6331 3.80005 24.1998 8.36675 24.1998 14C24.1998 19.6334 19.6331 24.2001 13.9998 24.2001C8.3665 24.2001 3.7998 19.6334 3.7998 14ZM20.5969 12.8971C21.5341 11.9598 21.5341 10.4403 20.5969 9.50299C19.6596 8.56573 18.14 8.56573 17.2027 9.503L12.5998 14.1059L11.4969 13.003C10.5596 12.0657 9.04001 12.0657 8.10275 13.003C7.16549 13.9403 7.16549 15.4598 8.10275 16.3971L10.9028 19.1971C11.84 20.1344 13.3596 20.1344 14.2969 19.1971L20.5969 12.8971Z"
      fill="#12904E"
      stroke="#12904E"
      stroke-width="2"
    />
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <circle cx="14" cy="14" r="10" stroke="#B3B7BC" stroke-width="2" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ props: ["checked"] });
</script>
