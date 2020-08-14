<template>
  <div>
    开始表演👇👇👇
    <br>
    <br>
    <br>
     <Base @Base-click="click1" :test="100" >
       <h2 slot="slot1">BaseComponent slot</h2>
       <p>default slot</p>
     </Base>
    <br>
    <br>
    <br>
    <!-- ---------我是分割线------------- -->
    <wrapBase @Base-click="click1" :test="100" >
      <h2 slot="slot1">HOC slot</h2>
      <p>default slot</p>
    </wrapBase>
  </div>
</template>
<script>
// const Base = () => import("../components/Base.vue");
import Base from '../components/Base.vue';
// console.log('Base组件是什么=>',Base);

// 使用mixin
// import mixins from '../mixins/index.js';
// console.log('mixins是什么=>',mixins);

// 使用hoc替代minxin
import Console from '../mixins/console';
const wrapBase = Console(Base);

export default {
  data(){
    return {

    }
  },
  components: {
      Base,
      wrapBase
  },
  // mixins:[mixins],
  props: {
    test: Number
  },
  methods: {
    click1 (e) {
      console.log(e);
    }
  }
}
</script>