<template>
  <transition name="slide-fade">
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
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  margin-left: -150px;
}
</style>