<template>
  <div id="pv_site_speed_wrapper">
    <div class="pv_site_speed_header">
      <div class="pv_sp_h_l">
        <p class="pv_site_speed_header_text">Error Messages</p>
        <div class="pv_sp_h_l_i">
          <div class="pv_sp_h_l_i_w">
            <div class="pv_sp_h_l_i_c">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.125 22.1875C17.6478 22.1875 22.125 17.7103 22.125 12.1875C22.125 6.66465 17.6478 2.1875 12.125 2.1875C6.60215 2.1875 2.125 6.66465 2.125 12.1875C2.125 17.7103 6.60215 22.1875 12.125 22.1875Z"
                  fill="#B71E2D"
                />
                <path
                  d="M15.125 9.1875L9.125 15.1875"
                  stroke="white"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.125 9.1875L15.125 15.1875"
                  stroke="white"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="pv_sp_h_l_i_count">
                <p class="pv_sp_h_l_i_count_n">2</p>
              </div>
            </div>
            <p class="pv_sp_h_l_i_t">Errors</p>
          </div>
          <div class="pv_sp_h_l_i_w">
            <div class="pv_sp_h_l_i_c">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M22.2309 18.5L14.2309 4.49998C14.0565 4.19218 13.8035 3.93617 13.4978 3.75805C13.1922 3.57993 12.8447 3.48608 12.4909 3.48608C12.1371 3.48608 11.7897 3.57993 11.484 3.75805C11.1783 3.93617 10.9253 4.19218 10.7509 4.49998L2.75091 18.5C2.57459 18.8053 2.48213 19.1519 2.48292 19.5045C2.4837 19.8571 2.57768 20.2032 2.75535 20.5078C2.93302 20.8124 3.18805 21.0646 3.4946 21.2388C3.80115 21.4131 4.14831 21.5032 4.50091 21.5H20.5009C20.8518 21.4996 21.1964 21.4069 21.5002 21.2313C21.8039 21.0556 22.0561 20.8031 22.2314 20.4991C22.4067 20.1951 22.4989 19.8504 22.4989 19.4995C22.4988 19.1486 22.4064 18.8039 22.2309 18.5Z"
                  fill="#F28D15"
                />
                <path
                  d="M12.5 9.5V13.5"
                  stroke="white"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 17.5H12.5097"
                  stroke="white"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="pv_sp_h_l_i_count">
                <p class="pv_sp_h_l_i_count_n">6</p>
              </div>
            </div>
            <p class="pv_sp_h_l_i_t">Warnings</p>
          </div>
        </div>
      </div>
      <div class="pv_sp_buttons">
        <div class="pv_sp_tabs">
          <div class="pv_sp_tab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 17.5V3.5"
                stroke="#34404B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 11.5L12 17.5L18 11.5"
                stroke="#34404B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 21.5H5"
                stroke="#34404B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="pv_sp_tab_text">PDF Download</p>
          </div>
        </div>
        <div class="pv_sp_website" @click="showDropdown = true">
          <p class="pv_sp_website_text">https://www.cadenlane.com</p>
          <span
            ><svg
              :class="{ rotate_me: showDropdown }"
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
          <DropdownMenu
            v-if="showDropdown"
            :data="dropdownData"
            :selected="selectedItem"
            @item-selected="dropdownClicked"
          />
        </div>
      </div>
    </div>
    <div class="pv_site_speed_content">
      <div class="pv_site_speed_content_error">
        <div class="pv_site_speed_content_error_tabs">
          <div class="pv_site_error_tabs">
            <p
              v-for="tab in mainTab"
              class="pv_site_error_tab"
              :class="{ selected_active: tab === active }"
              :key="tab"
              @click="active = tab"
            >
              {{ tab }}
            </p>
          </div>
          <p class="pv_site_error_tab_r">8 Errors</p>
        </div>
        <ul class="pv_site_speed_error_content">
          <li
            v-for="er in errors"
            class="pv_site_speed_error_content_l"
            :key="er.message"
          >
            <p class="error_msg_count">({{ er.count }})</p>
            <div class="error_msg_wrapper">
              <error-svg :error="er.warningLevel === 'SEVERE'" />
              <p class="error_msg_text">
                {{ er.message }}
              </p>
            </div>
            <div class="error_category_wrapper">
              <div
                class="error_category"
                :style="{
                  background:
                    er.warningLevel === 'SEVERE'
                      ? '#B71E2D'
                      : er.warningLevel === 'WARNING'
                      ? '#FF4A3D'
                      : er.warningLevel === 'WARNING_LOW'
                      ? '#FFA58A'
                      : '',
                }"
              />
              <div
                class="error_category"
                :style="{
                  background:
                    er.warningLevel === 'SEVERE'
                      ? '#B71E2D'
                      : er.warningLevel === 'WARNING'
                      ? '#FF4A3D'
                      : '',
                }"
              />
              <div
                class="error_category"
                :style="{
                  background: er.warningLevel === 'SEVERE' ? '#B71E2D' : '',
                }"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="pv_error_msg_wrapper">
        <div class="pv_error_msg_wrapper_c">
          <div class="pv_error_msg_wrapper_error">
            <p class="pv_error_msg_wrapper_text">
              Uncaught Error: Yotpo Loyalty SDK loader script already loaded
              Tx60AxAaFloLi0S769Y...aby.myshopify.com:3 at
              Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111 at
              Tx60AxFlo-Li0S769Y... .myshopify.com:92:3
            </p>
            <div class="pv_copy_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1613_4735)">
                  <path
                    d="M13.334 5.33325H6.66732C5.93094 5.33325 5.33398 5.93021 5.33398 6.66659V13.3333C5.33398 14.0696 5.93094 14.6666 6.66732 14.6666H13.334C14.0704 14.6666 14.6673 14.0696 14.6673 13.3333V6.66659C14.6673 5.93021 14.0704 5.33325 13.334 5.33325Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.66732 10.6666C1.93398 10.6666 1.33398 10.0666 1.33398 9.33325V2.66659C1.33398 1.93325 1.93398 1.33325 2.66732 1.33325H9.33398C10.0673 1.33325 10.6673 1.93325 10.6673 2.66659"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1613_4735">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div class="pv_error_exp_wrapper_c">
          <div class="pv_error_exp_c_h">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                stroke="#0B7448"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8335 2.5V5.83333"
                stroke="#0B7448"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8335 14.1667V17.5001"
                stroke="#0B7448"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1665 4.16675H17.4998"
                stroke="#0B7448"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1665 15.8333H17.4998"
                stroke="#0B7448"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="pv_error_exp_c_h_text">Heatmap Translator</p>
          </div>
          <p class="pv_error_exp_c_text">
            It appears there's an issue with a script called Yotpo Loyalty SDK
            loader. The error message indicates that this script is being loaded
            twice on your website, specifically on line 3 and line 92. To fix
            this, you'll need to find where this script is being loaded and
            remove one of the instances to prevent the duplication. This should
            resolve the error and ensure that everything functions properly on
            your website.
          </p>
        </div>
        <div class="pv_cta_wrapper">
          <div class="pv_cta_button">
            <p class="pv_cta_button_text">Ignore</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MobileSvg from "./MobileSvg.vue";
