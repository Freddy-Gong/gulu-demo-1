<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=flase">close</button>
    </div>
  </transition>
</template>
<script>
export default {
  name: "GuluSider",
  data() {
    return {
      visible: true
    };
  },
  methods: {}
};
</script>
<style lang="scss"scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
  .slider-enter-active,
  .slider-leave-active {
    transition: transform 1s;
  }
  .slider-enter,
  .slider-leave-to {
    transform: translateX(-150px);
  }
}
</style>