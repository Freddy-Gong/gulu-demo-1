<template>
  <div class="wrapper" :class="{error}">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
    <div class="icon-error" v-if="error">
      <icon name="error"></icon>
      <span class="errorMessage">{{error}}</span>
    </div>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  components: { Icon },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: white;
$border-radius: 10px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  display: inline;
  font-size: $font-size;
  > .icon-error {
    align-items: center;
    display: inline-flex;
    color: $red;
    fill: $red;
    > :not(:last-child) {
      margin-right: 0.5em;
    }
  }
  > input {
    height: $height;
    border-radius: $border-radius;
    padding: 0 0 0 8px;
    box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1),
      4px 4px 10px -8px rgba(0, 0, 0, 1),
      -4px -4px 10px -8px rgba(255, 255, 255, 1),
      4px 4px 10px -8px rgba(0, 0, 0, 1);
    background: linear-gradient(
      135deg,
      rgba(230, 230, 230, 1) 0%,
      rgba(246, 246, 246, 1) 100%
    );
    border: 0.5px solid #eee;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1) inset,
        4px 4px 10px -8px rgba(0, 0, 0, 1) inset;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
      box-shadow: none;
    }
  }
}
</style>