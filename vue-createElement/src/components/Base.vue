<template>
  <div>
    <slot name="slot1"></slot>
    <span @click="handleClick">props: {{test}}</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Base',
  props: {
    test: Number
  },
  mounted(){
    // console.log(this.$vnode,this.$slots,111);
    // console.log(1111);
    console.log(this,this.$vnode,this.$vnode.context === this.$vnode.componentOptions.children[0].context);
  },
  methods: {
    handleClick () {
      this.$emit('Base-click',{
        msg:'子组件emit'
      })
    }
  }
}
</script>