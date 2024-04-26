<template>
  <section class="page_vitals_step1_content_wrapper">
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
    <h2 class="page_vitals_heading">Error Messages</h2>

    <div>
      <p @click="generatePDF" class="page_vitals_content_download_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M8.5 11.3333V2"
            stroke="#00936F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 7.33333L8.5 11.3333L12.5 7.33333"
            stroke="#00936F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.1663 14H3.83301"
            stroke="#00936F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>PDF Download</span>
      </p>
    </div>

    <!-- ##################### Accordion section #######################-->
    <div class="page_vitals_accordion-container">
      <div class="page_vitals_accordion_content_header">
        <div class="page_vitals_error_tabs_cover">
          <span
            class="page_vitals_error_tab"
            :class="{ page_vitals_active_tab: activeTab === 'inbox' }"
            @click="activeTab = 'inbox'"
            >Inbox</span
          >
          <span
            class="page_vitals_error_tab page_vitals_archived"
            :class="{ page_vitals_active_tab: activeTab === 'archive' }"
            @click="activeTab = 'archive'"
            >Archived</span
          >
        </div>
        <span class="paege_vitals_error_text">5 Errors</span>
      </div>

      <div
        class="page_vitals_inbox_content"
        v-show="activeTab === 'inbox'">
        <div>
          <!-- Accordion 1 -->
          <div class="page_vitals_accordion_cover">
            <input
              type="checkbox"
              id="accordion1"
              class="page_vitals_accordion-checkbox"
            />
            <label
              for="accordion1"
              class="page_vitals_accordion-heading page_vitals_padding"
            >
              <span class="page_vitals_error_indicators_cover">
                <div class="page_vitals_red_indicator_cover">
                  <span class="page_vitals_error_indicators_red"></span>
                  <span class="page_vitals_error_indicators_red"></span>
                  <span class="page_vitals_error_indicators_red"></span>
                </div>

                <div>
                  <span>(1)</span>
                </div>
              </span>
              <span class="page_vitals_accordion_header_cover">
                <svg
                  style="margin-right: 10px"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
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
                <span class="page_vitals_ellipsis_text"
                  >Uncaught Error: Yotpo Loyalty SDK loader scrip already loaded
                  Tx60AxAaFloLi0S7
                </span>
              </span>
              <span class="page_vitals_arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="black"
                    stroke-width="1"
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </label>
            <div class="page_vitals_accordion-content">
              <div class="page_vitals_raw_code">
                <p class="page_vitals_error_text_title">
                  Uncaught Error: Yotpo Loyalty SDK loader script already loaded
                </p>
                <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3</p>
                <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
                <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>

                <div class="page_vitals_copy_svg">
                  <div></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1278_5770)">
                      <path
                        d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1278_5770">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div class="page_vitals_padding">
                <div>
                  <p class="page_vitals_translated_code">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style="margin-right: 8px"
                    >
                      <path
                        d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 2.5V5.83333"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 14.1666V17.5"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 4.16663H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 15.8334H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Heatmap Translator</span>
                  </p>
                </div>
                <p class="page_vitals_translated_code_description">
                  It appears there's an issue with a script called Yotpo Loyalty
                  SDK loader. The error message indicates that this script is
                  being loaded twice on your website, specifically on line 3 and
                  line 92. To fix this, you'll need to find where this script is
                  being loaded and remove one of the instances to prevent the
                  duplication. This should resolve the error and ensure that
                  everything functions properly on your website.
                </p>
              </div>
            </div>
          </div>

          <!-- Accordion 2 -->
          <div class="page_vitals_accordion_cover">
            <input
              type="checkbox"
              id="accordion2"
              class="page_vitals_accordion-checkbox"
            />
            <label
              for="accordion2"
              class="page_vitals_accordion-heading page_vitals_padding"
            >
              <span class="page_vitals_error_indicators_cover">
                <div class="page_vitals_red_indicator_cover">
                  <span class="page_vitals_error_indicators_red"></span>
                  <span class="page_vitals_error_indicators_red"></span>
                  <span class="page_vitals_error_indicators_red"></span>
                </div>

                <div>
                  <span>(3)</span>
                </div>
              </span>
              <span class="page_vitals_accordion_header_cover">
                <svg
                  style="margin-right: 10px"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
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
                <span class="page_vitals_ellipsis_text"
                  >Uncaught (in promise) DOMException: Failed to execute
                  966447066?random=171...</span
                >
              </span>
              <span class="page_vitals_arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="black"
                    stroke-width="1"
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </label>
            <div class="page_vitals_accordion-content">
              <div class="page_vitals_raw_code">
                <p class="page_vitals_error_text_title">
                  Uncaught Error: Yotpo Loyalty SDK loader script already loaded
                </p>
                <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3</p>
                <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
                <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>

                <div class="page_vitals_copy_svg">
                  <div></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1278_5770)">
                      <path
                        d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1278_5770">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div class="page_vitals_padding">
                <div>
                  <p class="page_vitals_translated_code">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style="margin-right: 8px"
                    >
                      <path
                        d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 2.5V5.83333"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 14.1666V17.5"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 4.16663H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 15.8334H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Heatmap Translator</span>
                  </p>
                </div>
                <p class="page_vitals_translated_code_description">
                  It appears there's an issue with a script called Yotpo Loyalty
                  SDK loader. The error message indicates that this script is
                  being loaded twice on your website, specifically on line 3 and
                  line 92. To fix this, you'll need to find where this script is
                  being loaded and remove one of the instances to prevent the
                  duplication. This should resolve the error and ensure that
                  everything functions properly on your website.
                </p>
              </div>
            </div>
          </div>

          <!-- Accordion 3 -->
          <div class="page_vitals_accordion_cover">
            <input
              type="checkbox"
              id="accordion3"
              class="page_vitals_accordion-checkbox"
            />
            <label
              for="accordion3"
              class="page_vitals_accordion-heading page_vitals_padding"
            >
              <span class="page_vitals_error_indicators_cover">
                <div class="page_vitals_red_indicator_cover">
                  <span class="page_vitals_error_indicators_red"></span>
                  <span class="page_vitals_error_indicators_red"></span>
                  <span class="page_vitals_error_indicators_grey"></span>
                </div>

                <div>
                  <span>(1)</span>
                </div>
              </span>
              <span class="page_vitals_accordion_header_cover">
                <svg
                  style="margin-right: 10px"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.4876 12L9.15426 2.66665C9.03797 2.46146 8.86933 2.29078 8.66555 2.17203C8.46176 2.05329 8.23012 1.99072 7.99426 1.99072C7.7584 1.99072 7.52677 2.05329 7.32298 2.17203C7.11919 2.29078 6.95055 2.46146 6.83426 2.66665L1.50093 12C1.38338 12.2036 1.32175 12.4346 1.32227 12.6697C1.32279 12.9047 1.38545 13.1355 1.50389 13.3385C1.62234 13.5416 1.79236 13.7097 1.99673 13.8259C2.20109 13.942 2.43253 14.0021 2.6676 14H13.3343C13.5682 13.9997 13.7979 13.938 14.0005 13.8208C14.203 13.7037 14.3711 13.5354 14.4879 13.3327C14.6048 13.1301 14.6663 12.9002 14.6662 12.6663C14.6662 12.4324 14.6046 12.2026 14.4876 12Z"
                    fill="#F28D15"
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
                <span class="page_vitals_ellipsis_text"
                  >[GORGIAS-CHAT] Another Gorgias chat was detect. Check that
                  01GYCCBXFFSRHT...</span
                >
              </span>
              <span class="page_vitals_arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="black"
                    stroke-width="1"
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </label>
            <div class="page_vitals_accordion-content">
              <div class="page_vitals_raw_code">
                <p class="page_vitals_error_text_title">
                  Uncaught Error: Yotpo Loyalty SDK loader script already loaded
                </p>
                <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3</p>
                <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
                <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>

                <div class="page_vitals_copy_svg">
                  <div></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1278_5770)">
                      <path
                        d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1278_5770">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div class="page_vitals_padding">
                <div>
                  <p class="page_vitals_translated_code">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style="margin-right: 8px"
                    >
                      <path
                        d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 2.5V5.83333"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 14.1666V17.5"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 4.16663H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 15.8334H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Heatmap Translator</span>
                  </p>
                </div>
                <p class="page_vitals_translated_code_description">
                  It appears there's an issue with a script called Yotpo Loyalty
                  SDK loader. The error message indicates that this script is
                  being loaded twice on your website, specifically on line 3 and
                  line 92. To fix this, you'll need to find where this script is
                  being loaded and remove one of the instances to prevent the
                  duplication. This should resolve the error and ensure that
                  everything functions properly on your website.
                </p>
              </div>
            </div>
          </div>

          <!-- Accordion 4 -->
          <div class="page_vitals_accordion_cover">
            <input
              type="checkbox"
              id="accordion4"
              class="page_vitals_accordion-checkbox"
            />
            <label
              for="accordion4"
              class="page_vitals_accordion-heading page_vitals_padding"
            >
              <span class="page_vitals_error_indicators_cover">
                <div class="page_vitals_red_indicator_cover">
                  <span class="page_vitals_error_indicators_red"></span>
                  <span class="page_vitals_error_indicators_grey"></span>
                  <span class="page_vitals_error_indicators_grey"></span>
                </div>

                <div>
                  <span>(1)</span>
                </div>
              </span>
              <span class="page_vitals_accordion_header_cover">
                <svg
                  style="margin-right: 10px"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.4876 12L9.15426 2.66665C9.03797 2.46146 8.86933 2.29078 8.66555 2.17203C8.46176 2.05329 8.23012 1.99072 7.99426 1.99072C7.7584 1.99072 7.52677 2.05329 7.32298 2.17203C7.11919 2.29078 6.95055 2.46146 6.83426 2.66665L1.50093 12C1.38338 12.2036 1.32175 12.4346 1.32227 12.6697C1.32279 12.9047 1.38545 13.1355 1.50389 13.3385C1.62234 13.5416 1.79236 13.7097 1.99673 13.8259C2.20109 13.942 2.43253 14.0021 2.6676 14H13.3343C13.5682 13.9997 13.7979 13.938 14.0005 13.8208C14.203 13.7037 14.3711 13.5354 14.4879 13.3327C14.6048 13.1301 14.6663 12.9002 14.6662 12.6663C14.6662 12.4324 14.6046 12.2026 14.4876 12Z"
                    fill="#F28D15"
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
                <span class="page_vitals_ellipsis_text"
                  >In the future, Permissions Policy feature
                  join-ad-interest-group will not be enable...
                </span>
              </span>
              <span class="page_vitals_arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="black"
                    stroke-width="1"
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </label>
            <div class="page_vitals_accordion-content">
              <div class="page_vitals_raw_code">
                <p class="page_vitals_error_text_title">
                  Uncaught Error: Yotpo Loyalty SDK loader script already loaded
                </p>
                <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3</p>
                <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
                <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>

                <div class="page_vitals_copy_svg">
                  <div></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1278_5770)">
                      <path
                        d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1278_5770">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div class="page_vitals_padding">
                <div>
                  <p class="page_vitals_translated_code">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style="margin-right: 8px"
                    >
                      <path
                        d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 2.5V5.83333"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 14.1666V17.5"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 4.16663H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 15.8334H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Heatmap Translator</span>
                  </p>
                </div>
                <p class="page_vitals_translated_code_description">
                  It appears there's an issue with a script called Yotpo Loyalty
                  SDK loader. The error message indicates that this script is
                  being loaded twice on your website, specifically on line 3 and
                  line 92. To fix this, you'll need to find where this script is
                  being loaded and remove one of the instances to prevent the
                  duplication. This should resolve the error and ensure that
                  everything functions properly on your website.
                </p>
              </div>
            </div>
          </div>

          <!-- Accordion 5 -->
          <div class="page_vitals_accordion_cover">
            <input
              type="checkbox"
              id="accordion5"
              class="page_vitals_accordion-checkbox"
            />
            <label
              for="accordion5"
              class="page_vitals_accordion-heading page_vitals_padding"
            >
              <span class="page_vitals_error_indicators_cover">
                <div class="page_vitals_red_indicator_cover">
                  <span class="page_vitals_error_indicators_red"></span>
                  <span class="page_vitals_error_indicators_grey"></span>
                  <span class="page_vitals_error_indicators_grey"></span>
                </div>

                <div>
                  <span>(1)</span>
                </div>
              </span>
              <span class="page_vitals_accordion_header_cover">
                <svg
                  style="margin-right: 10px"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.4876 12L9.15426 2.66665C9.03797 2.46146 8.86933 2.29078 8.66555 2.17203C8.46176 2.05329 8.23012 1.99072 7.99426 1.99072C7.7584 1.99072 7.52677 2.05329 7.32298 2.17203C7.11919 2.29078 6.95055 2.46146 6.83426 2.66665L1.50093 12C1.38338 12.2036 1.32175 12.4346 1.32227 12.6697C1.32279 12.9047 1.38545 13.1355 1.50389 13.3385C1.62234 13.5416 1.79236 13.7097 1.99673 13.8259C2.20109 13.942 2.43253 14.0021 2.6676 14H13.3343C13.5682 13.9997 13.7979 13.938 14.0005 13.8208C14.203 13.7037 14.3711 13.5354 14.4879 13.3327C14.6048 13.1301 14.6663 12.9002 14.6662 12.6663C14.6662 12.4324 14.6046 12.2026 14.4876 12Z"
                    fill="#F28D15"
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
                <span class="page_vitals_ellipsis_text"
                  >In a sandboxed environment, AddEventListener may not be
                  behave as ...
                </span>
              </span>
              <span class="page_vitals_arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="black"
                    stroke-width="1"
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </label>
            <div class="page_vitals_accordion-content">
              <div class="page_vitals_raw_code">
                <p class="page_vitals_error_text_title">
                  Uncaught Error: Yotpo Loyalty SDK loader script already loaded
                </p>
                <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3</p>
                <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
                <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>

                <div class="page_vitals_copy_svg">
                  <div></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1278_5770)">
                      <path
                        d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1278_5770">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div class="page_vitals_padding">
                <div>
                  <p class="page_vitals_translated_code">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style="margin-right: 8px"
                    >
                      <path
                        d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 2.5V5.83333"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.833 14.1666V17.5"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 4.16663H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.167 15.8334H17.5003"
                        stroke="#0B7448"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Heatmap Translator</span>
                  </p>
                </div>
                <p class="page_vitals_translated_code_description">
                  It appears there's an issue with a script called Yotpo Loyalty
                  SDK loader. The error message indicates that this script is
                  being loaded twice on your website, specifically on line 3 and
                  line 92. To fix this, you'll need to find where this script is
                  being loaded and remove one of the instances to prevent the
                  duplication. This should resolve the error and ensure that
                  everything functions properly on your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page_vitals_archive_content" v-show="activeTab === 'archive'">
        <!-- Accordion 6 -->
        <div class="page_vitals_accordion_cover">
          <input
            type="checkbox"
            id="accordion7"
            class="page_vitals_accordion-checkbox"
          />
          <label
            for="accordion7"
            class="page_vitals_accordion-heading page_vitals_padding"
          >
            <span class="page_vitals_error_indicators_cover">
              <div class="page_vitals_red_indicator_cover">
                <span class="page_vitals_error_indicators_red"></span>
                <span class="page_vitals_error_indicators_red"></span>
                <span class="page_vitals_error_indicators_red"></span>
              </div>

              <div>
                <span>(3)</span>
              </div>
            </span>
            <span class="page_vitals_accordion_header_cover">
              <svg
                style="margin-right: 10px"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
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
              <span class="page_vitals_ellipsis_text"
                >Uncaught (in promise) DOMException: Failed to execute
                966447066?random=171...</span
              >
            </span>
            <span class="page_vitals_arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="black"
                  stroke-width="1"
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </label>
          <div class="page_vitals_accordion-content">
            <div class="page_vitals_raw_code">
              <p class="page_vitals_error_text_title">
                Uncaught Error: Yotpo Loyalty SDK loader script already loaded
              </p>
              <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3</p>
              <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
              <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>

              <div class="page_vitals_copy_svg">
                <div></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1278_5770)">
                    <path
                      d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1278_5770">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div class="page_vitals_padding">
              <div>
                <p class="page_vitals_translated_code">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style="margin-right: 8px"
                  >
                    <path
                      d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.833 2.5V5.83333"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.833 14.1666V17.5"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.167 4.16663H17.5003"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.167 15.8334H17.5003"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Heatmap Translator</span>
                </p>
              </div>
              <p class="page_vitals_translated_code_description">
                It appears there's an issue with a script called Yotpo Loyalty
                SDK loader. The error message indicates that this script is
                being loaded twice on your website, specifically on line 3 and
                line 92. To fix this, you'll need to find where this script is
                being loaded and remove one of the instances to prevent the
                duplication. This should resolve the error and ensure that
                everything functions properly on your website.
              </p>
            </div>
          </div>
        </div>

        <!-- Accordion 7 -->
        <div class="page_vitals_accordion_cover">
          <input
            type="checkbox"
            id="accordion6"
            class="page_vitals_accordion-checkbox"
          />
          <label
            for="accordion6"
            class="page_vitals_accordion-heading page_vitals_padding"
          >
            <span class="page_vitals_error_indicators_cover">
              <div class="page_vitals_red_indicator_cover">
                <span class="page_vitals_error_indicators_red"></span>
                <span class="page_vitals_error_indicators_red"></span>
                <span class="page_vitals_error_indicators_red"></span>
              </div>

              <div>
                <span>(1)</span>
              </div>
            </span>
            <span class="page_vitals_accordion_header_cover">
              <svg
                style="margin-right: 10px"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
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
              <span class="page_vitals_ellipsis_text"
                >Uncaught Error: Yotpo Loyalty SDK loader scrip already loaded
                Tx60AxAaFloLi0S7
              </span>
            </span>
            <span class="page_vitals_arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="black"
                  stroke-width="1"
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </label>
          <div class="page_vitals_accordion-content">
            <div class="page_vitals_raw_code">
              <p class="page_vitals_error_text_title">
                Uncaught Error: Yotpo Loyalty SDK loader script already loaded
              </p>
              <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3</p>
              <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
              <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>

              <div class="page_vitals_copy_svg">
                <div></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1278_5770)">
                    <path
                      d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1278_5770">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div class="page_vitals_padding">
              <div>
                <p class="page_vitals_translated_code">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style="margin-right: 8px"
                  >
                    <path
                      d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.833 2.5V5.83333"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.833 14.1666V17.5"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.167 4.16663H17.5003"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.167 15.8334H17.5003"
                      stroke="#0B7448"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Heatmap Translator</span>
                </p>
              </div>
              <p class="page_vitals_translated_code_description">
                It appears there's an issue with a script called Yotpo Loyalty
                SDK loader. The error message indicates that this script is
                being loaded twice on your website, specifically on line 3 and
                line 92. To fix this, you'll need to find where this script is
                being loaded and remove one of the instances to prevent the
                duplication. This should resolve the error and ensure that
                everything functions properly on your website.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref="inboxContent" >
        <div id="element-to-convert">
          <div v-if="showContent">
            <div style="display: flex; align-items: center; justify-content: start;" >
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 72 72" fill="none" class="pv_logo">
              <path d="M54 42.4853V42.6008C53.9856 44.9994 53.4595 47.3695 52.4547 49.5635C49.7194 55.4899 43.0474 59.7801 36.2286 60C36.0625 60 35.8809 60 35.6955 60C33.8819 59.9949 32.0798 59.7209 30.3525 59.1874C22.4636 56.7572 19.2029 49.5448 19.2029 49.5448C18.7433 48.5588 18.4098 47.5225 18.21 46.4586C17.051 40.2042 21.0303 35.0567 21.8261 34.028C22.7681 32.8132 23.8605 31.7142 25.079 30.7554L27.2696 33.8044L25.4731 35.668C24.9631 36.2793 21.745 40.2638 22.7688 45.5044C23.978 51.7663 30.1864 54.45 31.2179 54.7892C31.4806 54.8787 31.7588 54.9644 31.7588 54.9644C33.1564 55.3949 34.619 55.5965 36.0857 55.5608C41.2124 55.3968 46.2231 52.1838 48.2707 47.7334C49.0195 46.0628 49.4136 44.2643 49.4297 42.4443C49.4696 41.1449 49.2708 39.8489 48.8424 38.6163C48.6287 38.0298 48.3624 37.4624 48.0466 36.9204C46.5901 34.3895 38.7746 24.9706 36.6845 22.1006L34.1772 25.6862L40.8028 33.6739C41.3012 34.3262 41.7803 35.012 42.2245 35.709C43.2136 37.2559 43.9978 38.4784 44.4614 40.0961C44.9257 41.5791 45.0066 43.1493 44.6971 44.6695C43.9244 47.834 40.5479 51.1849 36.1977 51.3191C34.9784 51.3427 33.7669 51.1257 32.6376 50.6816C31.5082 50.2374 30.4848 49.5754 29.6301 48.736C28.9501 48.0949 26.3269 45.702 26.663 42.1237C26.945 39.086 29.1703 37.2521 29.6687 36.8608L32.0871 39.9209C31.3385 40.6538 30.8886 41.6224 30.82 42.6493C30.7079 44.677 32.2571 45.9592 32.5739 46.2089C33.1753 46.6567 33.8728 46.969 34.6155 47.1232C35.3581 47.2773 36.1271 47.2693 36.8661 47.0997C37.8886 46.8078 38.7889 46.2109 39.4379 45.3946C40.0869 44.5783 40.4511 43.5846 40.4783 42.5561C40.4846 41.6822 40.2385 40.8239 39.7675 40.0774L28.7376 25.772L29.2399 25.0824C31.357 22.1751 33.4741 19.2641 35.5912 16.3493L36.5725 15L37.6349 16.2934C38.253 17.0388 38.8789 17.8216 39.4854 18.5894C42.6881 22.6373 48.9506 29.9727 51.7709 34.2964L51.8056 34.3485C53.2277 36.8423 53.9819 39.6391 54 42.4853Z" fill="#00936F"/>
              </svg> <a href="" class="pv_logo_link">Heatmap.com</a>
            </div>
            <h3 class="pv_pdf_title">Error Messages for <a href="">www.cadenlane.com/</a> </h3>
            <span class="pv_pdf_date">Downloaded on April 22, 2024</span>
    
            <table style="width: 100%; border-collapse: collapse; margin-left: auto; margin-right: auto; margin-top: 20px; margin-bottom: 20px; align-self: start;">
            <tr>
              <th  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;">Urgency</th>
              <th  style=" border-right: none !important;  border-top: 1px solid #dd4d; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;">Type</th>
              <th  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;">Instances</th>
              <th  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;">Message</th>
              <th  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;">Description</th>
            </tr>
            <tr style="word-wrap: break-word; word-break: break-all;">
              <td class="pv_col1"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835; font-weight: 500; line-height: 157.143%;">Critical</td>
              <td class="pv_col2"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;  font-weight: 500; line-height: 157.143%;">Error</td>
              <td class="pv_col3"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;  font-weight: 500; line-height: 157.143%;">1</td>
              <td class="pv_col4"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;  font-weight: 500; line-height: 157.143%;">Uncaught Error: Yotpo Loyalty SDK loader script already loaded Tx60AxAaFloLi0S769Y...aby.myshopify.com:3</td>       
             <td class="pv_col5"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;  font-weight: 500; line-height: 157.143%;">It appears there's an issue with a script called Yotpo Loyalty SDK loader. The error message indicates that this script is being loaded twice on your website, specifically on line 3 and line 92. To fix this, you'll need to find where this script is being loaded and remove one of the instances to prevent the duplication. This should resolve the error and ensure that everything functions properly on your website.</td>
            </tr>
            <tr style="word-wrap: break-word; word-break: break-all;">
              <td class="pv_col1"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835; font-weight: 500; line-height: 157.143%;">Critical</td>
              <td class="pv_col2"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;  font-weight: 500; line-height: 157.143%;">Error</td>
              <td class="pv_col3"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;  font-weight: 500; line-height: 157.143%;">1</td>
              <td class="pv_col4"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;  font-weight: 500; line-height: 157.143%;">Uncaught Error: Yotpo Loyalty SDK loader script already loaded Tx60AxAaFloLi0S769Y...aby.myshopify.com:3</td>       
             <td class="pv_col5"  style=" border-right: none !important;  border-top: 1px solid #ddd; border-bottom: 1px solid #ddd !important;  padding: 18px; text-align: left; vertical-align: top; font-size: 13px; color: #1A2835;  font-weight: 500; line-height: 157.143%;">It appears there's an issue with a script called Yotpo Loyalty SDK loader. The error message indicates that this script is being loaded twice on your website, specifically on line 3 and line 92. To fix this, you'll need to find where this script is being loaded and remove one of the instances to prevent the duplication. This should resolve the error and ensure that everything functions properly on your website.</td>
            </tr>
          </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";

