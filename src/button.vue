<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props: ["icon", "iconPosition"]
};
</script>
<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; //inline元素对不齐就加这句话
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: var(--button-active-bg);
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
}
</style>