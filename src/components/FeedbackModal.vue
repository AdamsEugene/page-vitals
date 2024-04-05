<template>
  <div :class="{'page_vitals_steppers_cover': true, 'page_vital_hidden': modalVisible}">
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
</template>
    
<script>
export default {
  data() {
    return {
      modalVisible: false
    };
  },
  methods: {
    hideModal() {
      this.modalVisible = true; // Set the data property to true to hide the modal
    }
  }
};
</script>
    
    <style scoped>
.page_vitals_stepper-content {
  z-index: 999;
  flex-grow: 1;
  width: 700px;
  background: #f6f6f6;
  border-radius: 8px;
}

.page_vitals_step1_content_wrapper {
  height: 480px;
}

.page_vitals_steppers_cover {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  background-color: rgba(77, 88, 97, 0.9);
  z-index: 1;
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

</style>
    