<template>
  <section class="page_vitals_step1_content_wrapper">
    <a class="page_vitals_link">www.cadenlane.org</a>
    <h2 class="page_vitals_heading">Error Messages</h2>

    <div>
      <p class="page_vitals_content_download_button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17 16" fill="none">
          <path d="M8.5 11.3333V2" stroke="#00936F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4.5 7.33333L8.5 11.3333L12.5 7.33333" stroke="#00936F" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M13.1663 14H3.83301" stroke="#00936F" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg> <span>PDF Download</span>
      </p>
    </div>

    <!-- ##################### Accordion section #######################-->
    <div class="page_vitals_accordion-container">
      <div class="page_vitals_accordion_content_header">
        <div class="page_vitals_error_tabs_cover">
          <span class="page_vitals_error_tab"
            :class="{ 'page_vitals_active_tab': activeTab === 'inbox' }"
            @click="activeTab = 'inbox'">Inbox</span>
      <span class="page_vitals_error_tab page_vitals_archived"
            :class="{ 'page_vitals_active_tab': activeTab === 'archive' }"
            @click="activeTab = 'archive'">Archived</span>
        </div>
        <span class="paege_vitals_error_text">5 Errors</span>
      </div>

      <div class="page_vitals_inbox_content"  v-show="activeTab === 'inbox'">
        <!-- Accordion 1 -->
        <div class="page_vitals_accordion_cover">
          <input type="checkbox" id="accordion1" class="page_vitals_accordion-checkbox">
          <label for="accordion1" class="page_vitals_accordion-heading page_vitals_padding">
             <span class="page_vitals_error_indicators_cover" >
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
              <svg style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" fill="#B71E2D"/>
            <path d="M10 6L6 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
              <span class="page_vitals_ellipsis_text">Uncaught Error: Yotpo Loyalty SDK loader scrip already loaded Tx60AxAaFloLi0S7 </span>
            </span>
            <span class="page_vitals_arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path stroke="black" stroke-width="1" fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </label>
          <div class="page_vitals_accordion-content">
            <div class="page_vitals_raw_code">
              <p>Uncaught Error: Yotpo Loyalty SDK loader script already loaded</p>
              <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3 </p>
              <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
              <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>
  
              <div class="page_vitals_copy_svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_1278_5770)">
                    <path
                      d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    style="margin-right: 8px;">
                    <path
                      d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                      stroke="#0B7448" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.833 2.5V5.83333" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M15.833 14.1666V17.5" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 4.16663H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 15.8334H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>Heatmap Translator</span>
                </p>
              </div>
              <p class="page_vitals_translated_code_description">It appears there's an issue with a script called Yotpo
                Loyalty SDK loader. The error message indicates that this script is being loaded twice on your website,
                specifically on line 3 and line 92. To fix this, you'll need to find where this script is being loaded and
                remove one of the instances to prevent the duplication. This should resolve the error and ensure that
                everything functions properly on your website.</p>
            </div>
          </div>
        </div>
  
         <!-- Accordion 2 -->
         <div class="page_vitals_accordion_cover">
          <input type="checkbox" id="accordion2" class="page_vitals_accordion-checkbox">
          <label for="accordion2" class="page_vitals_accordion-heading page_vitals_padding">
             <span class="page_vitals_error_indicators_cover" >
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
              <svg style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" fill="#B71E2D"/>
            <path d="M10 6L6 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
            <span class="page_vitals_ellipsis_text">Uncaught (in promise) DOMException: Failed to execute 966447066?random=171...</span>
            </span>
            <span class="page_vitals_arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path stroke="black" stroke-width="1" fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </label>
          <div class="page_vitals_accordion-content">
            <div class="page_vitals_raw_code">
              <p>Uncaught Error: Yotpo Loyalty SDK loader script already loaded</p>
              <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3 </p>
              <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
              <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>
  
              <div class="page_vitals_copy_svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_1278_5770)">
                    <path
                      d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    style="margin-right: 8px;">
                    <path
                      d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                      stroke="#0B7448" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.833 2.5V5.83333" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M15.833 14.1666V17.5" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 4.16663H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 15.8334H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>Heatmap Translator</span>
                </p>
              </div>
              <p class="page_vitals_translated_code_description">It appears there's an issue with a script called Yotpo
                Loyalty SDK loader. The error message indicates that this script is being loaded twice on your website,
                specifically on line 3 and line 92. To fix this, you'll need to find where this script is being loaded and
                remove one of the instances to prevent the duplication. This should resolve the error and ensure that
                everything functions properly on your website.</p>
            </div>
          </div>
        </div>
  
          <!-- Accordion 3 -->
          <div class="page_vitals_accordion_cover">
          <input type="checkbox" id="accordion3" class="page_vitals_accordion-checkbox">
          <label for="accordion3" class="page_vitals_accordion-heading page_vitals_padding">
             <span class="page_vitals_error_indicators_cover" >
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
              <svg style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M14.4876 12L9.15426 2.66665C9.03797 2.46146 8.86933 2.29078 8.66555 2.17203C8.46176 2.05329 8.23012 1.99072 7.99426 1.99072C7.7584 1.99072 7.52677 2.05329 7.32298 2.17203C7.11919 2.29078 6.95055 2.46146 6.83426 2.66665L1.50093 12C1.38338 12.2036 1.32175 12.4346 1.32227 12.6697C1.32279 12.9047 1.38545 13.1355 1.50389 13.3385C1.62234 13.5416 1.79236 13.7097 1.99673 13.8259C2.20109 13.942 2.43253 14.0021 2.6676 14H13.3343C13.5682 13.9997 13.7979 13.938 14.0005 13.8208C14.203 13.7037 14.3711 13.5354 14.4879 13.3327C14.6048 13.1301 14.6663 12.9002 14.6662 12.6663C14.6662 12.4324 14.6046 12.2026 14.4876 12Z" fill="#F28D15"/>
              <path d="M8 6V8.66667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 11.3333H8.00667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="page_vitals_ellipsis_text">[GORGIAS-CHAT] Another Gorgias chat was detect. Check that 01GYCCBXFFSRHT...</span>
            </span>
            <span class="page_vitals_arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path stroke="black" stroke-width="1" fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </label>
          <div class="page_vitals_accordion-content">
            <div class="page_vitals_raw_code">
              <p>Uncaught Error: Yotpo Loyalty SDK loader script already loaded</p>
              <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3 </p>
              <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
              <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>
  
              <div class="page_vitals_copy_svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_1278_5770)">
                    <path
                      d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    style="margin-right: 8px;">
                    <path
                      d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                      stroke="#0B7448" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.833 2.5V5.83333" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M15.833 14.1666V17.5" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 4.16663H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 15.8334H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>Heatmap Translator</span>
                </p>
              </div>
              <p class="page_vitals_translated_code_description">It appears there's an issue with a script called Yotpo
                Loyalty SDK loader. The error message indicates that this script is being loaded twice on your website,
                specifically on line 3 and line 92. To fix this, you'll need to find where this script is being loaded and
                remove one of the instances to prevent the duplication. This should resolve the error and ensure that
                everything functions properly on your website.</p>
            </div>
          </div>
        </div>
  
          <!-- Accordion 4 -->
          <div class="page_vitals_accordion_cover">
          <input type="checkbox" id="accordion4" class="page_vitals_accordion-checkbox">
          <label for="accordion4" class="page_vitals_accordion-heading page_vitals_padding">
             <span class="page_vitals_error_indicators_cover" >
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
              <svg style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M14.4876 12L9.15426 2.66665C9.03797 2.46146 8.86933 2.29078 8.66555 2.17203C8.46176 2.05329 8.23012 1.99072 7.99426 1.99072C7.7584 1.99072 7.52677 2.05329 7.32298 2.17203C7.11919 2.29078 6.95055 2.46146 6.83426 2.66665L1.50093 12C1.38338 12.2036 1.32175 12.4346 1.32227 12.6697C1.32279 12.9047 1.38545 13.1355 1.50389 13.3385C1.62234 13.5416 1.79236 13.7097 1.99673 13.8259C2.20109 13.942 2.43253 14.0021 2.6676 14H13.3343C13.5682 13.9997 13.7979 13.938 14.0005 13.8208C14.203 13.7037 14.3711 13.5354 14.4879 13.3327C14.6048 13.1301 14.6663 12.9002 14.6662 12.6663C14.6662 12.4324 14.6046 12.2026 14.4876 12Z" fill="#F28D15"/>
              <path d="M8 6V8.66667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 11.3333H8.00667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="page_vitals_ellipsis_text">In the future, Permissions Policy feature join-ad-interest-group will not be enable... </span>
            </span>
            <span class="page_vitals_arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path stroke="black" stroke-width="1" fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </label>
          <div class="page_vitals_accordion-content">
            <div class="page_vitals_raw_code">
              <p>Uncaught Error: Yotpo Loyalty SDK loader script already loaded</p>
              <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3 </p>
              <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
              <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>
  
              <div class="page_vitals_copy_svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_1278_5770)">
                    <path
                      d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    style="margin-right: 8px;">
                    <path
                      d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                      stroke="#0B7448" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.833 2.5V5.83333" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M15.833 14.1666V17.5" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 4.16663H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 15.8334H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>Heatmap Translator</span>
                </p>
              </div>
              <p class="page_vitals_translated_code_description">It appears there's an issue with a script called Yotpo
                Loyalty SDK loader. The error message indicates that this script is being loaded twice on your website,
                specifically on line 3 and line 92. To fix this, you'll need to find where this script is being loaded and
                remove one of the instances to prevent the duplication. This should resolve the error and ensure that
                everything functions properly on your website.</p>
            </div>
          </div>
        </div>
  
         <!-- Accordion 5 -->
         <div class="page_vitals_accordion_cover">
          <input type="checkbox" id="accordion5" class="page_vitals_accordion-checkbox">
          <label for="accordion5" class="page_vitals_accordion-heading page_vitals_padding">
             <span class="page_vitals_error_indicators_cover" >
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
              <svg style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M14.4876 12L9.15426 2.66665C9.03797 2.46146 8.86933 2.29078 8.66555 2.17203C8.46176 2.05329 8.23012 1.99072 7.99426 1.99072C7.7584 1.99072 7.52677 2.05329 7.32298 2.17203C7.11919 2.29078 6.95055 2.46146 6.83426 2.66665L1.50093 12C1.38338 12.2036 1.32175 12.4346 1.32227 12.6697C1.32279 12.9047 1.38545 13.1355 1.50389 13.3385C1.62234 13.5416 1.79236 13.7097 1.99673 13.8259C2.20109 13.942 2.43253 14.0021 2.6676 14H13.3343C13.5682 13.9997 13.7979 13.938 14.0005 13.8208C14.203 13.7037 14.3711 13.5354 14.4879 13.3327C14.6048 13.1301 14.6663 12.9002 14.6662 12.6663C14.6662 12.4324 14.6046 12.2026 14.4876 12Z" fill="#F28D15"/>
              <path d="M8 6V8.66667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 11.3333H8.00667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="page_vitals_ellipsis_text">In a sandboxed environment, AddEventListener may not be behave as ... </span>
            </span>
            <span class="page_vitals_arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path stroke="black" stroke-width="1" fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </label>
          <div class="page_vitals_accordion-content">
            <div class="page_vitals_raw_code">
              <p>Uncaught Error: Yotpo Loyalty SDK loader script already loaded</p>
              <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3 </p>
              <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
              <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>
  
              <div class="page_vitals_copy_svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_1278_5770)">
                    <path
                      d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    style="margin-right: 8px;">
                    <path
                      d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                      stroke="#0B7448" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.833 2.5V5.83333" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M15.833 14.1666V17.5" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 4.16663H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 15.8334H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>Heatmap Translator</span>
                </p>
              </div>
              <p class="page_vitals_translated_code_description">It appears there's an issue with a script called Yotpo
                Loyalty SDK loader. The error message indicates that this script is being loaded twice on your website,
                specifically on line 3 and line 92. To fix this, you'll need to find where this script is being loaded and
                remove one of the instances to prevent the duplication. This should resolve the error and ensure that
                everything functions properly on your website.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="page_vitals_archive_content" v-show="activeTab === 'archive'">
         <!-- Accordion 6 -->
         <div class="page_vitals_accordion_cover">
          <input type="checkbox" id="accordion7" class="page_vitals_accordion-checkbox">
          <label for="accordion7" class="page_vitals_accordion-heading page_vitals_padding">
             <span class="page_vitals_error_indicators_cover" >
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
              <svg style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" fill="#B71E2D"/>
            <path d="M10 6L6 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
            <span class="page_vitals_ellipsis_text">Uncaught (in promise) DOMException: Failed to execute 966447066?random=171...</span>
            </span>
            <span class="page_vitals_arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path stroke="black" stroke-width="1" fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </label>
          <div class="page_vitals_accordion-content">
            <div class="page_vitals_raw_code">
              <p>Uncaught Error: Yotpo Loyalty SDK loader script already loaded</p>
              <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3 </p>
              <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
              <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>
  
              <div class="page_vitals_copy_svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_1278_5770)">
                    <path
                      d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    style="margin-right: 8px;">
                    <path
                      d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                      stroke="#0B7448" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.833 2.5V5.83333" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M15.833 14.1666V17.5" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 4.16663H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 15.8334H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>Heatmap Translator</span>
                </p>
              </div>
              <p class="page_vitals_translated_code_description">It appears there's an issue with a script called Yotpo
                Loyalty SDK loader. The error message indicates that this script is being loaded twice on your website,
                specifically on line 3 and line 92. To fix this, you'll need to find where this script is being loaded and
                remove one of the instances to prevent the duplication. This should resolve the error and ensure that
                everything functions properly on your website.</p>
            </div>
          </div>
        </div>

       <!-- Accordion 7 -->
       <div class="page_vitals_accordion_cover">
          <input type="checkbox" id="accordion6" class="page_vitals_accordion-checkbox">
          <label for="accordion6" class="page_vitals_accordion-heading page_vitals_padding">
             <span class="page_vitals_error_indicators_cover" >
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
              <svg style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00001C14.6663 4.31811 11.6816 1.33334 7.99967 1.33334C4.31778 1.33334 1.33301 4.31811 1.33301 8.00001C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" fill="#B71E2D"/>
            <path d="M10 6L6 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
              <span class="page_vitals_ellipsis_text">Uncaught Error: Yotpo Loyalty SDK loader scrip already loaded Tx60AxAaFloLi0S7 </span>
            </span>
            <span class="page_vitals_arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path stroke="black" stroke-width="1" fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </label>
          <div class="page_vitals_accordion-content">
            <div class="page_vitals_raw_code">
              <p>Uncaught Error: Yotpo Loyalty SDK loader script already loaded</p>
              <p>Tx60AxAaFloLi0S769Y...aby.myshopify.com:3 </p>
              <p>at Tx60AxaFlo-Li0S769Y... .myshopify.com:3:111</p>
              <p>at Tx60AxFlo-Li0S769Y... .myshopify.com:92:3</p>
  
              <div class="page_vitals_copy_svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_1278_5770)">
                    <path
                      d="M13.334 5.33337H6.66732C5.93094 5.33337 5.33398 5.93033 5.33398 6.66671V13.3334C5.33398 14.0698 5.93094 14.6667 6.66732 14.6667H13.334C14.0704 14.6667 14.6673 14.0698 14.6673 13.3334V6.66671C14.6673 5.93033 14.0704 5.33337 13.334 5.33337Z"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.66732 10.6667C1.93398 10.6667 1.33398 10.0667 1.33398 9.33337V2.66671C1.33398 1.93337 1.93398 1.33337 2.66732 1.33337H9.33398C10.0673 1.33337 10.6673 1.93337 10.6673 2.66671"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    style="margin-right: 8px;">
                    <path
                      d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                      stroke="#0B7448" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.833 2.5V5.83333" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M15.833 14.1666V17.5" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 4.16663H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M14.167 15.8334H17.5003" stroke="#0B7448" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>Heatmap Translator</span>
                </p>
              </div>
              <p class="page_vitals_translated_code_description">It appears there's an issue with a script called Yotpo
                Loyalty SDK loader. The error message indicates that this script is being loaded twice on your website,
                specifically on line 3 and line 92. To fix this, you'll need to find where this script is being loaded and
                remove one of the instances to prevent the duplication. This should resolve the error and ensure that
                everything functions properly on your website.</p>
            </div>
          </div>
        </div>
  
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'inbox'
    };
  }
};
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
  color: var(--Primary-03-Main, #00936F);
  font-size: 13px;
  font-weight: 600;
}

