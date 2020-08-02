<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `g-button-group 的子元素应该全是 g-button,但你写的是${name}`
        );
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      box-shadow: 4px -4px 10px -8px rgba(255, 255, 255, 1),
        -4px 4px 10px -8px rgba(0, 0, 0, 1),
        4px -4px 10px -8px rgba(255, 255, 255, 1),
        -4px 4px 10px -8px rgba(0, 0, 0, 1);
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
}
// .g-button-group {
//   display: inline-flex;
//
//   > .g-button {
//
//     &:not(:first-child) {
//       margin-left: -1px;
//     }
//
//     &:hover {
//       position: relative;
//       z-index: 1;
//     }
//   }
// }
</style>