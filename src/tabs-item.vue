<template>
  <div class="tabs-item" :class="classes" @click="xxx">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsItem",
  data() {
    // 不需要用户传值，自身维护
    return {
      active: false
    };
  },
  props: {
    // 需要用户（前端）传值
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
  display: flex;
  align-items: center;
  padding: 0 1em;
  height: 100%;
  cursor: pointer;
  &.active {
    background: chartreuse;
  }
}
</style>