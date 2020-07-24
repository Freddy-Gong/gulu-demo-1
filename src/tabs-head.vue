<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="warrp">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  position: relative;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid blue;
    transition: all 0.3s;
  }
  .warrp {
    margin-left: auto;
  }
}
</style>