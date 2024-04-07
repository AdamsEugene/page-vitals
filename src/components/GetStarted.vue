<template>
  <section class="page_vitals_get_started">
    <div id="page_vitals_get_started_cover_div">
      <h5 id="page_vitals_get_started_cover_heading">Initial Diagnostic</h5>
      <p id="page_vitals_get_started_cover_content">
        While waiting for UX observations from your heatmap data, check out these initial insights to get started optimizing your site
      </p>
  
    <div id="page_vitals_stepper_cover">
    <div id="page_vitails_mk-stepper">
      <details class="mk-stepper-step">
        <summary class="mk-stepper-step__header"><span class="mk-stepper-step__icon"></span><span class="mk-stepper-step__label">Copy Analysis</span></summary>
      </details>
      <details class="mk-stepper-step">
        <summary class="mk-stepper-step__header"><span class="mk-stepper-step__icon"></span><span class="mk-stepper-step__label">Site Speed</span></summary>
      </details>
      <details class="mk-stepper-step">
        <summary class="mk-stepper-step__header"><span class="mk-stepper-step__icon"></span><span class="mk-stepper-step__label">Error Messages</span></summary>
      </details>
    </div>
    <button id="page_vital_get_started_button"  @click="goToSteppers">
      Get Started
    </button>
  
    <p id="page_vitals_return_text">
      Return to Dashboard
    </p>
  </div>
  
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToSteppers = () => {
  router.push('/steppers');
};

</script>

<style scoped>

#app {
  /* background-image: url(../src/assets/images/bg.png) ; 
  background-size:100% 100% ;  */
}

.page_vitals_get_started{
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
/* position: absolute; */
/* z-index: 1; */
}

#page_vitals_get_started_cover_div{
  width: 440px; 
  margin-top: 25px;
}

#page_vitals_get_started_cover_heading{
  color: var(--Grey-White, #FFF);
text-align: center;
font-size: 38px;
font-weight: 600;
margin-bottom: 0px;
margin-top: 0px;
}

#page_vitals_get_started_cover_content{
  color: var(--Grey-100, #F6F6F6);
text-align: center;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px;
}

#page_vitals_stepper_cover{
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
  /* color: rgba(0, 0, 0, 0.87); */
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
  border: 2px solid #F6F6F6;
  color: #fff;
}
.mk-stepper-step__label {
  font-size: 14px;
  font-weight: 400;
  color: #F6F6F6;
}

.mk-stepper-step--active .mk-stepper-step__label {
  /* color: rgba(0, 0, 0, 0.87); */
  font-weight: 500;
}

#page_vital_get_started_button{
margin-top: 30px;
display: flex;
width: 320px;
padding: 16px 24px;
text-align: center;
justify-content: center;
align-items: center;
border-radius: 10px;
border: 2px solid white;
color: var(--Success-05-Darker, #0B7448);
font-size: 18px;
font-weight: 600;
line-height: 28px;
cursor: pointer;
}

#page_vitals_return_text{
  display: flex;
padding: 12px 24px;
justify-content: center;
align-items: center;
gap: 8px;
color: #F6F6F6;
/* padding: 0px;
    margin: 0px; */
}
</style>
