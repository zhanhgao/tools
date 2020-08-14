<template>
    <div>
      <slot name='name-slot' :text='list'></slot>
      <h1>我是HW</h1>
      <slot name="header"/>
      <slot/>
      <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
  data() {
      return {
        list: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
      }
  }
}
</script>
