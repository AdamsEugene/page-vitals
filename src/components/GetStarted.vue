<template>
  <div class="pv_body">
    <div id="bg_svg">
      <img src="../assets/welcome.svg" alt="" width="100%" height="100%" />
    </div>
    <section v-if="gettingStarted">
      <steppers-component :closeGestated="closeGestated" />
    </section>
    <section v-else>
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
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <div></div>
          <svg
            @click="closeGestated()"
            style="position: relative; top: 2rem; right: 2rem"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 6L18 18"
              stroke="#1A2835"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M18 6L6 18"
              stroke="#1A2835"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </header>
      <section class="page_vitals_get_started">
        <div id="page_vitals_get_started_cover_div">
          <h5 id="page_vitals_get_started_cover_heading">Initial Diagnostic</h5>
          <p id="page_vitals_get_started_cover_content">
            While waiting for UX observations from your heatmap data, check out
            these initial insights to get started optimizing your site
          </p>

          <div id="page_vitals_stepper_cover">
            <div id="page_vitails_mk-stepper">
              <details class="mk-stepper-step">
                <summary class="mk-stepper-step__header">
                  <span class="mk-stepper-step__icon"></span
                  ><span class="mk-stepper-step__label">Copy Analysis</span>
                </summary>
              </details>
              <details class="mk-stepper-step">
                <summary class="mk-stepper-step__header">
                  <span class="mk-stepper-step__icon"></span
                  ><span class="mk-stepper-step__label">Site Speed</span>
                </summary>
              </details>
              <details class="mk-stepper-step">
                <summary class="mk-stepper-step__header">
                  <span class="mk-stepper-step__icon"></span
                  ><span class="mk-stepper-step__label">Error Messages</span>
                </summary>
              </details>
            </div>
            <button
              id="page_vital_get_started_button"
              @click="gettingStarted = true"
            >
              Get Started
            </button>

            <p id="page_vitals_return_text" @click="closeGestated()">
              Return to Dashboard
            </p>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SteppersComponent from "./SteppersComponent.vue";
import BgImage from "./BgImage.vue";

export default defineComponent({
  props: ["closeGestated"],
  components: { SteppersComponent, BgImage },
  data() {
    return {
      gettingStarted: false,
    };
  },
});
</script>

<style scoped>
.pv_body {
  /* background-image: url(../src/assets/images/bg.png) !important; */
  background-size: 100% 100% !important;
  background-size: 100% 100%;
  height: 100vh;
  overflow: hidden !important;
  padding: 0px;
  margin: 0px;
  font-family: "Montserrat", sans-serif !important;
}

#bg_svg {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    object-fit: cover;
  }

  svg {
    height: 100% !important;
    width: 100%;
  }
}

.page_vitals_get_started {
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#page_vitals_get_started_cover_div {
  width: 440px;
}

#page_vitals_get_started_cover_heading {
  color: var(--Grey-White, #fff);
  text-align: center;
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 30px;
}

#page_vitals_get_started_cover_content {
  color: var(--Grey-100, #f6f6f6);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

#page_vitals_stepper_cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#page_vitails_mk-stepper {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mk-stepper-step {
  position: relative;
}
.mk-stepper-step:not(:last-of-type)::before {
  content: "";
  display: block;
  height: calc(100% - 32px);
  width: 2px;
  position: absolute;
  left: 34px;
  top: 52px;
  background-color: #fff;
  z-index: 1;
}
.mk-stepper-step__header {
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-right: 48px;
  padding-bottom: 16px;
  padding-left: 24px;
  outline: none;
  cursor: pointer;
}
.mk-stepper-step__header::-webkit-details-marker {
  display: none;
}
.mk-stepper-step__icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  line-height: 24px;
  font-size: 12px;
  text-align: center;
  border-radius: 50%;
  border: 2px solid #f6f6f6;
  color: #fff;
}
.mk-stepper-step__label {
  font-size: 14px;
  font-weight: 400;
  color: #f6f6f6;
}

.mk-stepper-step--active .mk-stepper-step__label {
  font-weight: 500;
}

#page_vital_get_started_button {
  margin-top: 30px;
  display: flex;
  width: 320px;
  padding: 16px 24px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid white;
  color: var(--Success-05-Darker, #0b7448);
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  cursor: pointer;
}

#page_vitals_return_text {
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #f6f6f6;
  cursor: pointer;
}

.page_vitals_header {
  background-color: #fff;
  padding: 0px;
  margin: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 111;
}
</style>
