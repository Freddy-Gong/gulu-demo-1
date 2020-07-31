<template>
  <div class="collapseItem" @click="toggle">
    <div class="title">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluCollapseItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (name) => {
        if (name !== this.name) {
          this.open = false;
        } else {
          this.open = true;
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.open = false;
      } else {
        this.eventBus && this.eventBus.$emit("update:selected", this.name);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.collapseItem {
  > .title {
    border: 1px solid #ddd;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  > .content {
    padding: 8px;
  }
  &:first-child {
    > .title {
      margin-top: -1px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>