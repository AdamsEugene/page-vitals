<script setup lang="ts">
import GetStarted from './components/GetStarted.vue';
import Steppers from './components/Steppers.vue';
import FeedbackModal from './components/FeedbackModal.vue';
import Success from './components/Success.vue';
</script>

<template>
  <div id="app" >
    <header class="header">
    <div class="logo">
    </div>
  </header>
    <!-- <GetStarted /> -->
    <Steppers />
    <!-- <FeedbackModal/> -->
    <!-- <Success/> -->
  </div>
</template>

<style scoped>
.header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      position: fixed;
      width: 100vw;
      overflow: hidden !important;
      top: -100%;
    }

    /* Logo styles */
    .logo {
      width: 50px; /* Adjust the width as needed */
      height: auto; /* Maintain aspect ratio */
    }
</style>
