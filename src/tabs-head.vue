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
  created() {
    this.eventBus.$on("update:selected", (item, vm) => {
      console.log(item);
      console.log(vm);
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
    width: 80px;
    border-bottom: 1px solid blue;
  }
  .warrp {
    margin-left: auto;
  }
}
</style>