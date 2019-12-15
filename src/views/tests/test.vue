<template>
  <div class="test">
    <button @click="toPageson">点击2</button>
    <button @click="toPageson3">点击3</button>
    <hr>
    <div class="div1">
      <router-view></router-view>
    </div>
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