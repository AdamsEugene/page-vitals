<template>
    <div class="stepper-wrapper">
        <div class="stepper">
          <div class="title">Initial Diagnostic</div><br>
        <div class="stepper-line"></div>
        <div class="stepper-labels">
            <div v-for="(label, index) in steps" :key="index" class="stepper-label" :class="{ 'active': currentStep >= index, 'completed': currentStep > index }" @click="setCurrentStep(index)">
  <div class="stepper-circle">
    <div class="checkmark" v-if="currentStep > index">&#10003;</div>
  </div>
  <div class="stepper-text">{{ label }}</div>
</div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="stepper-content">
          <div v-for="(content, index) in contents" :key="index" class="stepper-pane" v-show="currentStep === index">
            {{ content }}
          </div>
        </div>
        <div class="controls">
          <button id="page_vitals_button" class="back" @click="prevStep" :disabled="currentStep === 0" v-if="currentStep !== 0">Back</button>
          <button id="page_vitals_button" @click="nextStep" :disabled="currentStep === steps.length - 1">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steps: ['Copy Analysis', 'Site Speed', 'Error Messages'],
        contents: ['Content for Step 1', 'Content for Step 2', 'Content for Step 3'],
        currentStep: 0 
      };
    },
    methods: {
      setCurrentStep(index) {
        this.currentStep = index;
      },
      nextStep() {
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep++;
        }
      },
      prevStep() {
        if (this.currentStep > 0) {
          this.currentStep--;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .stepper-content {
  flex-grow: 1;
  width: 816px;
}

  .stepper-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .content-wrapper {
  margin-left: 74px;
  width: 816px;
}

  .stepper {
    align-items: flex-start;
  }

  .title {
  color: var(--Grey-White, #FFF);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
}

  .stepper-line {
    background-color: #ccc;
    width: 2px;
    height: 100%;
    margin-right: 20px;
  }
  .stepper-labels {
    display: flex;
    flex-direction: column;
  }
  .stepper-label {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    font-size: 18px;
    color: var(--Grey-White, #FFF);;
  }
  .stepper-label .stepper-circle {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: none;
    border: 2px solid #F6F6F6;
    margin-right: 10px;
  }
  .stepper-label.active .stepper-circle {
    background-color: #f6f6f6;
  }
  .stepper-text {
    font-size: 16px;
  }
  .stepper-content {
    flex-grow: 1;
  }
  .stepper-pane {
    padding: 40px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-top: -40px;
  }
  .controls {
    display: flex;
  justify-content: space-between;
  margin-top: 20px;
  }
  
 
  .stepper-label:not(:last-child) .stepper-circle::after {
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

  .back{
    background-color: #004F3B !important;
    color: var(--Grey-White, #FFF) !important;
  }


.checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: green;
  font-size: 14px;
  font-weight: 900;
}
  </style>
  