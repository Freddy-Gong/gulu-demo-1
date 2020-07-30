<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="  visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  data() {
    return { visible: false };
  },
  mounted() {
    console.log(this.$refs.triggerWrapper);
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        setTimeout(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let {
            width,
            height,
            top,
            left,
          } = this.$refs.triggerWrapper.getBoundingClientRect();
          console.log(width, height, top, left);
          this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
          this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
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
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>