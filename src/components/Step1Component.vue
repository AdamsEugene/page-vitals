<template>
  <div class="page_vitals_step1_content_wrapper">
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
    <h2 class="page_vitals_heading">Copywriting Analysis</h2>
    <div>
      <p class="page_vitals_content_ul_heading">
        Copywriting angles you should emphasize on your site:
      </p>
      <ul>
        <li class="page_vitals_content_ul_heading page_vitals_content_li">
          Stress the exceptional softness and quality of the bamboo fabric.
        </li>
        <li class="page_vitals_content_ul_heading page_vitals_content_li">
          Showcase the exclusive and adorable designs that set Caden Lane apart.
        </li>
        <li class="page_vitals_content_ul_heading page_vitals_content_li">
          Highlight the matching options available for memorable family moments.
        </li>
        <li class="page_vitals_content_ul_heading page_vitals_content_li">
          Position the products as ideal gifts, emphasizing the thoughtful and
          stylish nature.
        </li>
        <li class="page_vitals_content_ul_heading page_vitals_content_li">
          Communicate the brand's ethical and sustainable values to resonate
          with eco-conscious customers.
        </li>
      </ul>
    </div>

    <!-- button thumbs div -->
    <div class="page_vitals_button_wrapper">
      <p class="page_vitals_content_ul_heading">
        Are these insights relevant to you?
      </p>
      <div style="display: flex; align-items: center">
        <!-- Thumbs Up button with SVG icon -->
        <span
          id="page_vitals_thumbs_up"
          :class="{ 'thumbs-up-active': thumbsUpClicked }"
          @click="handleThumbsUpClick"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-hand-thumbs-up"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
            />
          </svg>
        </span>
        <!-- Thumbs Down button with SVG icon -->
        <span
          id="page_vitals_thumbs_down"
          :class="{ 'thumbs-down-active': thumbsDownClicked }"
          @click="handleThumbsDownClick"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-hand-thumbs-down"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      thumbsUpClicked: false,
      thumbsDownClicked: false,
    };
  },
  methods: {
    handleThumbsUpClick() {
      this.thumbsUpClicked = !this.thumbsUpClicked;
      if (this.thumbsUpClicked) {
        this.thumbsDownClicked = false;
      }
    },
    handleThumbsDownClick() {
      this.thumbsDownClicked = !this.thumbsDownClicked;
      this.$emit("showFeedbackModal");
      if (this.thumbsDownClicked) {
        this.thumbsUpClicked = false;
      }
    },
    displayFeedback() {
      this.$emit("showFeedbackModal");
    },
  },
});
</script>

<style scoped>
.page_vitals_step1_content_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 430px;
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
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;

  svg {
    margin-bottom: auto;
  }
}

.page_vitals_heading {
  padding: 0px;
  margin: 0px 0px 20px 0px;
  color: var(--Grey-800, var(--Grey-800, #34404b));
  font-size: 22px;
  font-weight: 600;
}

.page_vitals_content_ul_heading {
  color: var(--Grey-800, var(--Grey-800, #34404b));
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.page_vitals_content_li {
  margin-bottom: 10px;
}

.thumbs-up-active svg {
  stroke: #12904e;
  stroke-width: 0.5px;
}

#page_vitals_thumbs_up {
  margin-right: 10px;

  svg {
    margin-bottom: auto;
  }
}

#page_vitals_thumbs_down {
  svg {
    margin-bottom: auto;
  }
}

.thumbs-down-active svg {
  stroke: #b71e2d;
  stroke-width: 0.5px;
}

svg {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

/* TOOLTIP STYLES */
[tooltip] {
  position: relative;
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
</style>
