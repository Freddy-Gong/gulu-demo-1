<template>
  <div class="collapseItem" @click="open=!open">
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
      require: true,
    },
  },
  data() {
    return {
      open: false,
    };
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