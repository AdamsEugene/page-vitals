<template>
  <div class="page_vitals_step1_content_wrapper">
    <a class="page_vitals_link">www.cadenlane.org</a>
    <h2 class="page_vitals_heading">Site Speed</h2>
</div>
</template>

<script>
export default {
data() {
  return {
    thumbsUpClicked: false,
    thumbsDownClicked: false
  };
},
methods: {
  handleThumbsUpClick() {
    this.thumbsUpClicked = !this.thumbsUpClicked;
    if (this.thumbsUpClicked) {
      this.thumbsDownClicked = false; // Unselect thumbs down
    }
  },
  handleThumbsDownClick() {
    this.thumbsDownClicked = !this.thumbsDownClicked;
    if (this.thumbsDownClicked) {
      this.thumbsUpClicked = false; // Unselect thumbs up
    }
  }
}
};
</script>

<style scoped>
.page_vitals_step1_content_wrapper {
  display: flex;
  flex-direction: column;
  height: 480px;
}

.page_vitals_button_wrapper {
  padding: 0px 15px;
  margin-top: auto; 
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  background: var(--Grey-White, #FFF);
}

.page_vitals_link {
  padding: 0px;
  margin: 0px;
  color: var(--Primary-03-Main, #00936F);
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
}

.page_vitals_heading {
  padding: 0px;
  margin: 10px 0px 40px 0px;
  color: var(--Grey-800, var(--Grey-800, #34404B));
  font-size: 22px;
  font-weight: 600;
}

.page_vitals_content_ul_heading {
  color: var(--Grey-800, var(--Grey-800, #34404B));
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.page_vitals_content_li {
  margin-bottom: 10px;
}

.thumbs-up-active svg {
stroke: #12904E; 
stroke-width: 0.5px;
}

#page_vitals_thumbs_up{
margin-right: 10px;
}

.thumbs-down-active svg {
stroke: #B71E2D;
stroke-width: 0.5px;
}

/* Style SVG icons */
svg {
width: 24px;
height: 24px; 
cursor: pointer;
}
</style>
