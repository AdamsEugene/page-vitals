<template>
  <HeaderNav :closeGestated="closeGestated" />
  <section class="page_vitals_get_started">
    <div id="page_vitals_get_started_cover_div">
      <h5 id="page_vitals_get_started_cover_heading">
        Initial Diagnostic: <br />
        Complete!
      </h5>
      <div id="page_vitals_stepper_cover">
        <div id="page_vitails_mk-stepper">
          <details class="mk-stepper-step">
            <summary class="mk-stepper-step__header">
              <span class="mk-stepper-step__icon">&#10003;</span
              ><span class="mk-stepper-step__label">Copy Analysis</span>
            </summary>
          </details>
          <details class="mk-stepper-step">
            <summary class="mk-stepper-step__header">
              <span class="mk-stepper-step__icon">&#10003;</span
              ><span class="mk-stepper-step__label">Site Speed</span>
            </summary>
          </details>
          <details class="mk-stepper-step">
            <summary class="mk-stepper-step__header">
              <span class="mk-stepper-step__icon">&#10003;</span
              ><span class="mk-stepper-step__label">Error Messages</span>
            </summary>
          </details>
        </div>
        <button id="page_vital_get_started_button">Done</button> <br /><br />
        <br />
        <div class="page_vitals_Stars_rating_wrapper">
          <p id="page_vitals_return_text">
            How helpful would you rate this diagnostic?
          </p>
          <div class="page_vitals_star_rating_div">
            <span
              v-for="star in stars"
              :key="star.id"
              @mouseover="hoverStar(star)"
              @click="selectStar(star)"
              @mouseleave="resetStars"
              :class="{ selected: star.selected, hovered: star.hovered }"
            >
              &#9733;
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import HeaderNav from "../components/HeaderNav.vue";

interface Star {
  id: number;
  selected: boolean;
  hovered: boolean;
}

export default defineComponent({
  props: ["closeGestated"],
  components: {
    HeaderNav,
  },
  setup() {
    const router = useRouter();
    const stars = ref<Star[]>([
      { id: 1, selected: false, hovered: false },
      { id: 2, selected: false, hovered: false },
      { id: 3, selected: false, hovered: false },
      { id: 4, selected: false, hovered: false },
      { id: 5, selected: false, hovered: false },
    ]);

    const hoverStar = (star: Star) => {
      stars.value.forEach((s) => (s.hovered = s.id <= star.id));
    };

    const resetStars = () => {
      stars.value.forEach((s) => (s.hovered = false));
    };

    const selectStar = (star: Star) => {
      stars.value.forEach((s) => {
        if (s.id <= star.id) {
          s.selected = true;
        } else {
          s.selected = false;
        }
      });
    };

    return {
      stars,
      hoverStar,
      resetStars,
      selectStar,
    };
  },
});
</script>

<style scoped>
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
  margin-bottom: 10px;
  margin-top: 0px;
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
  color: #0b7448;
  font-weight: 900;
  background-color: #fff;
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

.page_vitals_Stars_rating_wrapper {
  margin-top: 40px;
  width: 620px;
  border-radius: var(--corner-med, 8px);
  border: 1px solid var(--Grey-200, #e6e7e8);
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
}

#page_vitals_return_text {
  color: var(--Grey-White, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  padding: 0px;
  margin: 0px;
}

.page_vitals_star_rating_div {
  display: flex;
  justify-content: center;
}

.page_vitals_star_rating_div span {
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}

.page_vitals_star_rating_div span.selected {
  color: #ffd700;
}

.page_vitals_star_rating_div span.hovered {
  color: #ccc;
}
</style>
