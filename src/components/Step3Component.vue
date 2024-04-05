<template>
  <section class="page_vitals_step1_content_wrapper">
    <a class="page_vitals_link">www.cadenlane.org</a>
    <h2 class="page_vitals_heading">Error Messages</h2>

    <div>
      <p class="page_vitals_content_download_button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17 16" fill="none">
          <path d="M8.5 11.3333V2" stroke="#00936F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.5 7.33333L8.5 11.3333L12.5 7.33333" stroke="#00936F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.1663 14H3.83301" stroke="#00936F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> <span>PDF Download</span> 
      </p>
    </div>

    <!-- Accordion section -->
    <div class="page_vitals_accordion-container">
      <div class="page_vitals_accordion_content_header">
        <div>
          <span>hello</span>
          <span>hello</span>
        </div>
        <span>5 Errors</span>
      </div>
      <!-- Accordion 1 -->
      <div class="page_vitals_accordion_cover">
        <input type="checkbox" id="accordion1" class="page_vitals_accordion-checkbox">
        <label for="accordion1" class="page_vitals_accordion-heading">Uncaught Error: Yotpo Loyalty SDK loader scripUncaught Error: Yotpo Loyalty SDK loader scrip already loaded Tx60AxAaFloLi0...... already loaded Tx60AxAaFloLi0......
          <span class="page_vitals_arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
          <path stroke="black" stroke-width="1" fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
        </span>
        </label>
        <div class="page_vitals_accordion-content">
          <p>Accordion 1 Content here...</p>
        </div>
      </div>

      <!-- Accordion 2 -->
      <div class="page_vitals_accordion_cover">
        <input type="checkbox" id="accordion2" class="page_vitals_accordion-checkbox">
        <label for="accordion2" class="page_vitals_accordion-heading">Accordion 2 
          <span class="page_vitals_arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
          <path stroke="black" stroke-width="1" fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
        </span>
        </label>
        <div class="page_vitals_accordion-content">
          <p>Accordion 2 Content here...</p>
        </div>
      </div>

      <!-- Accordion 3 -->
      <div class="page_vitals_accordion_cover">
        <input type="checkbox" id="accordion3" class="page_vitals_accordion-checkbox">
        <label for="accordion3" class="page_vitals_accordion-heading">Accordion 3 
          <span class="page_vitals_arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
          <path stroke="black" stroke-width="1" fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
        </span>
        </label>
        <div class="page_vitals_accordion-content">
          <p>Accordion 3 Content here...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page_vitals_step1_content_wrapper {
  display: flex;
  flex-direction: column;
  height: 480px;
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
  border: 1px solid  #E6E7E8;
}

.page_vitals_accordion-checkbox {
  display: none;
}

.page_vitals_accordion-heading {
  /* margin-top: 10px; */
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:  #34404B;
  font-size: 14px;
  font-weight: 500;
}

.page_vitals_accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
}

.page_vitals_accordion-checkbox:checked + .page_vitals_accordion-heading .page_vitals_arrow {
  transform: rotate(180deg);
  transition: 0.2s ease-in-out;
}

.page_vitals_arrow {
  transition: transform 0.66s ease;
}

.page_vitals_accordion-checkbox:checked + .page_vitals_accordion-heading + .page_vitals_accordion-content {
  max-height: 1000px; 
  transition: 0.5s ease-in-out;
}

.page_vitals_accordion_content_header{
display: flex;
justify-content: space-between;
border-bottom:  1px solid var(--Grey-200, #E6E7E8);
padding: 16px 18px;
}

.page_vitals_accordion_cover{
  border-bottom:  1px solid var(--Grey-200, #E6E7E8);
padding: 14px 18px;
}


</style>
