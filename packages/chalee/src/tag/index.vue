<template>
  <div class="demo-tag" :style="`background-color:${color}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ChTag',
  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="less">
.demo-tag {
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
</style>
