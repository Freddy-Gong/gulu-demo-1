<template>
  <div>
    <g-button>默认样式</g-button>
    <g-button icon="settings">默认样式</g-button>
    <g-button :loading="true">默认样式</g-button>
    <g-button disabled>默认样式</g-button>
    <pre>
    <code>{{content}}</code>
</pre>
  </div>
</template>
<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button,
  },
  data() {
    return {
      content: `
<g-button>默认样式</g-button>
<g-button icon="settings">默认样式</g-button>
<g-button :loading="true">默认样式</g-button>
<g-button disabled>默认样式</g-button>
          `,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>