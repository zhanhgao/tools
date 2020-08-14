<template>
  <div>
    <baseComponent @customize-click="handleCustClick" :test="100"/>
    <!-- <h1>slot使用</h1>
    <SlotC :list="[1,2,3,4]">
      <p>asdasdsa</p>
    </SlotC>

    <br>
    <br>
    <br>

    <h1>slot-scope使用</h1>
    <Scc>
      <div slot-scope="props">{{ props.text }}</div>

      <template v-slot:deff222="props">
        <p>{{props.text}}</p>
      </template>
      <template v-slot:csgo="props">
        <p>{{props.text}}</p>
      </template>
    </Scc> -->
  </div>
</template>
<script>
  const baseComponent = () => import("../components/BaseComponent")
  // const Scc = () => import("../components/CcopedSlotsC")
  // const SlotC = () => import("../components/SlotC")
  export default {
    components: {
      baseComponent,
      // Scc,
      // SlotC
    },
    data() {
      return {
        level: 1
      };
    },
    methods:{
      handleCustClick(){
        alert('收到')
      }
    },
  };
</script>