<template>
  <header>
    <section class="page_vitals_header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="53"
        viewBox="0 0 53 53"
        fill="none"
      >
        <path
          d="M39.75 31.2739V31.359C39.7394 33.1246 39.3522 34.8692 38.6125 36.4842C36.599 40.8468 31.6877 44.0048 26.6683 44.1667C26.546 44.1667 26.4124 44.1667 26.2759 44.1667C24.9408 44.1629 23.6143 43.9612 22.3428 43.5685C16.5357 41.7796 14.1355 36.4705 14.1355 36.4705C13.7971 35.7447 13.5517 34.9818 13.4046 34.1987C12.5514 29.5947 15.4806 25.8057 16.0664 25.0484C16.7598 24.1542 17.564 23.3452 18.461 22.6394L20.0734 24.8838L18.751 26.2556C18.3756 26.7056 16.0067 29.6386 16.7603 33.4963C17.6505 38.1058 22.2205 40.0813 22.9798 40.3309C23.1732 40.3968 23.378 40.4599 23.378 40.4599C24.4068 40.7768 25.4834 40.9252 26.5631 40.8989C30.3369 40.7782 34.0253 38.4131 35.5326 35.1371C36.0838 33.9073 36.3739 32.5835 36.3857 31.2437C36.4151 30.2872 36.2688 29.3332 35.9535 28.4259C35.7961 27.9942 35.6001 27.5765 35.3676 27.1775C34.2955 25.3145 28.5424 18.3811 27.0039 16.2685L25.1582 18.9079L30.0354 24.7877C30.4023 25.2679 30.7549 25.7727 31.082 26.2858C31.81 27.4245 32.3873 28.3244 32.7285 29.5152C33.0703 30.6069 33.1299 31.7627 32.902 32.8817C32.3332 35.2111 29.8477 37.6778 26.6456 37.7765C25.748 37.7939 24.8562 37.6342 24.0249 37.3073C23.1935 36.9803 22.4402 36.493 21.811 35.8751C21.3105 35.4032 19.3795 33.6417 19.6269 31.0078C19.8345 28.7716 21.4726 27.4217 21.8395 27.1336L23.6197 29.3862C23.0686 29.9257 22.7374 30.6387 22.6869 31.3946C22.6044 32.8872 23.7448 33.8311 23.978 34.0149C24.4207 34.3445 24.9342 34.5744 25.4808 34.6879C26.0275 34.8013 26.5935 34.7954 27.1375 34.6706C27.8902 34.4557 28.553 34.0163 29.0307 33.4154C29.5084 32.8146 29.7765 32.0831 29.7965 31.326C29.8012 30.6827 29.62 30.0509 29.2733 29.5015L21.1541 18.971L21.5238 18.4634C23.0822 16.3233 24.6406 14.1805 26.1991 12.0349L26.9214 11.0417L27.7035 11.9937C28.1585 12.5425 28.6192 13.1187 29.0657 13.6839C31.4232 16.6636 36.0331 22.0632 38.1091 25.2459L38.1347 25.2843C39.1815 27.12 39.7367 29.1788 39.75 31.2739Z"
          fill="#00C191"
        />
      </svg>
      <span class="logo">Heatmap.com</span>
    </section>
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <div></div>
      <button class="page_vitals_exit_button" @click="closeGestated()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.333 14.1667L17.4997 10L13.333 5.83333"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 10H7.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span style="margin-left: 10px">Exit to Dashboard</span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["closeGestated"],
  components: {},
  data() {
    return {};
  },
});
</script>

<style>
.page_vitals_header {
  background-color: #fff;
  padding: 0px;
  margin: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 111;
  /* margin-bottom: 50px; */
}

.page_vitals_exit_button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--corner-med, 8px);
  padding: 16px 20px;
  margin: 16px;
  background: var(--Primary-04-Dark, #016f52);
  /* Shadows/Small */
  box-shadow: 0px 2px 6px 0px rgba(26, 40, 53, 0.08);
  color: var(--Grey-White, var(--Grey-White, #fff));
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  border: none;
  cursor: pointer;

  svg {
    margin-bottom: auto;
  }
}
</style>
