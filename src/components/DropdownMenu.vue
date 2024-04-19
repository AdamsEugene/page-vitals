<template>
  <div class="pv_dropdown_wrapper">
    <p
      v-for="item in data"
      :key="item"
      class="pv_dropdown_wrapper_item"
      :class="{ active: item === selected }"
      @click="onSelect(item)"
    >
      {{ item }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["data", "selected"],
  methods: {
    onSelect(item: string) {
      this.$emit("item-selected", item);
    },
  },
});
</script>

<style>
.pv_dropdown_wrapper {
  position: absolute;
  top: 46px;
  left: 0;
  width: 100%;
  max-height: 300px;
  background-color: #fff;
  border: 1px solid #dadada;
  border-radius: 6px;
  overflow: auto;

  .pv_dropdown_wrapper_item {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
    padding: 8px 12px !important;
    display: flex;
    align-items: center;

    &:hover {
      background: #192128;
      color: #fff;
    }

    &.active {
      background: #00c191;
      color: #fff;
    }

    &.active:hover {
      background: #00c191;
      color: #fff;
    }
  }
}
</style>
