<template>
  <div class="child">
    <slot :data="list" name="user">
      <h6>具名slot</h6>
    </slot>
    <slot :data="list">
      <h6>无名slot</h6>
    </slot>
  </div>
</template>
<script>
export default {
 data: function(){
  return {
    list: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
  }
 }   
}
</script>
 
 