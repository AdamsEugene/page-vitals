<template>
  <div id="pv_stuff">
    <get-started v-if="showGetStarted" :closeGestated="closeGestated" />
    <div v-else class="pv_gs_banner">
      <div class="pv_close_b">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 5L15 15"
            stroke="#677078"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M15 5L5 15"
            stroke="#677078"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="pv_left_image">
        <div class="pv_absolut_image_l">
          <MarskImage />
        </div>
      </div>
      <div class="pv_left_part">
        <h3 class="pv_b_header">Getting Started with Heatmap</h3>
      </div>
      <div class="pv_right_part">
        <div class="pv_b_content">
          <div class="pv_b_content_h">
            <check-svg :checked="true" />
            <p class="pv_b_content_h_t">Add Site Snippets</p>
          </div>
          <p class="pv_b_content_t">
            Copy the Heatmap.com code into the header and purchase pages
          </p>
        </div>
        <div class="pv_b_content">
          <div class="pv_b_content_h">
            <check-svg />
            <p class="pv_b_content_h_t">Review Initial Diagnostic</p>
          </div>
          <p class="pv_b_content_t">
            Get initial insights about your website with our AI-generated
            diagnostic
          </p>
          <p class="pv_b_content_l" @click="showGetStarted = true">
            Get Started
          </p>
        </div>
        <div class="pv_b_content">
          <div class="pv_b_content_h">
            <check-svg />
            <p class="pv_b_content_h_t">Set up notifications</p>
          </div>
          <p class="pv_b_content_t">
            Receive email updates for when your AI insights are ready!
          </p>
          <p class="pv_b_content_l">Set it up</p>
        </div>
      </div>
    </div>
    <SiteSpeed />
    <ErrorMsg />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckSvg from "./CheckSvg.vue";
import GetStarted from "./GetStarted.vue";
import MarskImage from "./MarksImage.vue";
import SiteSpeed from "./SiteSpeed.vue";
import ErrorMsg from "./ErrorMsg.vue";

export default defineComponent({
  data() {
    return {
      showGetStarted: false,
    };
  },
  components: { CheckSvg, GetStarted, MarskImage, SiteSpeed, ErrorMsg },
  methods: {
    closeGestated() {
      this.showGetStarted = false;
    },
  },
});
</script>

<style>
#pv_stuff {
  svg {
    margin-left: inherit;
    margin-bottom: 0;
  }
}

.pv_gs_banner {
  display: flex;
  position: relative;
  /* width: 100%; */
  padding: 40px 56px;
  align-items: center;
  gap: 88px;
  border-radius: 8px;
  border: 1px solid #e6e7e8;
  background: #f6f6f6;

  p,
  h3 {
    padding: 0;
    margin: 0;
  }

  .pv_close_b {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }

  .pv_left_image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    .pv_absolut_image_l {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .pv_left_part {
    .pv_b_header {
      width: 240px;
      flex-shrink: 0;
      color: #34404b;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
    }
  }

  .pv_right_part {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 0 0;

    .pv_b_content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;

      .pv_b_content_h {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;

        .pv_b_content_h_t {
          color: #34404b;
          text-align: center;
          font-family: Montserrat;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px; /* 128.571% */
        }
      }

      .pv_b_content_t {
        color: #34404b;
        max-width: 212px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }

      .pv_b_content_l {
        color: #12904e;
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px; /* 173.333% */
        text-decoration-line: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
