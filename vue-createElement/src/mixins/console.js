// template版本
// export default function WithConsole (Base) {
//   return {
//     template: '<base v-on="$listeners" v-bind="$attrs"/>',
//     components: {
//       wrapped: Base
//     },
//     mounted () {
//       console.log('我是mixin mounted log')
//     }
//   }
// }

// render版本
export default function Console (Base) {
    return {
      mounted () {
        console.log('我是HOC mounted log')
      },
      props: Base.props,
      render (h) {
        const slots = Object.keys(this.$slots)
          .reduce((acc, cur) => acc.concat(this.$slots[cur]), [])
          // 手动更正 context
          .map(vnode => {
            vnode.context = this._self //绑定到高阶组件上
            return vnode
          })

        return h(Base, {
          on: this.$listeners,
          props: this.$props,
          attrs: this.$attrs
        }, slots)
      }
    }
}