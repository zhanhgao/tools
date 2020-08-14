<script>
export default {
  data(){
    return {
      default:'default',
      deff222:'deff222',
      csgo:'csgo'
    }
  },
  props: ['list'],
  render(h){
    console.log('我是this.$scopedSlots',this.$scopedSlots);
    
    // 创建 template `<div><slot :text="deff222"></slot></div>`
        return h('div', [
            this.$scopedSlots.default({
                text: this.default
            }),
            this.$scopedSlots.deff222({
                text: this.deff222
            }),
            this.$scopedSlots.csgo({
                text: this.csgo
            })
        ])
        
 }
}
</script>
 
 