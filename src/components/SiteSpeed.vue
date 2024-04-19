<template>
  <div id="pv_site_speed_wrapper">
    <div class="pv_site_speed_header">
      <p class="pv_site_speed_header_text">Site Speed</p>
      <div class="pv_sp_buttons">
        <div class="pv_sp_tabs">
          <div
            v-for="tab in mainTab"
            class="pv_sp_tab"
            :key="tab"
            @click="active = tab"
          >
            <mobile-svg v-if="tab === 'Mobile'" :active="tab === active" />
            <desktop-svg v-else :active="tab === active" />
            <p
              class="pv_sp_tab_text"
              :class="{ selected_active: tab === active }"
            >
              {{ tab }}
            </p>
          </div>
        </div>
        <div class="pv_sp_website">
          <p class="pv_sp_website_text">https://www.cadenlane.com</p>
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#34404B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
        </div>
      </div>
    </div>
    <div class="pv_site_speed_content">
      <div class="pv_site_speed_content_chart">
        <div class="pv_site_speed_content_chart_w">
          <div class="pv_site_speed_content_chart_value">
            <p class="pv_c_v">1.24s</p>
          </div>
          <div class="pv_site_speed_chart_w">
            <SpeedChart />
          </div>
        </div>
      </div>
      <div class="pv_site_speed_content_metrics">
        <div class="pv_m_tabs">
          <div class="pv_m_tabs_content">
            <p
              v-for="tab in siteSpeedTabs"
              class="pv_m_tab"
              :class="{ selected_active: tab === activeTab }"
              :key="tab"
              @click="activeTab = tab"
            >
              {{ tab }}
            </p>
          </div>
        </div>
        <ul class="pv_sp_list_wrapper">
          <div v-if="activeTab === 'Breakdown'">
            <li
              class="pv_sp_list"
              v-for="siteSpeed in siteSpeedData"
              :key="siteSpeed.text"
            >
              <p class="pv_sp_list_text">{{ siteSpeed.text }}</p>
              <div
                class="pv_sp_list_value_w"
                :style="{ background: siteSpeed.bg }"
              >
                <p class="pv_sp_list_value" :style="{ color: siteSpeed.color }">
                  {{ siteSpeed.value }}
                </p>
              </div>
            </li>
          </div>
          <div v-else>
            <li
              class="pv_sp_list recommendations"
              v-for="recommendation in recommendations"
              :key="recommendation"
            >
              <p class="pv_sp_list_text">{{ recommendation }}</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MobileSvg from "./MobileSvg.vue";
import DesktopSvg from "./DesktopSvg.vue";
import SpeedChart from "./SpeedChart.vue";

const siteSpeedData = [
  {
    text: "Largest Contentful Paint (LCP)",
    value: "4.3 s",
    bg: "gba(183, 30, 45, 0.12)",
    color: "#B71E2D",
  },
  {
    text: "Interaction to Next Paint (INP)",
    value: "338 ms",
    bg: "#FDF1E3",
    color: "#CE7422",
  },
  {
    text: "Cumulative Layout Shift (CLS)",
    value: "0",
    bg: "#D7FCD2",
    color: "#0B7448",
  },
  {
    text: "First Contentful Paint (ECP)",
    value: "1.7 s",
    bg: "#D7FCD2",
    color: "#0B7448",
  },
  {
    text: "First Input Delay (FID)",
    value: "30 ms",
    bg: "#D7FCD2",
    color: "#0B7448",
  },
  {
    text: "Time to First Byte (TTFB)",
    value: "0.5 s",
    bg: "#D7FCD2",
    color: "#0B7448",
  },
];

const recommendations = [
  "Compress and resize images to reduce their file size without sacrificing quality.",
  "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity.",
  "Eliminate render-blocking resources.",
];

const mainTab = ["Mobile", "Desktop"];

const siteSpeedTabs = ["Breakdown", "Recommendations"];

export default defineComponent({
  props: [],
  components: { MobileSvg, DesktopSvg, SpeedChart },
  data() {
    return {
      siteSpeedData,
      recommendations,
      siteSpeedTabs,
      activeTab: "Breakdown",
      mainTab,
      active: "Mobile",
    };
  },
});
</script>

