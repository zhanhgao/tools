<style scoped>
  .box{ background: rgba(0, 0, 0, 0.5) }
  .a{ color: blue; text-decoration: underline }
  .p{ color: firebrick }
</style>

<script>
import hw from './HelloWorld.vue';

export default {
  name: 'BaseComponent',
  props: {
    test: Number,
  },
  methods: {
    handleClick () {
      this.$emit('customize-click')
    }
  },


  // 正常使用
  // render(h){
  //   return h('div',{
  //     'class': {
  //       box: true,
  //     },
  //     style: {
  //       fontSize: '14px'
  //     },
  //   },[
  //      '我是字符串',        
  //       h('p',{ 'class': { p: true } },'我是p标签'),
  //       h('a',{ 'class': { a: true } },'我是a标签呀'),
  //       h('p',{ on: { click: this.handleClick } },'点我!!!')
  //   ])
  // }

  // 使用scopedSlots
  render(h){
    return h(hw,{
      scopedSlots: {
        'name-slot': props => h(
          'ul',
          props.text.map(item=> h('li',item))
        )
      }},[
        h('p',123),
        h('p',666),
        h('p',999)
      ])
  }

}
</script>