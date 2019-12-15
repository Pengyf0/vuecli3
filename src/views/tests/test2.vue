<template>
  <div class="test2">
    自页面2号
    <hr>
    <button @click="twoToThree">跳到3页面</button>
  </div>
</template>
<script>
export default {
  name:'test2',
  inject:['toPageson3'],
  data(){
      return {

      }
  },
  methods:{
    twoToThree(){
      this.toPageson3()
    }
  }
  
}
</script>
<style lang="scss" scoped>
  .test2{
    padding:20px;
    
  }
</style>