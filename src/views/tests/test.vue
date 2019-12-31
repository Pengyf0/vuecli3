<template>
  <div class="test">
    233333
    <!-- <button @click="toPageson">点击2</button>
    <button @click="toPageson3">点击3</button>
    <hr>
    <div class="div1">
     
    </div> -->
    <div class="common-red"></div>
    <div class="common-grey">
       <div class="common-grey"></div>
    </div>
    <template v-for="item of 6">
      <div v-if="item===1?false:true" :key="item" class="common-red">
        {{item}}
      </div>
    </template>    
    
  </div>
</template>
<script>
export default {
  name:'test',
  provide(){
    return{
      toPageson3:this.toPageson3
    }
  },
  data(){
      return {

      }
  },
  methods:{
    toPageson(){
      this.$router.push({
        path:'/test/test2'
      })
    },
    toPageson3(){
      this.$router.push({
        path:'/test/test3'
      })
    },

  }
}
</script>
<style lang="scss" scoped>
  .test{
    padding:20px;
    .div1{
      height: 300px;
      width: 400px;
      border:1px solid red;
    }
  }
</style>