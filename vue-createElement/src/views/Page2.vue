<template>
  <div class="father">
    <!-- <h3>作用域插槽</h3> -->
    <!--第一次使用：用flex展示数据-->
    <child>
      <!-- <template slot-scope="user">{{user.data}}</template> -->
      <template v-slot="user">{{user.data}}</template>
    </child>
    <!-- <child>
      <template v-slot="user">
        <div class="tmpl">
          <span v-for="item in user.data" :key="item">{{item}}</span>
        </div>
      </template>
    </child> -->
    <!--第二次使用：用列表展示数据-->
    <!-- <child>
      <template slot-scope="user">
        <ul>
          <li v-for="item in user.data" :key="item">{{item}}</li>
        </ul>
      </template>
    </child> -->
    <!--第三次使用：直接显示数据-->
    <!-- <child>
      <template slot-scope="user">{{user.data}}</template>
    </child>
    <child>我就是模板</child>  -->
  </div>
</template>
<script>
import child from '../components/SlotCcope.vue';

export default {
  components: {
      child
  }
}
// https://www.jb51.net/article/160047.htm
</script>