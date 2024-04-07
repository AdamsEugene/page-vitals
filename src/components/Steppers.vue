<template>
  <HeaderNav /> 
  <div class="page_vitals_steppers_cover">
    <div class="page_vitals_stepper-wrapper">
      <div class="page_vitals_stepper">
        <div class="page_vitals_title">Initial Diagnostic</div><br>
        <div class="page_vitals_stepper-line"></div>
        <div class="page_vitals_stepper-labels">
          <div v-for="(label, index) in steps" :key="index" class="page_vitals_stepper-label" :class="{ 'active': currentStep >= index, 'completed': currentStep > index }" @click="setCurrentStep(index)">
            <div class="page_vitals_stepper-circle">
              <div class="page_vitals_checkmark" v-if="currentStep > index">&#10003;</div>
            </div>
            <div class="page_vitals_stepper-text">{{ label }}</div>
          </div>
        </div>
      </div>
      <div class="page_vitals_content-wrapper">
        <div class="page_vitals_stepper-content">
            <div class="page_vitals_stepper-pane">
                <Step1Component v-if="currentStep === 0" />
                <Step2Component v-if="currentStep === 1" />
                <Step3Component v-if="currentStep === 2" />
            </div>
        </div>
        <div class="page_vitals_controls">
    <button id="page_vitals_button" class="page_vitals_back" @click="prevStep">Back</button>
    <button v-if="currentStep !== steps.length - 1" id="page_vitals_button" @click="nextStep">Next</button>
    <button v-else id="page_vitals_button_complete" @click="completeStep">Next</button>
  </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import Step1Component from '../components/Step1Component.vue';
  import Step2Component from '../components/Step2Component.vue';
  import Step3Component from '../components/Step3Component.vue';
  import HeaderNav from '../components/HeaderNav.vue';
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        steps: ['Copy Analysis', 'Site Speed', 'Error Messages'],
        currentStep: 0,
        showBackButton: false 
      };
    },
    components: {
      Step1Component,
      Step2Component,
      Step3Component,
      HeaderNav
    },
    methods: {
      setCurrentStep(index) {
        this.currentStep = index;
        this.showBackButton = index !== 0;
      },
      nextStep() {
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep++;
          this.showBackButton = true;
        }
      },
      prevStep() {
        if (this.currentStep > 0) {
          this.currentStep--;
          this.showBackButton = this.currentStep !== 0;
        }
      },
      completeStep() {
        this.$router.push('/success');
    }
    }
  };
  </script>
  
  <style scoped>
  .page_vitals_stepper-content {
  flex-grow: 1;
  width: 800px;
  background: #F6F6F6;
  border-radius: 8px;
}


  .page_vitals_steppers_cover {
    /* background-size:100% 100% ;  */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 100vw;
    position: fixed;
    /* z-index: -1; */
  }
  .page_vitals_stepper-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* width: 100%; */
    /* height: 100vh; */
  }

  .page_vitals_content-wrapper {
  margin-left: 74px;
  width: 800px;
}

  .page_vitals_stepper {
    align-items: flex-start;
  }

  .page_vitals_title {
  color: var(--Grey-White, #FFF);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
  margin-top: 40px;
}

  .page_vitals_stepper-line {
    background-color: #ccc;
    width: 2px;
    height: 100%;
    margin-right: 20px;
  }
  .page_vitals_stepper-labels {
    display: flex;
    flex-direction: column;
  }
  .page_vitals_stepper-label {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    font-size: 18px;
    color: var(--Grey-White, #FFF);;
  }
  .page_vitals_stepper-label .page_vitals_stepper-circle {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: none;
    border: 2px solid #F6F6F6;
    margin-right: 10px;
  }
  .page_vitals_stepper-label.active .page_vitals_stepper-circle {
    background-color: #f6f6f6;
  }
  .page_vitals_stepper-text {
    font-size: 16px;
  }

  .page_vitals_stepper-pane {
    padding: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    /* margin-top: -40px; */
  }
  .page_vitals_controls {
    display: flex;
  justify-content: space-between;
  margin-top: 20px;
  }
  
  .page_vitals_stepper-label:not(:last-child) .page_vitals_stepper-circle::after {
    content: '';
    position: absolute;
    width: 2px;
    height:40px;
    background-color: #ccc;
    bottom: -45px;
    left: 50%;
    transform: translateX(-50%);
  }

  #page_vitals_button{
    padding: 12px 32px;
    border-radius: 10px;
    border: none;
    background: var(--Grey-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
    color: var(--Primary-03-Main, #00936F);
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    cursor: pointer;
  }

  .page_vitals_back{
    background-color: #004F3B !important;
    color: var(--Grey-White, #FFF) !important;
  }

.page_vitals_checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: green;
  font-size: 14px;
  font-weight: 900;
}

#page_vitals_button_complete {
  padding: 12px 32px;
  border-radius: 10px;
  border: none;
  background: var(--Grey-White, #FFF);
  box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
  color: var(--Primary-03-Main, #00936F);
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  cursor: pointer;
}

@media only screen and (max-width: 1200px) {
  body {
    background-color: lightblue;
  }
}
  </style>
  