<style>
#pv_site_speed_wrapper {
  display: flex;
  min-height: 438px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid #e6e7e8;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);

  p {
    padding: 0;
    margin: 0;
  }

  .pv_site_speed_header {
    display: flex;
    width: -webkit-fill-available;
    /* height: 72px; */
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px 8px 0px 0px;
    border-bottom: 1px solid #e6e7e8;

    .pv_site_speed_header_text {
      color: #34404b;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px;
      min-width: 118px;
      flex-shrink: 0;
    }

    .pv_sp_buttons {
      display: flex;
      align-items: center;
      gap: 24px;
      flex-shrink: 0;

      .pv_sp_tabs {
        display: flex;
        align-items: center;
        gap: 24px;

        .pv_sp_tab {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          cursor: pointer;

          .pv_sp_tab_text {
            color: #34404b;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 121.906%;

            &.selected_active {
              color: #12904e !important;
            }
          }
        }
      }

      .pv_sp_website {
        display: flex;
        /* width: 100%; */
        padding: 12px;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid #cccfd2;
        background: #fff;
        box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);

        .pv_sp_website_text {
          color: #34404b;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px;
        }
      }
    }
  }

  .pv_site_speed_content {
    display: flex;
    width: 100%;
    align-items: center;
    flex: 1 0 0;
    border-radius: 0px 0px 8px 8px;

    .pv_site_speed_content_chart {
      flex: 1 0 0;
      align-self: stretch;

      .pv_site_speed_content_chart_w {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        height: 100%;

        .pv_site_speed_content_chart_value {
          display: inline-flex;
          width: max-content;
          padding: 8px 12px;
          align-items: flex-start;
          gap: 8px;
          border-radius: 11.775px;
          background: #e2fdec;
          margin-top: 20px;

          .pv_c_v {
            color: #008160 !important;
            font-size: 36px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
        }

        .pv_site_speed_chart_w {
          width: 100%;
          margin-bottom: 56px;
        }
      }
    }

    .pv_site_speed_content_metrics {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1 0 0;
      align-self: stretch;
      border-radius: 0px 0px 8px 0px;
      border-left: 1px solid #e6e7e8;

      .pv_m_tabs {
        display: flex;
        padding: 12px 16px;
        align-items: flex-start;
        align-self: stretch;
        border: 1px solid #e6e7e8;

        .pv_m_tabs_content {
          display: flex;
          align-items: flex-start;
          gap: 12px;

          .pv_m_tab {
            color: #677078;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px;
            cursor: pointer;
            transition: all 0.3s ease-in-outs;

            &.selected_active {
              color: #0b7448 !important;
              text-decoration-line: underline;
            }
          }
        }
      }

      .pv_sp_list_wrapper {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
        margin: 0;
        padding: 0;

        .pv_sp_list {
          &.recommendations {
            display: flex;
            padding: 16px;
            align-items: center;
            gap: var(--vertical-padding-med, 20px);
            align-self: stretch;
            background: var(--Grey-White, #fff);

            .pv_sp_list_text {
              line-height: 24px; /* 171.429% */
            }
          }
          &:not(:first-child) {
            border-top: 1px solid #e6e7e8;
          }
          &:last-child {
            border-bottom: 1px solid #e6e7e8;
          }

          display: flex;
          padding: 12px 16px;
          align-items: center;
          gap: 16px;
          flex: 1 0 0;
          align-self: stretch;

          .pv_sp_list_text {
            flex: 1 0 0;
            color: var(--Grey-800, #34404b);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px; /* 142.857% */
          }

          .pv_sp_list_value_w {
            display: flex;
            width: 72px;
            padding: var(--corner-med, 8px) 10px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 4px;
            background: rgba(183, 30, 45, 0.12);

            .pv_sp_list_value {
              color: var(--Error-04-Dark, #b71e2d);
              text-align: right;
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: 14px; /* 100% */
            }
          }
        }
      }
    }
  }
}
</style>
