<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div class="content" v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: false,
      validator(value) {
        return value === false || typeof value === "number";
      },
    },
    closeButton: {
      type: Object,
      default: () => {
        //如果你的default值是一个对象，不能直接写成一个对象，而是要写成一个函数，再return这个对象。
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].indexOf(value) >= 0;
      },
    },
  },
  mounted() {
    this.upDateStyles();
    this.execAutoClose();
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    upDateStyles() {
      this.$nextTick(() => {
        //类似于setTimeout，只不过不用写时间。
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height //style只能获取内联元素的style
        }px`;
      });
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy(); //不能从页面中删掉自己。
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function")
        this.closeButton.callback();
    },
  },
  computed: {
    toastClasses() {
      return { [`position-${this.position}`]: true };
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(62, 63, 66, 0.4);
$color: #333;
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 1s;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up 1s;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: slide 1s;
    }
  }
}
.toast {
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: $color;
  box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1),
    4px 4px 10px -8px rgba(0, 0, 0, 1),
    -4px -4px 10px -8px rgba(255, 255, 255, 1),
    4px 4px 10px -8px rgba(0, 0, 0, 1);
  background: linear-gradient(
    135deg,
    rgba(230, 230, 230, 1) 0%,
    rgba(246, 246, 246, 1) 100%
  );
  border: 0.5px solid #eee;
  padding-left: 16px;
  .close {
    padding: 0 16px;
    cursor: pointer;
    flex-shrink: 0;
    height: inherit;
  }
  .line {
    border: 0.5px solid #666;
    margin-left: 16px;
  }
  .message {
    word-break: break-all;
    display: flex;
    flex-wrap: wrap;
    padding: 8px 0;
  }
}
</style>