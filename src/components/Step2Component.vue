<template>
  <div class="page_vitals_step1_content_wrapper">
    <!-- ################## Header Wrapper ###################### -->
    <section>
      <div class="page_vitals_top_header_wrapper">
        <div style="margin-top: 5px">
          <div class="tooltip">
            <a class="page_vitals_link"
              >www.cadenlane.org
              <span
                tooltip="Insights for other pages in your site will become available on the dashboard"
              >
                <svg
                  style="margin-left: 6px; width: 14px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1527_1282)">
                    <path
                      d="M7.00033 12.8333C10.222 12.8333 12.8337 10.2217 12.8337 7C12.8337 3.77834 10.222 1.16667 7.00033 1.16667C3.77866 1.16667 1.16699 3.77834 1.16699 7C1.16699 10.2217 3.77866 12.8333 7.00033 12.8333Z"
                      fill="#00936F"
                      stroke="#00936F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 9.33333V7"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 4.66667H7.00667"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1527_1282">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </a>
          </div>
          <h2 class="page_vitals_heading">Site Speed</h2>
        </div>
        <div id="page_vitals_tab_button_wrapper">
          <button
            class="page_vitals_tab_button page_vitals_tab_button_left"
            :class="{ active: activeTab === 'mobile' }"
            @click="changeTab('mobile')"
          >
            <svg
              class="page_vitals_tab_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                :stroke="activeTab === 'mobile' ? 'white' : 'black'"
                stroke-width="1.5"
                d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                :stroke="activeTab === 'mobile' ? 'white' : 'black'"
                stroke-width="1.5"
                d="M12 18H12.01"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="page_vitals_tab_description">Mobile</p>
          </button>
          <button
            class="page_vitals_tab_button page_vitals_tab_button_right"
            :class="{ active: activeTab === 'desktop' }"
            @click="changeTab('desktop')"
          >
            <svg
              class="page_vitals_tab_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                :stroke="activeTab === 'desktop' ? 'white' : 'black'"
                stroke-width="1.5"
                d="M19 4.5H5C3.89543 4.5 3 5.39543 3 6.5V14.5C3 15.6046 3.89543 16.5 5 16.5H19C20.1046 16.5 21 15.6046 21 14.5V6.5C21 5.39543 20.1046 4.5 19 4.5Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                :stroke="activeTab === 'desktop' ? 'white' : 'black'"
                stroke-width="1.5"
                d="M2 20.5H22"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="page_vitals_tab_description">Desktop</p>
          </button>
        </div>
      </div>
    </section>

    <!--################## Mobile Section Tab ######################-->
    <div class="page_vitals_tab1_content" v-show="activeTab === 'mobile'">
      <!-- section 1 (mobile recommendations) -->
      <div class="page_vitals_tab1_content_header_wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.833 2.5V5.83333"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.833 14.1667V17.5"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.167 4.16666H17.5003"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.167 15.8333H17.5003"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="page_vitals_tab1_content_header"
          >Mobile Recommendations</span
        >
      </div>

      <div class="page_vitals_info_wrapper">
        <p class="page_vitals_info_text">
          To improve your site speed, consider the following:
        </p>

        <div class="page_vitals_tab1_content_header_wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_1278_5460)">
              <path
                d="M16.667 6.66666H8.33366C7.41318 6.66666 6.66699 7.41285 6.66699 8.33332V16.6667C6.66699 17.5871 7.41318 18.3333 8.33366 18.3333H16.667C17.5875 18.3333 18.3337 17.5871 18.3337 16.6667V8.33332C18.3337 7.41285 17.5875 6.66666 16.667 6.66666Z"
                stroke="#016F52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33366 13.3333C2.41699 13.3333 1.66699 12.5833 1.66699 11.6667V3.33332C1.66699 2.41666 2.41699 1.66666 3.33366 1.66666H11.667C12.5837 1.66666 13.3337 2.41666 13.3337 3.33332"
                stroke="#016F52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1278_5460">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span
            id="page_vital_copy_text"
            class="page_vitals_tab1_content_header"
            >Copy All</span
          >
        </div>
      </div>

      <!-- recommendations list -->
      <div>
        <div
          class="page_vitals_button_wrapper page_vitals_tab1_content_wrapper"
        >
          <p class="page_vitals_content_ul_heading">
            Compress and resize images to reduce their file size without
            sacrificing quality.
          </p>
        </div>
        <div
          class="page_vitals_button_wrapper page_vitals_tab1_content_wrapper page_vitals_tab1_content_margin"
        >
          <p class="page_vitals_content_ul_heading">
            Reduce unused JavaScript and defer loading scripts until they are
            required to decrease bytes consumed by network activity.
          </p>
        </div>
        <div
          class="page_vitals_button_wrapper page_vitals_tab1_content_wrapper page_vitals_tab1_content_margin"
        >
          <p class="page_vitals_content_ul_heading">
            Eliminate render-blocking resources.
          </p>
        </div>
      </div>

      <!-- section 2 Metric Breakdown -->
      <section>
        <div class="page_vitals_tab1_content_header_wrapper metrics_breakdown">
          <span class="page_vitals_tab1_content_header">Metric Breakdown</span>
        </div>

        <div class="page_vitals_grid-container">
          <div class="page_vitals_grid-item">
            Largest Contentful Paint (LCP)
            <button class="page_vitals_metrics_numbers page_vitals_color_red">
              4.3 s
            </button>
          </div>
          <div class="page_vitals_grid-item">
            Interaction to Next Paint (INP)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_orange"
            >
              338 ms
            </button>
          </div>
          <div class="page_vitals_grid-item">
            Cumulative Layout Shift (CLS)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_lightgreen"
            >
              0
            </button>
          </div>
          <div class="page_vitals_grid-item">
            First Contentful Paint (ECP)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_lightgreen"
            >
              1.7 s
            </button>
          </div>
          <div class="page_vitals_grid-item">
            First Input Delay (FID)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_lightgreen"
            >
              30 ms
            </button>
          </div>
          <div class="page_vitals_grid-item">
            Time to First Byte (TTFB)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_lightgreen"
            >
              0.5 s
            </button>
          </div>
        </div>
      </section>
    </div>

    <!--################## Desktop Section Tab ####################-->
    <div class="page_vitals_tab2_content" v-show="activeTab === 'desktop'">
      <!-- section 1 (desktop recommendations) -->
      <div class="page_vitals_tab1_content_header_wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.833 2.5V5.83333"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.833 14.1667V17.5"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.167 4.16666H17.5003"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.167 15.8333H17.5003"
            stroke="#016F52"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="page_vitals_tab1_content_header"
          >Desktop Recommendations</span
        >
      </div>

      <div class="page_vitals_info_wrapper">
        <p class="page_vitals_info_text">
          To improve your site speed, consider the following:
        </p>

        <div class="page_vitals_tab1_content_header_wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_1278_5460)">
              <path
                d="M16.667 6.66666H8.33366C7.41318 6.66666 6.66699 7.41285 6.66699 8.33332V16.6667C6.66699 17.5871 7.41318 18.3333 8.33366 18.3333H16.667C17.5875 18.3333 18.3337 17.5871 18.3337 16.6667V8.33332C18.3337 7.41285 17.5875 6.66666 16.667 6.66666Z"
                stroke="#016F52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33366 13.3333C2.41699 13.3333 1.66699 12.5833 1.66699 11.6667V3.33332C1.66699 2.41666 2.41699 1.66666 3.33366 1.66666H11.667C12.5837 1.66666 13.3337 2.41666 13.3337 3.33332"
                stroke="#016F52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1278_5460">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span
            id="page_vital_copy_text"
            class="page_vitals_tab1_content_header"
            >Copy All</span
          >
        </div>
      </div>

      <!-- recommendations list -->
      <div>
        <div
          class="page_vitals_button_wrapper page_vitals_tab1_content_wrapper page_vitals_tab1_content_margin"
        >
          <p class="page_vitals_content_ul_heading">
            Eliminate render-blocking resources.
          </p>
        </div>
        <div
          class="page_vitals_button_wrapper page_vitals_tab1_content_wrapper"
        >
          <p class="page_vitals_content_ul_heading">
            Compress and resize images to reduce their file size without
            sacrificing quality.
          </p>
        </div>
        <div
          class="page_vitals_button_wrapper page_vitals_tab1_content_wrapper page_vitals_tab1_content_margin"
        >
          <p class="page_vitals_content_ul_heading">
            Reduce unused JavaScript and defer loading scripts until they are
            required to decrease bytes consumed by network activity.
          </p>
        </div>
      </div>

      <!-- section 2 Metric Breakdown -->
      <section>
        <div class="page_vitals_tab1_content_header_wrapper metrics_breakdown">
          <span class="page_vitals_tab1_content_header">Metric Breakdown</span>
        </div>

        <div class="page_vitals_grid-container">
          <div class="page_vitals_grid-item">
            First Contentful Paint (ECP)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_lightgreen"
            >
              1.7 s
            </button>
          </div>
          <div class="page_vitals_grid-item">
            First Input Delay (FID)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_lightgreen"
            >
              30 ms
            </button>
          </div>
          <div class="page_vitals_grid-item">
            Time to First Byte (TTFB)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_lightgreen"
            >
              0.5 s
            </button>
          </div>
          <div class="page_vitals_grid-item">
            Largest Contentful Paint (LCP)
            <button class="page_vitals_metrics_numbers page_vitals_color_red">
              4.3 s
            </button>
          </div>
          <div class="page_vitals_grid-item">
            Interaction to Next Paint (INP)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_orange"
            >
              338 ms
            </button>
          </div>
          <div class="page_vitals_grid-item">
            Cumulative Layout Shift (CLS)
            <button
              class="page_vitals_metrics_numbers page_vitals_color_lightgreen"
            >
              0
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeTab: "mobile",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
});
</script>

