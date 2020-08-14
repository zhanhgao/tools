<script>
export default {
  
  props: ['list'],
  render(h){
   console.log('我是$slots ',this.$slots);
   
    // 创建 template `<div><slot></slot></div>`
    return h('div', [this.list.map(item=>'-'+item),this.$slots.default])
        
 }
}
</script>
 
 