export default defineComponent({
  data() {
    return {
      activeTab: "inbox",
      showContent: false,
    };
  },
  methods: {
    generatePDF() {
      this.showContent = true;

      html2pdf(document.getElementById("element-to-convert"), {
        margin: 0.3,
        filename: "Heatmap.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          dpi: 300,
          letterRendering: true,
          scale: 6,
        },
        jsPDF: {
          unit: "in",
          format: "a3",
          orientation: "portrait",
        },
      }).then(() => {
    // After PDF is generated, hide the content again
    this.showContent = false;
  });
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

.page_vitals_link {
  padding: 0px;
  margin: 0px;
  color: var(--Primary-03-Main, #00936f);
  font-size: 13px;
  font-weight: 600;
  display: flex;

  svg {
    margin-bottom: auto;
  }
}

.page_vitals_heading {
  padding: 0px;
  margin: 5px 0px 0px 0px;
  color: var(--Grey-800, var(--Grey-800, #34404b));
  font-size: 22px;
  font-weight: 600;
}

.page_vitals_content_download_button {
  color: var(--Primary-03-Main, #00936f);
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  display: flex;
  justify-content: end;
  cursor: pointer;
}

/* Accordion styles */
.page_vitals_accordion-container {
  margin-top: 5px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e6e7e8;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.page_vitals_accordion-container::-webkit-scrollbar {
  display: none;
}

.page_vitals_accordion-checkbox {
  display: none;
}

.page_vitals_accordion-heading {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #34404b;
  font-size: 13px;
  font-weight: 500;
}

.page_vitals_accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  font-size: 13px;
  font-weight: 500;
  color: var(--Grey-800, #34404b);
}

.page_vitals_accordion-checkbox:checked
  + .page_vitals_accordion-heading
  .page_vitals_arrow {
  transform: rotate(180deg);
  transition: 0.2s ease-in-out;
}

.page_vitals_arrow {
  transition: transform 0.66s ease;
}

.page_vitals_accordion-checkbox:checked
  + .page_vitals_accordion-heading
  + .page_vitals_accordion-content {
  max-height: 1000px;
  transition: 0.5s ease-in-out;
}

.page_vitals_accordion_content_header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--Grey-200, #e6e7e8);
  padding: 16px 18px;
}

.page_vitals_accordion_cover {
  border-bottom: 1px solid var(--Grey-200, #e6e7e8);
}

.page_vitals_raw_code {
  background: var(--Grey-900, #1a2835);
  padding: 10px 18px 14px 18px;
  color: #fff;
}

.page_vitals_padding {
  padding: 10px 18px 14px 18px;
}

.page_vitals_translated_code {
  color: var(--Primary-03-Main, #00936f);
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  display: flex;
}

.page_vitals_translated_code_description {
  color: var(--Grey-800, #34404b);
  font-size: 13px;
  font-weight: 500;
}

.page_vitals_copy_svg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.paege_vitals_error_text {
  color: var(--Grey-800, #34404b);
  font-size: 12px;
  font-weight: 600;
}

.page_vitals_error_tab {
  color: var(--Grey-600, #677078);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
}

.page_vitals_archived {
  margin-left: 14px;
}

.page_vitals_error_indicators_cover {
  width: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 6px 0px 0px;
}

.page_vitals_error_indicators_red {
  border-radius: 1px;
  background: var(--Error-03-Main, #ff4a3d);
  height: 6px;
  flex: 1 0 0;
  align-self: stretch;
  margin-right: 2px;
}

.page_vitals_error_indicators_grey {
  border-radius: 1px;
  background: var(--Error-03-Main, #cccfd2);
  height: 6px;
  flex: 1 0 0;
  align-self: stretch;
  margin-right: 2px;
}

.page_vitals_red_indicator_cover {
  display: flex;
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0px 6px 0px 0px;
}

.page_vitals_accordion_header_cover {
  width: 80%;
  display: flex;
  align-items: center;
}

.page_vitals_ellipsis_text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* width: 92%; */
}

.page_vitals_active_tab {
  color: var(--Primary-04-Dark, #016f52);
  font-size: 14px;
  font-weight: 600;
  text-decoration-line: underline;
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

.page_vitals_error_text_title {
  font-weight: 800;
}

.hidden-svg,
.hidden-address {
  display: none;
}


/* pdf template style */
.pv_logo_link{
  color: var(--Grey-900, #1A2835);
text-align: center;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration: none;
}

.pv_pdf_title{
  color: var(--Grey-900, #1A2835);
font-family: Inter;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: 60px;
margin-top: 0px;
margin-bottom: -10px;
padding: 0px 15px 0px 15px;
}

.pv_pdf_title > a{
  /* text-decoration: none; */
  color: var(--Grey-900, #1A2835);
}

.pv_pdf_date{
  color: var(--Grey-900, #1A2835);
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 36px; /* 100% */
padding: 0px 15px 0px 15px;
display: block;
margin-bottom: 50px;
}

.pv_logo{
  display: inline;
    margin-left: unset;
    margin-bottom: 0px;
    cursor: pointer;
}

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

    .pv_col1 { width: 10%; }
    .pv_col2 { width: 10%; }
    .pv_col3 { width: 10%; }
    .pv_col4 { width: 25%; }
    .pv_col5 { width: 35%; }
</style>
