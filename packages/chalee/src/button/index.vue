<template>
  <button class="demo-button" :style="`background-color:${color}`">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    color: {
      type: String,
      default: '#e4392c',
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="less">
.demo-button {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  border: none;
  border-radius: 30px;
}
</style>
