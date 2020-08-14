<template>
  <div>
    <h1 v-if="level == 1">
      <div>我是slot1</div>
      <slot></slot>
    </h1>
    <h2 v-if="level == 2">
      <div>我是slot1</div>
      <slot></slot>
    </h2>
    <h3 v-if="level == 3">
      <div>我是slot3</div>
      <slot></slot>
    </h3>
    <h4 v-if="level == 4">
      <div>我是slot4</div>
      <slot></slot>
    </h4>
    <h5 v-if="level == 5">
      <div>我是slot5</div>
      <slot></slot>
    </h5>
    <h6 v-if="level == 6">
      <div>我是slot6</div>
      <slot></slot>
    </h6>
  </div>
</template>
<script>
  export default {
    props: {
      level: {
        require: true,
        type: Number,
      }
    }
  };
</script>