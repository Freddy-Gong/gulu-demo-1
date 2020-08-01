<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  //   props: ["icon", "iconPosition"]
  components: {
    "g-icon": Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right");
        // if (value !== "left" && value !== "right") {
        //   return false;
        // } else {
        //   return true;
        // } 简化
      },
    },
  },
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  padding: 8px;
  border: 0;
  height: $button-height;
  padding: 0 1em;
  border-radius: 10px;
  font-size: $font-size;
  font-family: Helvetica;
  font-weight: normal;
  color: $color;
  box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1),
    4px 4px 10px -8px rgba(0, 0, 0, 1),
    -4px -4px 10px -8px rgba(255, 255, 255, 1),
    4px 4px 10px -8px rgba(0, 0, 0, 1);
  background: $button-bg;
  border: 0.5px solid white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; //inline元素对不齐就加这句话

  &:active {
    box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1) inset,
      4px 4px 10px -8px rgba(0, 0, 0, 1) inset;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    border: 0.5px solid #eee;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .g-button-content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    > .g-button-content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>