.page_vitals_heading {
  padding: 0px;
  margin: 10px 0px 10px 0px;
  color: var(--Grey-800, var(--Grey-800, #34404B));
  font-size: 22px;
  font-weight: 600;
}

.page_vitals_content_download_button {
  color: var(--Primary-03-Main, #00936F);
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  display: flex;
  justify-content: end;
}

/* Accordion styles */
.page_vitals_accordion-container {
  margin-top: 5px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #E6E7E8;
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
  color: #34404B;
  font-size: 13px;
  font-weight: 500;
}

.page_vitals_accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  font-size: 13px;
  font-weight: 500;
  color: var(--Grey-800, #34404B);
}

.page_vitals_accordion-checkbox:checked+.page_vitals_accordion-heading .page_vitals_arrow {
  transform: rotate(180deg);
  transition: 0.2s ease-in-out;
}

.page_vitals_arrow {
  transition: transform 0.66s ease;
}

.page_vitals_accordion-checkbox:checked+.page_vitals_accordion-heading+.page_vitals_accordion-content {
  max-height: 1000px;
  transition: 0.5s ease-in-out;
}

.page_vitals_accordion_content_header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--Grey-200, #E6E7E8);
  padding: 16px 18px;
}

.page_vitals_accordion_cover {
  border-bottom: 1px solid var(--Grey-200, #E6E7E8);
}

.page_vitals_raw_code {
  background: var(--Grey-900, #1A2835);
  padding: 10px 18px 14px 18px;
  color: #fff;
}

.page_vitals_padding {
  padding: 10px 18px 14px 18px;
}


.page_vitals_translated_code {
  color: var(--Primary-03-Main, #00936F);
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  display: flex;
}

.page_vitals_translated_code_description {
  color: var(--Grey-800, #34404B);
  font-size: 13px;
  font-weight: 500;
}

.page_vitals_copy_svg {
  text-align: end;
  cursor: pointer;
}

.paege_vitals_error_text{
  color: var(--Grey-800, #34404B);
font-size: 12px;
font-weight: 600;
}

.page_vitals_error_tab{
  color: var(--Grey-600, #677078);
font-size: 14px;
font-weight: 600;
line-height: 18px; 
cursor: pointer;
}

.page_vitals_archived{
  margin-left: 14px;
}

.page_vitals_error_indicators_cover{
width: 13%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px 6px 0px 0px;
}

.page_vitals_error_indicators_red{
  border-radius: 1px;
background: var(--Error-03-Main, #FF4A3D);
height: 6px;
flex: 1 0 0;
align-self: stretch;
margin-right: 2px;
}
.page_vitals_error_indicators_grey{
  border-radius: 1px;
background: var(--Error-03-Main, #CCCFD2);
height: 6px;
flex: 1 0 0;
align-self: stretch;
margin-right: 2px;
}

.page_vitals_red_indicator_cover{
  display: flex;
  width: 50%;
display: flex;
justify-content: space-between;
margin: 0px 6px 0px 0px;
}

.page_vitals_accordion_header_cover{
  width: 80%; 
  display: flex; 
  align-items: center;
}

.page_vitals_ellipsis_text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 92%;
}

.page_vitals_active_tab {
  color: var(--Primary-04-Dark, #016F52);
font-size: 14px;
font-weight: 600;
text-decoration-line: underline;
}

</style>
