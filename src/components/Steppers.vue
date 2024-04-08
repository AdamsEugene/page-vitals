<template>
  <HeaderNav /> 
  <div class="page_vitals_steppers_cover">
    <!-- feedback modal -->
    <div class="page_vitals_feedback_cover" :class="{ 'page_vital_hidden': !feedbackModalVisible, 'page_vital_display': feedbackModalVisible }">
    <div class="page_vitals_stepper-wrapper">
      <div class="page_vitals_content-wrapper">
        <div class="page_vitals_stepper-content">
          <div class="page_vitals_stepper-pane">
            <div class="page_vitals_step1_content_wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" @click="hideModal">
                <path
                  stroke="black"
                  stroke-width="1"
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                />
              </svg>
              <h2 class="page_vitals_heading">We’d love your feedback!</h2>

              <p class="page_vitals_content_heading">
                Why aren’t these insights relevant to you?
              </p>
              <form action="">
                <textarea rows="14" placeholder="Enter feedback"></textarea>

                <div class="page_vitals_controls">
                  <span id="page_vitals_button"  @click="hideModal">Cancel</span>
                  <button id="page_vitals_button" class="page_vitals_submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
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
                <Step1Component v-if="currentStep === 0" @showFeedbackModal="toggleFeedbackModal" />
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
  import FeedbackModal from '../components/FeedbackModal.vue';
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        steps: ['Copy Analysis', 'Site Speed', 'Error Messages'],
        currentStep: 0,
        showBackButton: false,
        feedbackModalVisible: false,
      };
    },
    components: {
      Step1Component,
      Step2Component,
      Step3Component,
      HeaderNav,
      FeedbackModal
    },
    methods: {
      toggleFeedbackModal() {
      this.feedbackModalVisible = !this.feedbackModalVisible;
    },
    hideModal() {
      this.modalVisible = true; // Set the data property to true to hide the modal
    },
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
    /* background-color: red; */
    /* background-size:100% 100% ;  */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
    width: 100vw;
    /* position: absolute; */

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

/* feedback style */
.page_vitals_feedback_cover{
  background-color: green; height: 120%; position: absolute; z-index: 9999999999;
    display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
  width: 100vw;
  background-color: rgba(77, 88, 97, 0.9);
}

.page_vitals_step1_content_wrapper {
  height: 480px;
}


.page_vitals_stepper-pane {
  padding: 30px 35px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

.page_vitals_link {
  padding: 0px;
  margin: 0px;
  color: var(--Primary-03-Main, #00936f);
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
}

.page_vitals_heading {
  padding: 0px;
  margin: 10px 0px 40px 0px;
  color: var(--Grey-800, var(--Grey-800, #34404b));
  font-size: 22px;
  font-weight: 600;
}

.page_vitals_content_heading {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}

svg {
  display: block;
  margin-left: auto;
  margin-bottom: 20px;
  cursor: pointer;
}

svg:hover {
  fill: var(--Primary-03-Main, #00936f);
}

textarea {
  width: 93.5%;
  padding: 20px;
  border-radius: var(--corner-med, 8px);
  border: 1px solid var(--Grey-200, #e6e7e8);
  background: var(--Grey-White, #fff);
  box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
  resize: none;
}

.page_vitals_controls {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

#page_vitals_button {
  padding: 10px 32px;
  border-radius: 10px;
  border: none;
  background: var(--Grey-White, #fff);
  box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
  color: var(--Primary-03-Main, #4d5861);
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  cursor: pointer;
}

.page_vitals_submit {
  background-color: #008160 !important;
  color: var(--Grey-White, #fff) !important;
}

.page_vital_hidden {
  display: none;
}
.page_vital_display {
  display: flex;
}

  </style>
  