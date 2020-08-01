<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
import "./svg";
export default {
  props: ["name"],
};
</script>
<style lang="scss" scoped>
.g-icon {
  margin: 0.2em;
  width: 1em;
  height: 1em;
}
</style>