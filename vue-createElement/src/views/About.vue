<script>
import {extendsTest} from '../extend.js';
const component = {
  
  template: `
    <div>
      <input type="text" v-model="text"/>
      <span>{{propOne}}</span>
    </div>
  `,
  data () {
    return {
      text: 0,
      propOne: 'propOne'
    }
  },
  mounted () {
    console.log('comp mounted')
  }
}

const component2 = {
  extends: component, // 指定继承组件
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log('comp2 mounted')
  }
}

export default {
  data(){
    return{
      msg:'msg'
    };
  },
  created(){
      console.log("1212");
  },
  components:{
    extendsTest
  },
  // render: h => h('h2')
  // render: h => h({
  //   template: " <div>锄禾日当午</div> "
  // })
  render: h => h(component2)
}
</script>