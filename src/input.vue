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
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
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
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 0 0 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
}
</style>