<style scoped>
.page_vitals_step1_content_wrapper {
  display: flex;
  flex-direction: column;
  height: 430px;
}
.page_vitals_tab1_content,
.page_vitals_tab2_content {
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.page_vitals_tab1_content::-webkit-scrollbar,
.page_vitals_tab2_content::-webkit-scrollbar {
  display: none;
}

.page_vitals_button_wrapper {
  padding: 0px 15px;
  margin-top: auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  background: var(--Grey-White, #fff);
}

.page_vitals_link {
  padding: 0px;
  margin: 0px;
  color: var(--Primary-03-Main, #00936f);
  font-size: 13px;
  font-weight: 600;
  display: flex;
  justify-content: center;

  svg {
    margin-bottom: auto;
  }
}

.page_vitals_heading {
  padding: 0px;
  margin: 5px 0px 40px 0px;
  color: var(--Grey-800, var(--Grey-800, #34404b));
  font-size: 22px;
  font-weight: 600;
}

.page_vitals_top_header_wrapper {
  display: flex;
  justify-content: space-between;
}

#page_vitals_tab_button_wrapper {
  display: flex;
  box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
  margin-bottom: 0px;
  height: 60px;

  svg {
    margin-bottom: auto;
  }
}
.page_vitals_tab_button {
  display: flex;
  height: 60px;
  padding: 6px 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  background-color: #fff;
  border: none;
  cursor: pointer;
}

.page_vitals_tab_button_left {
  border-radius: 10px 0px 0px 10px;
}
.page_vitals_tab_button_right {
  border-radius: 0px 10px 10px 0px;
}

.page_vitals_tab_description {
  font-size: 12px;
  color: var(--Grey-800, #34404b);
  margin-bottom: 0px;
  font-weight: 500;
  margin-top: 0px;
}

.page_vitals_tab_icon {
  width: 30px;
  height: 30px;
}

.active {
  background-color: #00936f;
  color: #fff !important;
}
.active > .page_vitals_tab_description {
  color: #fff !important;
}
.active > svg {
  color: #fff !important;
}

.page_vitals_tab1_content_header_wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.page_vitals_info_wrapper {
  display: flex;
  justify-content: space-between;
}
.page_vitals_tab1_content_header {
  color: #34404b;
  font-size: 14px;
  font-weight: 600;
  margin-left: 6px;
  cursor: pointer;
}

.page_vitals_info_text {
  color: #34404b;
  font-size: 13px;
  font-weight: 500;
}

.page_vitals_content_ul_heading {
  color: #34404b;
  font-size: 14px;
  font-weight: 500;
}

.page_vitals_tab1_content_wrapper {
  margin-top: 15px;
  border: 1px solid var(--Grey-200, #e6e7e8);
}

.page_vitals_tab1_content_margin {
  margin-top: 10px;
}

.metrics_breakdown {
  margin-top: 28px;
}

.page_vitals_grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 15px;
}

.page_vitals_grid-item {
  background-color: #fff;
  border: 1px solid var(--Grey-200, #e6e7e8);
  border-radius: 8px;
  padding: 16px 10px;
  color: #34404b;
  font-size: 13px;
  font-weight: 600;
  margin-left: 6px;
}

#page_vital_copy_text {
  color: #00936f !important;
}

.page_vitals_metrics_numbers {
  width: 72px;
  padding: 6px 10px;
  display: block;
  margin-top: 30px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
}

.page_vitals_color_red {
  background-color: #ffe7d8;
  color: #ff4a3d;
}
.page_vitals_color_orange {
  background-color: #fdf1e3;
  color: #ce7422;
}
.page_vitals_color_lightgreen {
  background-color: #d7fcd2;
  color: #12904e;
}

/* TOOLTIP STYLES */
[tooltip] {
  position: relative;
  cursor: pointer;
}

[tooltip]::before,
[tooltip]::after {
  text-transform: none;
  font-size: 0.9em;
  line-height: 1;
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: none;
  opacity: 0;
}
[tooltip]::before {
  content: "";
  border: 5px solid transparent;
  z-index: 1001;
}
[tooltip]::after {
  content: attr(tooltip);
  text-align: center;
  z-index: 1000;
  display: flex;
  width: 211px;
  padding: var(--corner-med, 8px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  border-radius: 10px;
  background: #00936f;
  color: var(--Grey-White, #fff);
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
}

[tooltip]:hover::before,
[tooltip]:hover::after {
  display: block;
}

/* FLOW: DOWN */
[tooltip][flow^="down"]::before {
  top: 100%;
}
[tooltip][flow^="down"]::after {
  top: calc(100% + 10px);
}
[tooltip][flow^="down"]::before,
[tooltip][flow^="down"]::after {
  left: 50%;
  transform: translate(-50%, 0.5em);
}

/* KEYFRAMES */
@keyframes tooltips-vert {
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes tooltips-horz {
  to {
    opacity: 0.9;
    transform: translate(0, -50%);
  }
}

/* FX All The Things */
[tooltip]:not([flow]):hover::before,
[tooltip]:not([flow]):hover::after,
[tooltip][flow^="down"]:hover::before,
[tooltip][flow^="down"]:hover::after {
  animation: tooltips-vert 300ms ease-out forwards;
}
</style>