import DesktopSvg from "./DesktopSvg.vue";
import ErrorSvg from "./ErrorSvg.vue";
import DropdownMenu from "./DropdownMenu.vue";
// SEVERE, WARNING, INFO, DEBUG

const errors = [
  {
    warningLevel: "SEVERE",
    message:
      "Uncaught Error: Yotpo Loyalty SDK loader scrip already loaded Tx60A...",
    explanation: "",
    count: 1,
  },
  {
    warningLevel: "SEVERE",
    message:
      "Uncaught (in promise) DOMException: Failed to execute 966447066?r...",
    explanation: "",
    count: 3,
  },
  {
    warningLevel: "WARNING",
    message:
      "[GORGIAS-CHAT] Another Gorgias chat was detect. Check that 01GYCC...",
    explanation: "",
    count: 1,
  },
  {
    warningLevel: "WARNING_LOW",
    message:
      "In the future, Permissions Policy feature join-ad-interest-group will not...",
    explanation: "",
    count: 1,
  },
  {
    warningLevel: "WARNING_LOW",
    message:
      "In a sandboxed environment, AddEventListener may not be behave as...",
    explanation: "",
    count: 1,
  },
  {
    warningLevel: "WARNING_LOW",
    message:
      "userDataCanBeSold is deprecated and will be replaced with saleOfDat...",
    explanation: "",
    count: 1,
  },
  {
    warningLevel: "WARNING_LOW",
    message:
      "Manifest: property ‘start_url’ ignored, URL is invalid. blob:https://cadenl...",
    explanation: "",
    count: 1,
  },
  {
    warningLevel: "WARNING_LOW",
    message:
      "Manifest: property ‘scope’ ignored, URL is invalid. blob:https://cadenla......",
    explanation: "",
    count: 1,
  },
];

const dropdownData = [
  "https://www.cadenlane.com",
  "https://www.cadenlane.com1",
  "https://www.cadenlane.com2",
  "https://www.cadenlane.com3",
  "https://www.cadenlane.com4",
];

const mainTab = ["Inbox", "Archived"];

