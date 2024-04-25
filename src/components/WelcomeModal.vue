<template>
  <div id="pv_w_m">
    <div class="pv_v_m_c">
      <div id="bg_svg_s">
        <img src="../assets/images/bg.png" alt="" width="100%" height="100%" />
      </div>
      <div class="pv_c">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 6L18 18"
            stroke="#1A2835"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M18 6L6 18"
            stroke="#1A2835"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="pv_w_c">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="81"
          viewBox="0 0 80 81"
          fill="none"
        >
          <path
            d="M19.3332 38.1667L6.6665 73.8333L42.3332 61.2"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3335 10.5H13.3668"
            stroke="#91D1F3"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M73.3335 27.1667H73.3668"
            stroke="#91D1F3"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M50 7.16666H50.0333"
            stroke="#91D1F3"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M73.3335 67.1667H73.3668"
            stroke="#91D1F3"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M73.3332 7.16666L65.8665 9.66666C63.7411 10.3746 61.9276 11.7988 60.7359 13.6957C59.5442 15.5927 59.0484 17.8446 59.3332 20.0667C59.6665 22.9333 57.4332 25.5 54.4998 25.5H53.2332C50.3665 25.5 47.8998 27.5 47.3665 30.3L46.6665 33.8333"
            stroke="#EEAC4D"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M73.3332 43.8333L70.5998 42.7333C67.7332 41.6 64.5332 43.4 63.9998 46.4333C63.6332 48.7667 61.5998 50.5 59.2332 50.5H56.6665"
            stroke="#EEAC4D"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36.6667 7.16666L37.7667 9.89999C38.9 12.7667 37.1 15.9667 34.0667 16.5C31.7333 16.8333 30 18.9 30 21.2667V23.8333"
            stroke="#EEAC4D"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36.6667 43.8334C43.1001 50.2667 46.1001 57.7334 43.3334 60.5C40.5667 63.2667 33.1001 60.2667 26.6667 53.8334C20.2334 47.4 17.2334 39.9334 20.0001 37.1667C22.7667 34.4 30.2334 37.4 36.6667 43.8334Z"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="pv_w_c_c">
          <p class="pv_w_main">Welcome to Heatmap!</p>
          <p class="pv_w_sub">
            We are collecting your data to provide you with AI Insights. This
            can take up to 1 week.
          </p>
        </div>
      </div>
      <div class="pv_m_cta_w">
        <div class="pv_m_cta">
          <div class="pv_m_cta_b">
            <p class="pv_m_cta_b_t">Review Initial Diagnostic</p>
          </div>
        </div>
        <div class="pv_cta_b">
          <p class="pv_cta_b_t">Go to Dashboard</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ props: ["error"] });
</script>

<style>
#pv_w_m {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background: rgba(52, 64, 75, 0.4);
  z-index: 999;

  p,
  h1 {
    margin: 0;
    padding: 0;
  }

  .pv_v_m_c {
    display: flex;
    position: relative;
    width: 800px;
    height: 800px;
    padding: var(--vertical-padding-lg, 24px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-shrink: 0;
    border-radius: var(--corner-med, 8px);
    background: #008160;
    box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
    overflow: hidden;

    .pv_c {
      position: absolute;
      right: 24px;
      top: 24px;
    }

    #bg_svg_s {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;

      img {
        object-fit: cover;
      }
    }

    .pv_w_c {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--vertical-padding-lg, 24px);
      z-index: 1;

      .pv_w_c_c {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        .pv_w_main {
          color: var(--Grey-White, #fff) !important;
          text-align: center;
          font-size: 42px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .pv_w_sub {
          color: var(--Grey-White, #fff) !important;
          text-align: center;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          max-width: 440px;
        }
      }
    }

    .pv_m_cta_w {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--corner-med, 8px);
      z-index: 1;

      .pv_m_cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--corner-med, 8px);

        .pv_m_cta_b {
          display: flex;
          width: 320px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 10px;
          background: var(--Grey-White, #fff);
          cursor: pointer;

          .pv_m_cta_b_t {
            color: var(--Success-04-Dark, #12904e) !important;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 28px; /* 175% */
          }
        }
      }

      .pv_cta_b {
        display: flex;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 10px;
        cursor: pointer;

        .pv_cta_b_t {
          color: var(--Grey-White, #fff) !important;
          font-family: Montserrat;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
