<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GuluTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },

  mounted() {
    if (this.$children.length === 0) {
      throw new Error(
        "tabs的子组件应该是tabs-head 和 tabs-body,但你没有写子组件"
      );
    } //$children只能获取到子组件，不能获取到子元素
    this.$children.forEach((vm) => {
      if (vm.$options.name === "GuluTabsHead") {
        vm.$children.forEach((childvm) => {
          if (
            childvm.$options.name === "GuluTabsItem" &&
            childvm.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, childvm);
          }
        });
      }
    });
    //   this.$emit('update:selected','xxx')
  },
};
</script>
<style lang="scss" scoped>
</style>