export default defineComponent({
  props: [],
  components: { MobileSvg, DesktopSvg, ErrorSvg, DropdownMenu },
  data() {
    return {
      errors,
      mainTab,
      active: "Inbox",
      dropdownData,
      showDropdown: false,
      selectedItem: "",
    };
  },
  methods: {
    dropdownClicked(item: string) {
      this.selectedItem = item;
    },
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

    .pv_sp_h_l {
      display: flex;
      align-items: center;
      gap: 48px;
      flex: 1 0 0;

      .pv_site_speed_header_text {
        color: #34404b;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        min-width: 118px;
        flex-shrink: 0;
      }

      .pv_sp_h_l_i {
        display: flex;
        align-items: center;
        gap: 20px;

        .pv_sp_h_l_i_w {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          cursor: pointer;

          .pv_sp_h_l_i_c {
            position: relative;
            width: 26.75px;
            height: 28.375px;

            .pv_sp_h_l_i_count {
              position: absolute;
              top: -12px;
              right: -12px;
              display: flex;
              width: 12px;
              height: 12px;
              padding: 6px;
              justify-content: center;
              align-items: center;
              gap: 6px;
              flex-shrink: 0;
              border-radius: 50%;
              border: 0.75px solid #fff;
              background: #00936f;

              .pv_sp_h_l_i_count_n {
                color: #fff !important;
                text-align: center;
                font-size: 6px;
                font-style: normal;
                font-weight: 600;
                line-height: 6px; /* 100% */
              }
            }
          }

          .pv_sp_h_l_i_t {
            color: #34404b;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 12px; /* 100% */
          }
        }
      }
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
        position: relative;
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
        transition: all 0.3s ease-in-out;

        .rotate_me {
          transform: rotate(180deg);
        }

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

    .pv_site_speed_content_error {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1 0 0;
      align-self: stretch;

      .pv_site_speed_content_error_tabs {
        display: flex;
        padding: var(--horizontal-padding-lg, 12px) 16px;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;

        .pv_site_error_tabs {
          display: flex;
          align-items: flex-start;
          gap: 16px;

          .pv_site_error_tab {
            color: var(--Grey-600, #677078);
            /* Typography/Button Medium */
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px; /* 128.571% */
            cursor: pointer;

            &.selected_active {
              color: var(--Success-05-Darker, #0b7448);
              text-decoration-line: underline;
            }
          }

          .pv_site_error_tab_r {
            color: var(--Grey-800, #34404b);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
        }
      }

      .pv_site_speed_error_content {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        margin: 0;
        padding: 0;

        .pv_site_speed_error_content_l {
          display: flex;
          padding: 16px;
          align-items: center;
          gap: var(--vertical-padding-lg, 24px);
          align-self: stretch;
          border: 1px solid var(--Grey-200, #e6e7e8);
          background: var(--Grey-100, #f6f6f6);

          .error_msg_count {
            color: var(--Grey-800, #34404b);
            text-align: center;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px; /* 166.667% */
            width: 15px;
          }

          .error_msg_wrapper {
            display: flex;
            align-items: center;
            gap: var(--corner-med, 8px);
            flex: 1 0 0;

            .error_msg_text {
              color: var(--Grey-800, #34404b);
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: 20px; /* 166.667% */
            }
          }

          .error_category_wrapper {
            display: flex;
            width: 56px;
            height: 6px;
            align-items: center;
            gap: 2px;

            .error_category {
              flex: 1 0 0;
              align-self: stretch;
              border-radius: 1px;
              background: #cccfd2;
            }
          }
        }
      }
    }

    .pv_error_msg_wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1 0 0;
      border-radius: 0px 0px var(--corner-med, 8px) 0px;
      border: 1px solid var(--Grey-200, #e6e7e8);
      background: var(--Grey-100, #f6f6f6);

      .pv_error_msg_wrapper_c {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        align-self: stretch;
        background: var(--Grey-White, #fff) !important;

        .pv_error_msg_wrapper_error {
          display: flex;
          height: 268px;
          padding: 16px;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          align-self: stretch;
          background: var(--Grey-900, #1a2835);

          .pv_error_msg_wrapper_text {
            color: var(--Grey-100, #f6f6f6) !important;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px; /* 128.571% */

            .pv_copy_button {
              display: flex;
              width: 32px;
              height: 32px;
              padding: var(--Padding-Horizontal-padding, 6px)
                var(--Padding-Vertical-padding, 16px);
              justify-content: center;
              align-items: center;
              gap: 10px;
              flex-shrink: 0;
              border-radius: var(--Padding-Corner, 6px);
              background: var(--Grey-800, #34404b);
            }
          }
        }
      }

      .pv_error_exp_wrapper_c {
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--corner-med, 8px);
        align-self: stretch;

        .pv_error_exp_c_h {
          display: flex;
          align-items: center;
          gap: var(--corner-med, 8px);

          .pv_error_exp_c_h_text {
            color: var(--Success-05-Darker, #0b7448) !important;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 18px; /* 128.571% */
          }
        }

        .pv_error_exp_c_text {
          align-self: stretch;
          color: var(--Grey-800, #34404b) !important;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 18px; /* 128.571% */
        }
      }

      .pv_cta_wrapper {
        display: flex;
        padding: 16px;
        justify-content: flex-end;
        align-items: center;
        gap: 16px;
        align-self: stretch;
        border-top: 1px solid var(--Grey-200, #e6e7e8);
        background: var(--Grey-White, #fff);

        .pv_cta_button {
          display: flex;
          padding: var(--Padding-Horizontal-padding, 6px)
            var(--Padding-Vertical-padding, 16px);
          align-items: flex-start;
          gap: 10px;
          border-radius: var(--Padding-Corner, 6px);
          background: var(--Primary-03-Main, #00936f);

          .pv_cta_button_text {
            color: var(--Grey-White, #fff);
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 26px; /* 173.333% */
          }
        }
      }
    }
  }
}
</style>
