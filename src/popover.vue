<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  data() {
    return { visible: false };
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        setTimeout(() => {
          let eventHandle = () => {
            this.visible = false;
            console.log("document 隐藏了 popover");
            document.removeEventListener("click", eventHandle);
          };
          document.addEventListener("click", eventHandle);
        }, 1);
      } else {
        console.log("vm 隐藏了 popover");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.popover {
  position: relative;
  display: inline-block;
  vertical-align: top;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>