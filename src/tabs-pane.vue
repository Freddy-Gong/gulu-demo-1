<template>
  <div class="tabs-pane" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsPane",
  inject: ["eventBus"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    // 不需要用户传值，自身维护
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.tabs-pane {
  display: none;
  padding: 1em;
  &.active {
    display: block;
  }
}
</style>